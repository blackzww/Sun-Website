import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Começando",
    links: [
      { name: "Introdução", href: "/docs" },
      { name: "Instalação", href: "/docs/instalacao" },
    ],
  },
  {
    title: "Linguagem",
    links: [
      { name: "Variáveis", href: "/docs/variaveis" },
      { name: "Condições", href: "/docs/condicoes" },
      { name: "Loops", href: "/docs/loops" },
      { name: "Funções", href: "/docs/funcoes" },
      { name: "Listas", href: "/docs/listas" },
      { name: "Objetos", href: "/docs/objetos" },
      { name: "Texto", href: "/docs/texto" },
      { name: "Comentários", href: "/docs/comentarios" },
    ],
  },
  {
    title: "Roblox",
    links: [
      { name: "Introdução", href: "/docs/roblox" },
      { name: "Jogador", href: "/docs/roblox/jogador" },
      { name: "Eventos", href: "/docs/roblox/eventos" },
      { name: "APIs Luau", href: "/docs/roblox/apis-luau" },
    ],
  },
  {
    title: "Avançado",
    links: [
      { name: "Bibliotecas", href: "/docs/bibliotecas" },
      { name: "Debug", href: "/docs/debug" },
    ],
  },
];

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="mx-auto flex max-w-7xl">
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
            {sections.map((section) => (
              <div key={section.title}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  {section.title}
                </p>

                <div className="space-y-1 text-sm">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-neutral-400 transition hover:bg-white/[0.03] hover:text-white"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
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

            <Link
              href="/"
              className="mt-1 block rounded-lg px-3 py-2 text-sm text-neutral-500 transition hover:bg-white/[0.03] hover:text-white"
            >
              ← Voltar ao site
            </Link>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          {/* HEADER MOBILE */}
          <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-white/[0.06] bg-[#090909]/90 px-5 backdrop-blur md:hidden">
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

            <Link
              href="/docs"
              className="text-sm text-neutral-400 transition hover:text-white"
            >
              Docs
            </Link>
          </header>

          {children}
        </div>
      </div>
    </div>
  );
}
