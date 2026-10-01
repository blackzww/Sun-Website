import { Fragment } from "react";
import { CopyButton } from "@/components/copy-button";

type Props = {
  code: string;
  language?: "sun" | "luau" | "text" | "bash";
  title?: string;
  copy?: boolean;
};

const sunKeywords = new Set([
  "se", "entao", "senaose", "senao", "casocontrario", "cs", "fim",
  "repetir", "enquanto", "para", "de", "ate", "em", "funcao", "retornar",
  "quando", "mudar", "parar", "continuar", "verdadeiro", "falso", "nulo",
  "e", "ou", "nao", "mostrar", "esperar", "carregar", "local"
]);
const luauKeywords = new Set([
  "if", "then", "elseif", "else", "end", "for", "while", "do", "function",
  "return", "break", "continue", "true", "false", "nil", "and", "or", "not",
  "local", "in", "repeat", "until", "type", "export"
]);

const tokenPattern = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|--[^\n]*|\/\/[^\n]*|\b\d+(?:\.\d+)?\b|=>|\?=|~=|==|<=|>=|\.\.|[{}\[\](),.:=+\-*\/<>]|\b[A-Za-z_À-ÿ][\wÀ-ÿ]*\b)/g;

function highlighted(code: string, language: Props["language"]) {
  const keywords = language === "sun" ? sunKeywords : luauKeywords;
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  let index = 0;

  for (const match of code.matchAll(tokenPattern)) {
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(code.slice(cursor, start));
    const token = match[0];
    let cls = "";
    if (token.startsWith("\"") || token.startsWith("'")) cls = "tok-string";
    else if (token.startsWith("//") || token.startsWith("--")) cls = "tok-comment";
    else if (/^\d/.test(token)) cls = "tok-number";
    else if (keywords.has(token)) cls = "tok-keyword";
    else if (/^(=>|\?=|~=|==|<=|>=|\.\.|[{}\[\](),.:=+\-*\/<>])$/.test(token)) cls = "tok-operator";
    else if (/^[A-Z]/.test(token)) cls = "tok-type";

    nodes.push(cls ? <span className={cls} key={index++}>{token}</span> : <Fragment key={index++}>{token}</Fragment>);
    cursor = start + token.length;
  }
  if (cursor < code.length) nodes.push(code.slice(cursor));
  return nodes;
}

export function CodeBlock({ code, language = "sun", title, copy = true }: Props) {
  return (
    <div className="code-frame">
      <div className="code-toolbar">
        <div className="flex items-center gap-2">
          <span className="code-dot" />
          <span className="code-label">{title ?? language.toUpperCase()}</span>
        </div>
        {copy && <CopyButton value={code} />}
      </div>
      <pre className="code-pre"><code>{language === "text" || language === "bash" ? code : highlighted(code, language)}</code></pre>
    </div>
  );
}
