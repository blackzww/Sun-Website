"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckIcon, CopyIcon, PlayIcon, TerminalIcon } from "@/components/icons";
import { compileSunPreview } from "@/lib/sun-preview-compiler";

const samples = {
  "Olá": `nome = "Black"\n\nmostrar("Olá {nome}!")\n\nrepetir 3\n    mostrar("Sun!")\nfim`,
  "Condições": `idade = 18\nadmin = verdadeiro\n\nse idade => 18 e admin entao\n    mostrar("Acesso liberado")\nsenao\n    mostrar("Acesso negado")\nfim`,
  "Listas": `nomes = ["Black", "Ana", "Joao"]\n\nadicionar(nomes, "Pedro")\n\npara i, nome em nomes\n    mostrar(i + ": " + nome)\nfim`,
  "Roblox": `mostrar("Jogador: {roblox.jogador.nome}")\n\nroblox.velocidade = 50\n\nquando jogador.morrer\n    mostrar("Você morreu")\nfim`,
};

export function Playground() {
  const [source, setSource] = useState(samples["Olá"]);
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => compileSunPreview(source), [source]);
  const lines = source.split("\n").length;

  useEffect(() => {
    const saved = window.localStorage.getItem("sun-playground-code");
    if (saved) setSource(saved);
  }, []);
  useEffect(() => { window.localStorage.setItem("sun-playground-code", source); }, [source]);

  async function copyOutput() {
    await navigator.clipboard.writeText(result.code);
    setCopied(true); window.setTimeout(() => setCopied(false), 1300);
  }

  return (
    <div className="playground-shell">
      <div className="playground-topbar">
        <div>
          <p className="playground-kicker"><TerminalIcon size={16}/> Sun Playground</p>
          <p className="playground-subtitle">Transpilação local no navegador. Roblox não é executado aqui.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {Object.entries(samples).map(([name, code]) => <button key={name} type="button" className="chip" onClick={() => setSource(code)}>{name}</button>)}
        </div>
      </div>

      <div className="playground-grid">
        <section className="editor-panel" aria-label="Editor Sun">
          <div className="editor-toolbar"><span>Sun</span><span>{lines} linhas</span></div>
          <div className="editor-area">
            <div className="line-numbers" aria-hidden="true">{Array.from({ length: lines }, (_, i) => <span key={i}>{i + 1}</span>)}</div>
            <textarea value={source} onChange={(e) => setSource(e.target.value)} spellCheck={false} aria-label="Código Sun" />
          </div>
        </section>

        <section className="editor-panel" aria-label="Luau gerado">
          <div className="editor-toolbar"><span className="flex items-center gap-2"><PlayIcon size={15}/> Luau equivalente</span><button type="button" className="mini-button" onClick={copyOutput}>{copied ? <CheckIcon size={15}/> : <CopyIcon size={15}/>} {copied ? "Copiado" : "Copiar"}</button></div>
          <pre className="output-code"><code>{result.code}</code></pre>
          {result.errors.length > 0 && <div className="playground-errors"><strong>Problemas encontrados</strong>{result.errors.map((error) => <p key={error}>{error}</p>)}</div>}
        </section>
      </div>

      <div className="playground-note"><strong>Importante:</strong> este Playground serve para visualizar a ideia da transpilação. O compilador oficial e o runtime Roblox continuam no <code>sun.lua</code>.</div>
    </div>
  );
}
