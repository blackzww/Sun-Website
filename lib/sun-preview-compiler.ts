export type CompileResult = { code: string; errors: string[] };

type Frame = { close: string; kind: string };

function trim(value: string) { return value.trim(); }

function mapOutsideStrings(input: string, transform: (part: string) => string) {
  let out = "";
  let buffer = "";
  let quote = "";
  let escaped = false;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (quote) {
      out += c;
      if (escaped) escaped = false;
      else if (c === "\\") escaped = true;
      else if (c === quote) quote = "";
    } else if (c === '"' || c === "'") {
      out += transform(buffer); buffer = ""; quote = c; out += c;
    } else buffer += c;
  }
  out += transform(buffer);
  return out;
}

function interpolateStrings(input: string) {
  return input.replace(/(["'])([^"']*\{[A-Za-z_][\w.]*\}[^"']*)\1/g, (_all, q: string, body: string) => {
    const parts: string[] = [];
    let cursor = 0;
    const re = /\{([A-Za-z_][\w.]*)\}/g;
    for (const m of body.matchAll(re)) {
      const start = m.index ?? 0;
      if (start > cursor) parts.push(`${q}${body.slice(cursor, start)}${q}`);
      parts.push(`tostring(${m[1]})`);
      cursor = start + m[0].length;
    }
    if (cursor < body.length) parts.push(`${q}${body.slice(cursor)}${q}`);
    return parts.length ? parts.join(" .. ") : `${q}${body}${q}`;
  });
}

function expr(value: string) {
  let v = trim(value);
  const load = v.match(/^carregar\s+(["'].*["'])$/);
  if (load) return `loadstring(game:HttpGet(${load[1]}))()`;
  if (v.startsWith("[") && v.endsWith("]")) v = `{${v.slice(1, -1)}}`;
  v = interpolateStrings(v);
  v = mapOutsideStrings(v, (part) => part
    .replace(/=>/g, ">=")
    .replace(/\?=/g, "~=")
    .replace(/\bverdadeiro\b/g, "true")
    .replace(/\bfalso\b/g, "false")
    .replace(/\bnulo\b/g, "nil")
    .replace(/\bnao\b/g, "not")
    .replace(/\be\b/g, "and")
    .replace(/\bou\b/g, "or")
    .replace(/\btamanho\(([^()]*)\)/g, "#($1)")
    .replace(/\badicionar\(([^,]+),\s*([^,)]+)\)/g, "table.insert($1, $2)")
    .replace(/\bremover\(([^,]+),\s*([^,)]+)\)/g, "table.remove($1, $2)")
    .replace(/\bem\s+roblox\s+([A-Za-z_][\w.]*)/g, (_m, p) => `__sun_roblox_get("${p}")`)
  );
  return v;
}

function stripComment(line: string) {
  let quote = ""; let escaped = false;
  for (let i = 0; i < line.length - 1; i++) {
    const c = line[i];
    if (quote) {
      if (escaped) escaped = false; else if (c === "\\") escaped = true; else if (c === quote) quote = "";
    } else if (c === '"' || c === "'") quote = c;
    else if (c === "/" && line[i + 1] === "/") return line.slice(0, i);
  }
  return line;
}

export function compileSunPreview(source: string): CompileResult {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const out: string[] = ["-- Luau equivalente (runtime interno da Sun omitido)"];
  const errors: string[] = [];
  const stack: Frame[] = [];
  let blockComment = false;
  let listDepth = 0;
  const emit = (line: string, offset = 0) => out.push("    ".repeat(Math.max(0, stack.length + offset)) + line);

  lines.forEach((original, idx) => {
    const number = idx + 1;
    const raw = trim(original);
    if (blockComment) { if (raw.includes("]]")) blockComment = false; return; }
    if (raw.startsWith("//[[")) { if (!raw.includes("]]", 4)) blockComment = true; return; }
    const line = trim(stripComment(original));
    if (!line) return;

    if (listDepth > 0) {
      if (line === "]" || line === "],") { listDepth--; emit(line === "]," ? "}," : "}"); return; }
      emit(expr(line)); return;
    }

    if (line === "fim") {
      const frame = stack.pop();
      if (!frame) { errors.push(`Linha ${number}: 'fim' sem bloco aberto.`); return; }
      emit(frame.close);
      return;
    }
    if (["senao", "casocontrario", "cs"].includes(line)) { emit("else", -1); return; }
    const elseifM = line.match(/^senaose\s+(.+)\s+entao$/); if (elseifM) { emit(`elseif ${expr(elseifM[1])} then`, -1); return; }

    const callback = line.match(/^([A-Za-z_][\w]*)\s*:\s*funcao\s*(.*?)\s*,?$/);
    if (callback) { emit(`${callback[1]} = function(${callback[2].replace(/^\(|\)$/g, "")})`); stack.push({kind:"callback",close:"end,"}); return; }

    const objList = line.match(/^([A-Za-z_][\w]*)\s*:\s*\[$/); if (objList) { emit(`${objList[1]} = {`); listDepth++; return; }
    const objProp = line.match(/^([A-Za-z_][\w]*)\s*:\s*(.+)$/); if (objProp) { emit(`${objProp[1]} = ${expr(objProp[2])}`); return; }

    const show = line.match(/^mostrar\s*\((.*)\)$/); if (show) { emit(`print(${expr(show[1])})`); return; }
    const ms = line.match(/^esperar\s+(.+)\s+(?:ms|milissegundos?)$/); if (ms) { emit(`task.wait((${expr(ms[1])}) / 1000)`); return; }
    const sec = line.match(/^esperar\s+(.+)\s+segundos?$/); if (sec) { emit(`task.wait(${expr(sec[1])})`); return; }
    const wait = line.match(/^esperar\s+(.+)$/); if (wait) { emit(`task.wait(${expr(wait[1])})`); return; }

    const iff = line.match(/^se\s+(.+)\s+entao$/); if (iff) { emit(`if ${expr(iff[1])} then`); stack.push({kind:"if",close:"end"}); return; }
    const rep = line.match(/^repetir\s+(.+)$/); if (rep) { emit(`for __sun_i_${number} = 1, ${expr(rep[1])} do`); stack.push({kind:"loop",close:"end"}); return; }
    const wh = line.match(/^enquanto\s+(.+)$/); if (wh) { emit(`while ${expr(wh[1])} do`); stack.push({kind:"loop",close:"end"}); return; }
    const num = line.match(/^para\s+([A-Za-z_][\w]*)\s+de\s+(.+)\s+ate\s+(.+)$/); if (num) { emit(`for ${num[1]} = ${expr(num[2])}, ${expr(num[3])} do`); stack.push({kind:"loop",close:"end"}); return; }
    const pair = line.match(/^para\s+([A-Za-z_][\w]*)\s*,\s*([A-Za-z_][\w]*)\s+em\s+(.+)$/); if (pair) { emit(`for ${pair[1]}, ${pair[2]} in ipairs(${expr(pair[3])}) do`); stack.push({kind:"loop",close:"end"}); return; }
    const each = line.match(/^para\s+([A-Za-z_][\w]*)\s+em\s+(.+)$/); if (each) { emit(`for _, ${each[1]} in ipairs(${expr(each[2])}) do`); stack.push({kind:"loop",close:"end"}); return; }

    if (line === "parar") { emit("break"); return; }
    if (line === "continuar") { emit("continue"); return; }

    const fn = line.match(/^funcao\s+([A-Za-z_][\w]*)\s*(.*)$/); if (fn) {
      const argsRaw = fn[2].trim().replace(/^\(|\)$/g, "");
      const args = argsRaw ? argsRaw.split(",").map((a) => a.trim()) : [];
      const names: string[] = []; const defaults: {name:string,value:string}[] = [];
      for (const a of args) { const m = a.match(/^([A-Za-z_][\w]*)\s*=\s*(.+)$/); if (m) { names.push(m[1]); defaults.push({name:m[1],value:expr(m[2])}); } else if (a) names.push(a); }
      emit(`function ${fn[1]}(${names.join(", ")})`); stack.push({kind:"function",close:"end"}); defaults.forEach((d) => emit(`if ${d.name} == nil then ${d.name} = ${d.value} end`)); return;
    }
    if (line === "retornar") { emit("return"); return; }
    const ret = line.match(/^retornar\s+(.+)$/); if (ret) { emit(`return ${expr(ret[1])}`); return; }

    if (line === "quando jogador.personagem mudar") { emit(`game:GetService("Players").LocalPlayer.CharacterAdded:Connect(function(personagem)`); stack.push({kind:"event",close:"end)"}); return; }
    if (line === "quando jogador.morrer") { emit(`__sun_humanoid().Died:Connect(function()`); stack.push({kind:"event",close:"end)"}); return; }
    if (line === "quando jogador.pular") { emit(`__sun_humanoid().Jumping:Connect(function(ativo)`); stack.push({kind:"event",close:"end)"}); return; }

    const setRoblox = line.match(/^em\s+roblox\s+([A-Za-z_][\w.]*)\s*=\s*(.+)$/); if (setRoblox) { emit(`__sun_roblox_set("${setRoblox[1]}", ${expr(setRoblox[2])})`); return; }
    const list = line.match(/^(.*?)\s*=\s*\[$/); if (list) { emit(`${list[1].trim()} = {`); listDepth++; return; }
    emit(expr(line));
  });

  if (blockComment) errors.push("Comentário //[[ não foi fechado com ]].");
  if (listDepth > 0) errors.push("Existe uma lista '[' que não foi fechada com ']'.");
  if (stack.length) errors.push(`${stack.length} bloco(s) aberto(s) sem 'fim'.`);
  return { code: out.join("\n"), errors };
}
