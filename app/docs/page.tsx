import Image from "next/image";
import Link from "next/link";

const loader = `local Sun = loadstring(game:HttpGet("https://raw.githubusercontent.com/blackzww/Sun/refs/heads/main/sun.lua"))()

Sun[[
    mostrar("Olá, Sun!")
]]`;

export default function Docs() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <div className="mx-auto flex max-w-7xl">

        {/* SIDEBAR */}
        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-white/[0.06] px-6 py-8 md:block">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/sun.png"
              alt="Sun"
              width={34}
              height={34}
            />

            <div>
              <p className="font-semibold leading-none">
                Sun
              </p>

              <p className="mt-1 text-xs text-neutral-600">
                Documentação
              </p>
            </div>
          </Link>

          <nav className="mt-10 space-y-8">

            {/* COMEÇANDO */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Começando
              </p>

              <div className="space-y-1 text-sm">
                <Link
                  href="/docs"
                  className="block rounded-lg bg-yellow-300/[0.07] px-3 py-2 font-medium text-yellow-300"
                >
                  Introdução
                </Link>

                <Link
                  href="/docs/instalacao"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Instalação
                </Link>
              </div>
            </div>

            {/* LINGUAGEM */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Linguagem
              </p>

              <div className="space-y-1 text-sm">
                <Link
                  href="/docs/variaveis"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Variáveis
                </Link>

                <Link
                  href="/docs/condicoes"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Condições
                </Link>

                <Link
                  href="/docs/loops"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Loops
                </Link>

                <Link
                  href="/docs/funcoes"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Funções
                </Link>

                <Link
                  href="/docs/listas"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Listas
                </Link>

                <Link
                  href="/docs/objetos"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Objetos
                </Link>

                <Link
                  href="/docs/texto"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Texto
                </Link>

                <Link
                  href="/docs/comentarios"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Comentários
                </Link>
              </div>
            </div>

            {/* ROBLOX */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Roblox
              </p>

              <div className="space-y-1 text-sm">
                <Link
                  href="/docs/roblox"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Introdução
                </Link>

                <Link
                  href="/docs/roblox/jogador"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Jogador
                </Link>

                <Link
                  href="/docs/roblox/eventos"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Eventos
                </Link>

                <Link
                  href="/docs/roblox/apis-luau"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  APIs Luau
                </Link>
              </div>
            </div>

            {/* AVANÇADO */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Avançado
              </p>

              <div className="space-y-1 text-sm">
                <Link
                  href="/docs/bibliotecas"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Bibliotecas
                </Link>

                <Link
                  href="/docs/debug"
                  className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                >
                  Debug
                </Link>
              </div>
            </div>
          </nav>

          <div className="mt-10 border-t border-white/[0.06] pt-6">
            <a
              href="https://github.com/blackzww/Sun"
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg px-3 py-2 text-sm text-neutral-500 transition hover:bg-white/[0.03] hover:text-white"
            >
              GitHub ↗
            </a>
          </div>
        </aside>

        {/* CONTEÚDO */}
        <article className="min-w-0 flex-1 px-6 py-12 md:px-12 md:py-16 lg:px-16">
          <div className="mx-auto max-w-3xl">

            {/* MOBILE */}
            <div className="mb-12 flex items-center justify-between md:hidden">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold"
              >
                <Image
                  src="/sun.png"
                  alt="Sun"
                  width={30}
                  height={30}
                />

                Sun
              </Link>

              <span className="text-sm text-neutral-500">
                Docs
              </span>
            </div>

            <p className="text-sm font-medium text-yellow-300">
              COMEÇANDO
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Introdução à Sun
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Sun é uma linguagem construída sobre Luau com um objetivo:
              tornar código mais simples de escrever, ler e aprender sem
              abandonar o ecossistema original.
            </p>

            <div className="my-10 h-px bg-white/[0.07]" />

            {/* FILOSOFIA */}
            <h2 className="text-2xl font-semibold tracking-tight">
              O que é Sun?
            </h2>

            <p className="mt-4 leading-7 text-neutral-400">
              A Sun simplifica partes da sintaxe de Luau que podem ser
              desnecessariamente complicadas, principalmente para quem está
              começando.
            </p>

            <p className="mt-4 leading-7 text-neutral-400">
              Ela não tenta substituir APIs, bibliotecas ou recursos que já
              funcionam bem. Código Luau reconhecível continua disponível
              quando necessário.
            </p>

            <div className="mt-7 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
              <p className="font-medium text-yellow-200">
                A regra principal
              </p>

              <p className="mt-2 leading-7 text-neutral-400">
                Sun só existe para facilitar Luau. Tudo que puder ser
                simplificado sem criar confusão deve ser simplificado. O resto
                continua compatível com Luau.
              </p>
            </div>

            {/* PRIMEIRO CÓDIGO */}
            <h2 className="mt-14 text-2xl font-semibold tracking-tight">
              Seu primeiro código
            </h2>

            <p className="mt-4 leading-7 text-neutral-400">
              Carregue a Sun e passe seu código para{" "}
              <code className="text-yellow-200">Sun[[ ]]</code>.
            </p>

            <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
              <code>{loader}</code>
            </pre>

            {/* EXEMPLO */}
            <h2 className="mt-14 text-2xl font-semibold tracking-tight">
              Sintaxe simples
            </h2>

            <p className="mt-4 leading-7 text-neutral-400">
              Por exemplo, para repetir uma mensagem três vezes:
            </p>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-yellow-300/10 bg-[#0d0d0d]">
                <div className="border-b border-white/[0.06] px-4 py-3 text-xs font-medium text-yellow-300">
                  Sun
                </div>

                <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-300">
                  <code>{`repetir 3
    mostrar("Olá!")
fim`}</code>
                </pre>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d0d0d]">
                <div className="border-b border-white/[0.06] px-4 py-3 text-xs font-medium text-neutral-500">
                  Luau
                </div>

                <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-400">
                  <code>{`for i = 1, 3 do
    print("Olá!")
end`}</code>
                </pre>
              </div>
            </div>

            {/* LUAU */}
            <h2 className="mt-14 text-2xl font-semibold tracking-tight">
              Compatibilidade com Luau
            </h2>

            <p className="mt-4 leading-7 text-neutral-400">
              A Sun não renomeia APIs apenas para parecer uma linguagem
              diferente. Recursos existentes continuam familiares.
            </p>

            <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
              <code>{`Players = game:GetService("Players")

player = Players.LocalPlayer

parte = Instance.new("Part")`}</code>
            </pre>

            {/* EXEMPLO MAIOR */}
            <h2 className="mt-14 text-2xl font-semibold tracking-tight">
              Um exemplo maior
            </h2>

            <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
              <code>{`nome = "Black"
idade = 18

se idade => 18 entao
    mostrar("Olá {nome}!")
    mostrar("Você é maior de idade.")

    repetir 3
        mostrar("Bem-vindo à Sun!")
    fim
senao
    mostrar("Você é menor de idade.")
fim`}</code>
            </pre>

            {/* DOCUMENTAÇÃO */}
            <h2 className="mt-14 text-2xl font-semibold tracking-tight">
              Explore a documentação
            </h2>

            <p className="mt-4 leading-7 text-neutral-400">
              A documentação está dividida entre os fundamentos da linguagem,
              integração com Roblox e recursos avançados.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/docs/instalacao"
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-yellow-300/20 hover:bg-yellow-300/[0.03]"
              >
                <p className="font-medium">
                  Começando
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Instalação e primeiros passos com a Sun.
                </p>
              </Link>

              <Link
                href="/docs/variaveis"
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-yellow-300/20 hover:bg-yellow-300/[0.03]"
              >
                <p className="font-medium">
                  Linguagem
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Variáveis, condições, loops, funções e mais.
                </p>
              </Link>

              <Link
                href="/docs/roblox"
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-yellow-300/20 hover:bg-yellow-300/[0.03]"
              >
                <p className="font-medium">
                  Roblox
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Jogador, eventos e compatibilidade com APIs Luau.
                </p>
              </Link>

              <Link
                href="/docs/bibliotecas"
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-yellow-300/20 hover:bg-yellow-300/[0.03]"
              >
                <p className="font-medium">
                  Avançado
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Bibliotecas externas, compatibilidade e debug.
                </p>
              </Link>
            </div>

            {/* OPEN SOURCE */}
            <h2 className="mt-14 text-2xl font-semibold tracking-tight">
              Feita para ser modificada
            </h2>

            <p className="mt-4 leading-7 text-neutral-400">
              A Sun é open source e foi desenvolvida com forte assistência de
              inteligência artificial. A implementação pode conter erros ou
              comportamentos inesperados.
            </p>

            <p className="mt-4 leading-7 text-neutral-400">
              O código foi mantido aberto e legível justamente para que qualquer
              pessoa possa estudar a linguagem, corrigir problemas, modificar
              recursos e contribuir com novas ideias.
            </p>

            <a
              href="https://github.com/blackzww/Sun"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-neutral-300 transition hover:bg-white/[0.07] hover:text-white"
            >
              Ver código no GitHub →
            </a>

            {/* PRÓXIMO */}
            <div className="mt-16 border-t border-white/[0.07] pt-8">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-600">
                Próximo
              </p>

              <Link
                href="/docs/instalacao"
                className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-yellow-300/20 hover:bg-yellow-300/[0.03]"
              >
                <div>
                  <p className="font-medium">
                    Instalação
                  </p>

                  <p className="mt-1 text-sm text-neutral-500">
                    Aprenda como carregar e executar a Sun.
                  </p>
                </div>

                <span className="text-yellow-300">
                  →
                </span>
              </Link>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}
