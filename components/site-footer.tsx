import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#080a0c]">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="brand-link w-fit"><Image src="/sun.png" alt="" width={32} height={32} /><span>Sun</span></Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">Uma linguagem construída sobre Luau para tornar código comum mais direto sem esconder o ecossistema original.</p>
        </div>
        <div>
          <p className="footer-title">Produto</p>
          <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
            <Link href="/docs" className="footer-link">Documentação</Link>
            <Link href="/playground" className="footer-link">Playground</Link>
            <Link href="/docs/debug" className="footer-link">Debug</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Projeto</p>
          <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="footer-link flex items-center gap-2"><GithubIcon size={16} /> GitHub</a>
            <Link href="/docs/bibliotecas" className="footer-link">Bibliotecas</Link>
            <span>MIT License</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="site-container flex flex-col gap-2 py-5 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <span>Sun {siteConfig.version}</span>
          <span>Open source · by BLACKZW</span>
        </div>
      </div>
    </footer>
  );
}
