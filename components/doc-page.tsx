import { notFound } from "next/navigation";
import { docsEntries, findDoc } from "@/lib/docs-index";
import { renderDocContent } from "@/lib/docs-content";
import { PageNav } from "@/components/docs-elements";

export function DocPage({ slug }: { slug: string }) {
  const entry = findDoc(slug);
  if (!entry) return notFound();

  const index = docsEntries.findIndex((item) => item.slug === slug);
  const prev = index > 0 ? docsEntries[index - 1] : undefined;
  const next = index < docsEntries.length - 1 ? docsEntries[index + 1] : undefined;

  return (
    <article className="doc-article">
      <div className="doc-breadcrumb">{entry.section}</div>
      <h1 className="doc-title">{entry.title}</h1>
      <p className="doc-description">{entry.description}</p>
      <div className="doc-rule" />
      {renderDocContent(slug)}
      <PageNav
        prev={prev ? { href: prev.href, title: prev.title } : undefined}
        next={next ? { href: next.href, title: next.title } : undefined}
      />
    </article>
  );
}
