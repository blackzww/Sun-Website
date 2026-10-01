import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return <><SiteHeader/><main className="not-found"><div><h1>404</h1><h2>Página não encontrada.</h2><p>Esse caminho não existe ou foi movido. Volte para o início ou abra a documentação.</p><div className="mt-6 flex flex-wrap justify-center gap-2"><Link href="/" className="button button-secondary"><ArrowLeftIcon size={16}/> Início</Link><Link href="/docs" className="button button-primary">Documentação</Link></div></div></main></>;
}
