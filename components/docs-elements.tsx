import Link from "next/link";
import type { ReactNode } from "react";
import { AlertIcon, ArrowLeftIcon, ArrowRightIcon, InfoIcon } from "@/components/icons";

export function DocSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="doc-section" aria-labelledby={id}>
      <h2 id={id} className="doc-h2 scroll-mt-24">{title}</h2>
      <div className="doc-body">{children}</div>
    </section>
  );
}

export function Callout({ children, title, tone = "info" }: { children: ReactNode; title?: string; tone?: "info" | "warning" }) {
  return (
    <div className={`callout callout-${tone}`}>
      <div className="mt-0.5 shrink-0">{tone === "warning" ? <AlertIcon size={19} /> : <InfoIcon size={19} />}</div>
      <div>
        {title && <p className="font-semibold text-[var(--text)]">{title}</p>}
        <div className={title ? "mt-1" : ""}>{children}</div>
      </div>
    </div>
  );
}

export function DocTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="doc-table-wrap">
      <table className="doc-table">
        <thead><tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export function PageNav({ prev, next }: { prev?: { href: string; title: string }; next?: { href: string; title: string } }) {
  return (
    <nav className="page-nav" aria-label="Navegação entre páginas">
      {prev ? <Link href={prev.href} className="page-nav-card"><span className="page-nav-kicker"><ArrowLeftIcon size={14} /> Anterior</span><strong>{prev.title}</strong></Link> : <span />}
      {next ? <Link href={next.href} className="page-nav-card text-right"><span className="page-nav-kicker justify-end">Próximo <ArrowRightIcon size={14} /></span><strong>{next.title}</strong></Link> : <span />}
    </nav>
  );
}
