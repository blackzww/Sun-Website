import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, BookIcon, BracesIcon, CodeIcon, ExternalIcon, GithubIcon, LayersIcon, SparkIcon, TerminalIcon } from "@/components/icons";
import { CodeBlock } from "@/components/code-block";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const sunCode = `nome = "Mundo"

mostrar("Olá {nome}!")

se nome ?= nulo entao
    repetir 3
        mostrar("Bem-vindo à Sun!")
    fim
fim`;

const luauCode = `local nome = "Mundo"

print("Olá " .. nome .. "!")

if nome ~= nil then
    for i = 1, 3 do
        print("Bem-vindo à Sun!")
    end
end`;

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero">
        <div className="hero-glow" />
        <div className="site-container hero-grid">
          <div className="relative z-10">
            <div className="eyebrow"><SparkIcon size={14}/> Sun {siteConfig.version}</div>
            <h1 className="hero-title">Programação,<br/><span>simplificada.</span></h1>
            <p className="hero-copy">Uma linguagem construída sobre Luau para deixar o código comum mais direto, legível e fácil de aprender — sem esconder Roblox nem reinventar APIs que já funcionam.</p>
            <div className="hero-actions">
              <Link href="/docs" className="button button-primary"><BookIcon size={18}/> Ler documentação <ArrowRightIcon size={17}/></Link>
              <Link href="/playground" className="button button-secondary"><TerminalIcon size={18}/> Abrir Playground</Link>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="button button-secondary"><GithubIcon size={18}/> GitHub <ExternalIcon size={14}/></a>
            </div>
            <div className="hero-meta"><span className="meta-chip">Open source</span><span className="meta-chip">Compatível com Luau</span><span className="meta-chip">Roblox-friendly</span></div>
          </div>
          <div className="hero-code-stack relative z-10">
            <CodeBlock code={sunCode} language="sun" title="main.sun" />
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="site-container">
          <p className="section-kicker">Filosofia</p>
          <h2 className="section-title">Menos cerimônia. Mesma base.</h2>
          <p className="section-copy">Sun não tenta parecer diferente só por parecer. A ideia é simplificar onde isso ajuda e continuar reconhecível quando Luau já resolve bem o problema.</p>
          <div className="feature-grid">
            <div className="feature-card"><div className="feature-icon"><SparkIcon/></div><h3>Sintaxe direta</h3><p>Condições, loops, funções, listas e textos com palavras fáceis de reconhecer.</p></div>
            <div className="feature-card"><div className="feature-icon"><LayersIcon/></div><h3>Compatibilidade</h3><p>APIs Roblox, bibliotecas e chamadas com <code>:</code> continuam familiares.</p></div>
            <div className="feature-card"><div className="feature-icon"><BracesIcon/></div><h3>Sem mágica escondida</h3><p>O debug permite observar o Luau gerado e entender o que a linguagem está fazendo.</p></div>
            <div className="feature-card"><div className="feature-icon"><CodeIcon/></div><h3>Open source</h3><p>O compilador pode ser estudado, modificado e melhorado pela comunidade.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="site-container">
          <p className="section-kicker">Sun + Luau</p>
          <h2 className="section-title">Fácil de ler sem virar outra realidade.</h2>
          <div className="split">
            <div className="big-card big-card-highlight"><p className="section-kicker">Sun</p><h3 className="mt-2 text-xl font-semibold">A intenção primeiro</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Palavras curtas em português para o fluxo do programa.</p><CodeBlock code={sunCode} language="sun" title="Sun" /></div>
            <div className="big-card"><p className="section-kicker text-neutral-500">Luau equivalente</p><h3 className="mt-2 text-xl font-semibold">A base continua familiar</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Você ainda pode misturar Luau quando precisar.</p><CodeBlock code={luauCode} language="luau" title="Luau" /></div>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="site-container split items-center">
          <div>
            <p className="section-kicker">Roblox</p>
            <h2 className="section-title">Atalhos onde importa. APIs originais onde fazem sentido.</h2>
            <p className="section-copy">Leia e altere propriedades comuns com <code>roblox.*</code>, mas continue usando <code>game:GetService</code>, <code>Instance.new</code>, <code>Vector3</code>, <code>CFrame</code> e suas bibliotecas favoritas normalmente.</p>
            <Link href="/docs/roblox" className="button button-secondary mt-6">Ver integração Roblox <ArrowRightIcon size={16}/></Link>
          </div>
          <div className="big-card">
            <CodeBlock code={`mostrar(roblox.jogador.nome)\nmostrar(roblox.vida)\n\nroblox.velocidade = 50\nroblox.pulo = 80\n\nquando jogador.morrer\n    mostrar("Você morreu")\nfim\n\nPlayers = game:GetService("Players")`} language="sun" title="roblox.sun" />
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="site-container">
          <p className="section-kicker">Documentação</p>
          <h2 className="section-title">Do primeiro código ao runtime Roblox.</h2>
          <p className="section-copy">A documentação foi organizada para começar do zero e crescer sem pular conceitos.</p>
          <div className="doc-card-grid">
            <Link href="/docs/instalacao" className="doc-link-card"><strong>Começando</strong><p>Loader, Sun[[ ]], primeiro código e estrutura do projeto.</p></Link>
            <Link href="/docs/variaveis" className="doc-link-card"><strong>Linguagem</strong><p>Variáveis, condições, loops, funções, listas, objetos e texto.</p></Link>
            <Link href="/docs/roblox" className="doc-link-card"><strong>Roblox</strong><p>Jogador, propriedades, eventos e compatibilidade com APIs Luau.</p></Link>
            <Link href="/docs/debug" className="doc-link-card"><strong>Avançado</strong><p>Bibliotecas externas, callbacks, debug e mensagens de erro.</p></Link>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="site-container">
          <div className="cta-panel">
            <div className="relative z-10 max-w-3xl">
              <Image src="/sun.png" alt="" width={58} height={58} className="brand-logo" />
              <h2 className="mt-5 text-3xl font-bold tracking-[-.04em] sm:text-4xl">Comece com uma linha.</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">O loader oficial aponta direto para o repositório da Sun no GitHub.</p>
              <CodeBlock code={`local Sun = loadstring(game:HttpGet("${siteConfig.raw}"))()`} language="luau" title="Loader oficial" />
              <div className="mt-5 flex flex-wrap gap-2"><Link href="/docs/instalacao" className="button button-primary">Instalar <ArrowRightIcon size={16}/></Link><Link href="/playground" className="button button-secondary">Testar sintaxe</Link></div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
