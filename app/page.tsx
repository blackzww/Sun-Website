import Image from "next/image";

const example = `nome = "Mundo"

mostrar("Olá {nome}!")

repetir 3
    mostrar("Sun!")
fim`;

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-3 font-semibold">
          <Image
            src="/sun.png"
            alt="Sun"
            width={38}
            height={38}
            priority
          />
          <span className="text-lg">Sun</span>
        </a>

        <nav className="flex items-center gap-6 text-sm text-neutral-400">
          <a className="transition hover:text-white" href="/docs">
            Docs
          </a>

          <a
            className="transition hover:text-white"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[75vh] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1 text-sm text-yellow-300">
            Construída sobre Luau
          </div>

          <h1 className="max-w-xl text-5xl font-bold tracking-tight sm:text-6xl">
            Programação,
            <span className="block text-yellow-300">simplificada.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
            Sun torna Luau mais simples de escrever, ler e aprender sem
            abandonar suas APIs e bibliotecas.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/docs"
              className="rounded-lg bg-yellow-300 px-5 py-3 font-medium text-black transition hover:bg-yellow-200"
            >
              Começar
            </a>

            <a
              href="#exemplo"
              className="rounded-lg border border-neutral-800 px-5 py-3 font-medium transition hover:bg-neutral-900"
            >
              Ver exemplo
            </a>
          </div>
        </div>

        <div
          id="exemplo"
          className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#111]"
        >
          <div className="flex items-center gap-2 border-b border-neutral-800 px-5 py-4">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
            <span className="text-sm text-neutral-500">hello.sun</span>
          </div>

          <pre className="overflow-x-auto p-6 text-sm leading-7 text-neutral-300">
            <code>{example}</code>
          </pre>
        </div>
      </section>
    </main>
  );
}
