import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";
import { Playground } from "@/components/playground";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Playground", description: "Editor online para visualizar a transpilação de Sun para Luau." };

export default function Page() {
  return <><SiteHeader/><main className="playground-page"><div className="playground-shell mb-5"><Link href="/" className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--muted)] hover:text-white"><ArrowLeftIcon size={16}/> Voltar ao site</Link></div><Playground/></main></>;
}
