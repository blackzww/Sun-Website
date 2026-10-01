"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { BookIcon, ChevronRightIcon, GithubIcon, MenuIcon, SearchIcon, XIcon } from "@/components/icons";
import { docsEntries, docsSections } from "@/lib/docs-index";
import { siteConfig } from "@/lib/site";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function DocsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const current = docsEntries.find((d) => d.href === pathname) ?? docsEntries[0];

  useEffect(() => { setMenu(false); setSearch(false); setQuery(""); }, [pathname]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setSearch(true); }
      if (event.key === "Escape") { setSearch(false); setMenu(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { if (search) window.setTimeout(() => inputRef.current?.focus(), 20); }, [search]);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return docsEntries.slice(0, 8);
    return docsEntries.filter((entry) => normalize([entry.title, entry.description, entry.section, ...entry.keywords].join(" ")).includes(q)).slice(0, 10);
  }, [query]);

  const sidebar = (
    <>
      <Link href="/" className="docs-brand"><Image src="/sun.png" alt="" width={34} height={34} /><div><strong>Sun</strong><span>Documentação</span></div></Link>
      <button type="button" className="docs-search-button" onClick={() => setSearch(true)}><SearchIcon size={17} /><span>Buscar</span><kbd>Ctrl K</kbd></button>
      <nav className="docs-nav" aria-label="Documentação">
        {docsSections.map((section) => (
          <div key={section} className="docs-nav-section">
            <p>{section}</p>
            {docsEntries.filter((entry) => entry.section === section).map((entry) => {
              const active = pathname === entry.href;
              return <Link key={entry.href} href={entry.href} className={`docs-nav-link ${active ? "docs-nav-link-active" : ""}`}>{entry.title}</Link>;
            })}
          </div>
        ))}
      </nav>
      <div className="docs-sidebar-bottom">
        <a href={siteConfig.github} target="_blank" rel="noreferrer" className="docs-nav-link flex items-center gap-2"><GithubIcon size={16}/> GitHub</a>
        <Link href="/playground" className="docs-nav-link">Playground</Link>
      </div>
    </>
  );

  return (
    <div className="docs-layout">
      <aside className="docs-sidebar hidden lg:flex">{sidebar}</aside>

      <div className="docs-main">
        <header className="docs-mobile-header lg:hidden">
          <button type="button" className="icon-button" onClick={() => setMenu(true)} aria-label="Abrir navegação da documentação"><MenuIcon /></button>
          <Link href="/docs" className="brand-link"><Image src="/sun.png" alt="" width={30} height={30}/><span>Docs</span></Link>
          <button type="button" className="icon-button" onClick={() => setSearch(true)} aria-label="Buscar documentação"><SearchIcon /></button>
        </header>
        <main className="docs-content">{children}</main>
      </div>

      <aside className="docs-toc hidden 2xl:block" aria-label="Nesta página">
        <p className="docs-toc-title">Nesta página</p>
        <div className="mt-3 grid gap-1">
          {current.toc.map((item) => <a key={item.id} href={`#${item.id}`} className="docs-toc-link">{item.label}</a>)}
        </div>
      </aside>

      {menu && (
        <div className="drawer-backdrop lg:hidden" role="presentation" onMouseDown={(e) => { if (e.currentTarget === e.target) setMenu(false); }}>
          <aside className="docs-drawer" aria-label="Navegação móvel">
            <div className="flex items-center justify-between"><span className="flex items-center gap-2 font-semibold"><BookIcon size={18}/> Documentação</span><button type="button" className="icon-button" onClick={() => setMenu(false)} aria-label="Fechar navegação"><XIcon /></button></div>
            <div className="mt-6">{sidebar}</div>
          </aside>
        </div>
      )}

      {search && (
        <div className="search-backdrop" role="presentation" onMouseDown={(e) => { if (e.currentTarget === e.target) setSearch(false); }}>
          <div className="search-dialog" role="dialog" aria-modal="true" aria-label="Buscar documentação">
            <div className="search-input-wrap"><SearchIcon size={19}/><input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar na documentação..." aria-label="Buscar na documentação"/><button type="button" onClick={() => setSearch(false)} className="icon-button" aria-label="Fechar busca"><XIcon size={18}/></button></div>
            <div className="search-results">
              {results.length ? results.map((entry) => (
                <Link key={entry.href} href={entry.href} className="search-result"><div><span className="search-result-section">{entry.section}</span><strong>{entry.title}</strong><p>{entry.description}</p></div><ChevronRightIcon size={18}/></Link>
              )) : <p className="p-6 text-sm text-[var(--muted)]">Nenhum resultado.</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
