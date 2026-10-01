import Image from "next/image";

const sunCode = `nome = "Mundo"

mostrar("Olá {nome}!")

se nome ?= nulo entao
    repetir 3
        mostrar("Bem-vindo à Sun!")
    fim
fim`;

const luauCode = `local nome = "Mundo"

print("Olá " .. nome .. "!")

if nome ~= nil then
    for i = 1, 3 do
        print("Bem-vindo à Sun!")
    end
end`;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-white">

      {/* Fundo */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-yellow-300/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Header */}
      <header className="border-b border-white/[0.06] bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/sun.png"
              alt="Sun"
              width={36}
              height={36}
              priority
            />

            <span className="text-lg font-semibold tracking-tight">
              Sun
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-neutral-400 sm:flex">
            <a
              href="/docs"
              className="transition-colors hover:text-white"
            >
              Documentação
            </a>

            <a
              href="#exemplos"
              className="transition-colors hover:text-white"
            >
              Exemplos
            </a>

            <a
              href="#sobre"
              className="transition-colors hover:text-white"
            >
              Sobre
            </a>
          </nav>

          <a
            href="https://github.com/blackzww/Sun"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-300/15 bg-yellow-300/[0.06] px-4 py-2 text-sm text-yellow-200">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
            Uma linguagem construída sobre Luau
          </div>

          <h1 className="text-5xl font-bold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            Programação,
            <span className="block bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              simplificada.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            Sun reduz a complexidade do Luau sem esconder seu poder.
            Uma sintaxe mais simples para aprender, escrever e entender.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="/docs"
              className="rounded-xl bg-yellow-300 px-6 py-3 font-semibold text-black transition hover:bg-yellow-200"
            >
              Começar com Sun
            </a>

            <a
              href="#exemplos"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-neutral-200 transition hover:bg-white/[0.07]"
            >
              Ver exemplos
            </a>
          </div>
        </div>

        {/* Editor */}
        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="absolute inset-0 -z-10 bg-yellow-300/10 blur-[100px]" />

          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d] shadow-2xl shadow-black/60">
            <div className="flex h-12 items-center justify-between border-b border-white/[0.06] px-5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>

                <span className="text-xs text-neutral-500">
                  hello.sun
                </span>
              </div>

              <span className="text-xs text-neutral-600">
                Sun
              </span>
            </div>

            <pre className="overflow-x-auto p-6 text-left text-[13px] leading-7 text-neutral-300 sm:p-8 sm:text-sm">
              <code>{sunCode}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Mini benefícios */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/[0.06] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-0">
          <div className="py-10 sm:px-10">
            <p className="text-sm font-semibold text-yellow-300">
              Simples
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Menos sintaxe para decorar e mais foco no que o código faz.
            </p>
          </div>

          <div className="py-10 sm:px-10">
            <p className="text-sm font-semibold text-yellow-300">
              Compatível
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              APIs e bibliotecas Luau continuam reconhecíveis.
            </p>
          </div>

          <div className="py-10 sm:px-10">
            <p className="text-sm font-semibold text-yellow-300">
              Open Source
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Leia, modifique e melhore a própria linguagem.
            </p>
          </div>
        </div>
      </section>

      {/* Sun vs Luau */}
      <section
        id="exemplos"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-yellow-300">
            MENOS COMPLICAÇÃO
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Faça a mesma coisa escrevendo menos.
          </h2>

          <p className="mt-4 leading-7 text-neutral-400">
            A Sun transforma uma sintaxe mais direta em Luau, mantendo
            acesso ao ecossistema original.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">

          {/* Sun */}
          <div className="overflow-hidden rounded-2xl border border-yellow-300/10 bg-[#0d0d0d]">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/sun.png"
                  alt=""
                  width={20}
                  height={20}
                />

                <span className="text-sm font-medium">
                  Sun
                </span>
              </div>

              <span className="text-xs text-yellow-300">
                simples
              </span>
            </div>

            <pre className="overflow-x-auto p-6 text-sm leading-7 text-neutral-300">
              <code>{sunCode}</code>
            </pre>
          </div>

          {/* Luau */}
          <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d0d]">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
              <span className="text-sm font-medium">
                Luau
              </span>

              <span className="text-xs text-neutral-600">
                original
              </span>
            </div>

            <pre className="overflow-x-auto p-6 text-sm leading-7 text-neutral-400">
              <code>{luauCode}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section
        id="sobre"
        className="border-t border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-3xl">

            <Image
              src="/sun.png"
              alt="Sun"
              width={56}
              height={56}
            />

            <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">
              Luau continua sendo Luau.
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-400">
              A Sun não tenta renomear tudo só para parecer diferente.
              O que pode ser simplificado é simplificado. O que já funciona
              bem continua familiar.
            </p>

            <div className="mt-8 rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 font-mono text-sm text-neutral-300">
              game:GetService(&quot;Players&quot;)
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/sun.png"
              alt="Sun"
              width={24}
              height={24}
            />
            <span>Sun</span>
          </div>

          <p>
            Programação, simplificada.
          </p>
        </div>
      </footer>
    </main>
  );
}
