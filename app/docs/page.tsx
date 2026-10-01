import Link from "next/link";

export default function Docs() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <div className="mx-auto flex max-w-7xl">

        <aside className="hidden min-h-screen w-64 border-r border-white/[0.06] px-6 py-10 md:block">
          <Link
            href="/"
            className="text-sm text-neutral-500 transition hover:text-white"
          >
            ← Sun
          </Link>

          <nav className="mt-10 space-y-7">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Começando
              </p>

              <div className="space-y-2 text-sm">
                <a className="block text-yellow-300" href="/docs">
                  Introdução
                </a>
                <a className="block text-neutral-400 hover:text-white" href="#">
                  Instalação
                </a>
                <a className="block text-neutral-400 hover:text-white" href="#">
                  Primeiro código
                </a>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Linguagem
              </p>

              <div className="space-y-2 text-sm text-neutral-400">
                <a className="block hover:text-white" href="/docs/variaveis">
  Variáveis
</a>
                <a className="block hover:text-white" href="#">
                  Condições
                </a>
                <a className="block hover:text-white" href="#">
                  Loops
                </a>
                <a className="block hover:text-white" href="#">
                  Funções
                </a>
                <a className="block hover:text-white" href="#">
                  Listas
                </a>
                <a className="block hover:text-white" href="#">
                  Objetos
                </a>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Roblox
              </p>

              <div className="space-y-2 text-sm text-neutral-400">
                <a className="block hover:text-white" href="#">
                  Introdução
                </a>
                <a className="block hover:text-white" href="#">
                  Jogador
                </a>
                <a className="block hover:text-white" href="#">
                  Eventos
                </a>
              </div>
            </div>
          </nav>
        </aside>

        <article className="w-full max-w-3xl px-6 py-16 md:px-12">
          <p className="text-sm font-medium text-yellow-300">
            COMEÇANDO
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Introdução à Sun
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Sun é uma linguagem construída sobre Luau para tornar tarefas
            comuns mais simples de escrever e entender.
          </p>

          <div className="my-10 h-px bg-white/[0.07]" />

          <h2 className="text-2xl font-semibold">
            Carregando a Sun
          </h2>

          <p className="mt-4 leading-7 text-neutral-400">
            Primeiro, carregue a linguagem no seu ambiente:
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
            <code>{`local Sun = loadstring(game:HttpGet("https://raw.githubusercontent.com/blackzww/Sun/refs/heads/main/sun.lua"))()`}</code>
          </pre>

          <h2 className="mt-12 text-2xl font-semibold">
            Seu primeiro código
          </h2>

          <p className="mt-4 leading-7 text-neutral-400">
            O código Sun é executado dentro de um bloco:
          </p>

          <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
            <code>{`Sun[[
    nome = "Mundo"

    mostrar("Olá {nome}!")

    repetir 3
        mostrar("Sun!")
    fim
]]`}</code>
          </pre>

          <div className="mt-10 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
            <p className="font-medium text-yellow-200">
              Sun simplifica Luau, não substitui seu ecossistema.
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-400">
              APIs existentes, como game:GetService(), continuam disponíveis.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
    }
