"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GithubIcon, MenuIcon, XIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "/docs", label: "Documentação" },
  { href: "/playground", label: "Playground" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="brand-link" aria-label="Sun — início">
          <Image src="/sun.png" alt="" width={34} height={34} className="brand-logo" priority />
          <span>Sun</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link key={link.href} href={link.href} className={`nav-link ${active ? "nav-link-active" : ""}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a className="icon-button" href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="Abrir GitHub da Sun">
            <GithubIcon size={19} />
          </a>
          <Link href="/docs/instalacao" className="button button-primary button-small">Começar</Link>
        </div>

        <button type="button" className="icon-button md:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu md:hidden">
          <div className="site-container py-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="mobile-menu-link">{link.label}</Link>
            ))}
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="mobile-menu-link flex items-center gap-2"><GithubIcon size={18} /> GitHub</a>
            <Link href="/docs/instalacao" className="button button-primary mt-3 w-full">Começar</Link>
          </div>
        </div>
      )}
    </header>
  );
}
