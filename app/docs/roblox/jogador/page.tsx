import Link from "next/link";

export default function Jogador() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/docs/roblox"
          className="text-sm text-neutral-500 transition hover:text-white"
        >
          ← Roblox
        </Link>

        <p className="mt-12 text-sm font-medium text-yellow-300">
          ROBLOX
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Jogador
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          A Sun oferece atalhos para acessar o jogador local, personagem,
          Humanoid e partes importantes do personagem sem precisar repetir
          toda a estrutura da API do Roblox.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        <h2 className="text-2xl font-semibold">
          Jogador local
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">roblox.jogador</code> para
          acessar o jogador local.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`mostrar(roblox.jogador.nome)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Personagem
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          O personagem atual pode ser acessado diretamente.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`personagem = roblox.personagem

mostrar(personagem)`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Também é possível navegar partindo do jogador:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`personagem = roblox.jogador.personagem`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Humanoide
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Propriedades comuns do Humanoid possuem atalhos próprios.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`mostrar(roblox.vida)
mostrar(roblox.vidamaxima)
mostrar(roblox.velocidade)
mostrar(roblox.pulo)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Alterando o personagem
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Algumas propriedades podem ser modificadas diretamente.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`roblox.vida = 100
roblox.velocidade = 50
roblox.pulo = 80`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          A forma <code className="text-yellow-200">em roblox</code> também
          pode ser usada:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`em roblox vida = 100
em roblox velocidade = 50
em roblox pulo = 80`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Cabeça
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`cabeca = roblox.jogador.cabeca

mostrar(cabeca.posicao)`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Você também pode acessar a posição diretamente:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`mostrar(roblox.jogador.cabeca.posicao)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Raiz do personagem
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          <code className="text-yellow-200">raiz</code> representa a parte
          principal usada para posicionar o personagem.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`raiz = roblox.raiz

mostrar(raiz.posicao)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Posição
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          A posição também pode ser alterada quando o objeto suporta essa
          operação.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`posicao = roblox.raiz.posicao

mostrar(posicao)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Exemplo completo
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`mostrar("Jogador: {roblox.jogador.nome}")

mostrar("Vida: {roblox.vida}")
mostrar("Vida máxima: {roblox.vidamaxima}")

roblox.velocidade = 50

se roblox.vida <= 25 entao
    mostrar("Vida baixa!")
senao
    mostrar("Jogador está bem.")
fim

mostrar(roblox.jogador.cabeca.posicao)`}</code>
        </pre>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            Atalhos, não substituições
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            Esses recursos existem para operações comuns. Quando precisar de
            algo mais específico, use normalmente a API original do Roblox.
          </p>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/roblox"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Introdução
          </Link>

          <Link
            href="/docs/roblox/eventos"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Eventos →
          </Link>
        </div>
      </div>
    </main>
  );
}
