import Link from "next/link";

export default function Instalacao() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/docs"
          className="text-sm text-neutral-500 transition hover:text-white"
        >
          ← Documentação
        </Link>

        <p className="mt-12 text-sm font-medium text-yellow-300">
          COMEÇANDO
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Instalação
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          A Sun é carregada diretamente pelo arquivo oficial{" "}
          <code className="text-yellow-200">sun.lua</code> hospedado no
          GitHub.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        <h2 className="text-2xl font-semibold">
          Carregando a Sun
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Carregue a linguagem antes de executar seu código Sun:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`local Sun = loadstring(game:HttpGet("https://raw.githubusercontent.com/blackzww/Sun/refs/heads/main/sun.lua"))()`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Executando código Sun
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Depois de carregar a linguagem, escreva seu código dentro de{" "}
          <code className="text-yellow-200">Sun[[ ]]</code>.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`local Sun = loadstring(game:HttpGet("https://raw.githubusercontent.com/blackzww/Sun/refs/heads/main/sun.lua"))()

Sun[[
    mostrar("Olá, Sun!")
]]`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Pronto
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          A partir daqui, tudo que estiver dentro do bloco será interpretado
          pela Sun e transformado em Luau antes da execução.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Sun[[
    nome = "Black"

    mostrar("Olá {nome}!")

    repetir 3
        mostrar("Sun!")
    fim
]]`}</code>
        </pre>

        <div className="mt-10 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            Código aberto
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            A Sun é open source. Você pode abrir o sun.lua, estudar como a
            linguagem funciona, modificar o compilador e criar sua própria
            versão.
          </p>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Introdução
          </Link>

          <Link
            href="/docs/variaveis"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Variáveis →
          </Link>
        </div>
      </div>
    </main>
  );
}
