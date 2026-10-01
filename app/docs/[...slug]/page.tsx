import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocPage } from "@/components/doc-page";
import { docsEntries, findDoc } from "@/lib/docs-index";

export const dynamicParams = false;

export function generateStaticParams() {
  return docsEntries.filter((entry) => entry.slug).map((entry) => ({ slug: entry.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const entry = findDoc(path);
  if (!entry) return {};
  return { title: entry.title, description: entry.description, alternates: { canonical: entry.href } };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = slug.join("/");
  if (!findDoc(path)) notFound();
  return <DocPage slug={path} />;
}
