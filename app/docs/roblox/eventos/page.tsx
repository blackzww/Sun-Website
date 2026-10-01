import Link from "next/link";

export default function Eventos() {
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
          Eventos
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          A Sun possui uma sintaxe simplificada para alguns eventos comuns do
          Roblox usando <code className="text-yellow-200">quando</code>.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        <h2 className="text-2xl font-semibold">
          quando
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Um evento simplificado começa com{" "}
          <code className="text-yellow-200">quando</code> e termina com{" "}
          <code className="text-yellow-200">fim</code>.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`quando jogador.morrer
    mostrar("Você morreu!")
fim`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Quando o jogador morrer
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">jogador.morrer</code> para
          executar código quando o personagem morrer.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`quando jogador.morrer
    mostrar("O jogador morreu")
fim`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Quando o jogador pular
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`quando jogador.pular
    mostrar("Pulou!")
fim`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Mudança de personagem
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Também é possível detectar quando o personagem do jogador muda,
          como durante um respawn.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`quando jogador.personagem mudar
    mostrar("Novo personagem")
fim`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Usando lógica dentro de eventos
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          O bloco do evento aceita normalmente condições, funções, variáveis e
          outros recursos da Sun.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`quando jogador.pular
    se roblox.vida <= 25 entao
        mostrar("Você pulou com pouca vida!")
    senao
        mostrar("Pulou!")
    fim
fim`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Chamando funções
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao avisar()
    mostrar("O jogador morreu!")
fim

quando jogador.morrer
    avisar()
fim`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Eventos disponíveis
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.07]">
          <div className="grid grid-cols-[230px_1fr] border-b border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-medium">
            <span>Evento</span>
            <span>Quando acontece</span>
          </div>

          <div className="grid grid-cols-[230px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm">
            <code className="text-yellow-200">
              jogador.morrer
            </code>
            <span className="text-neutral-400">
              Quando o personagem morre
            </span>
          </div>

          <div className="grid grid-cols-[230px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm">
            <code className="text-yellow-200">
              jogador.pular
            </code>
            <span className="text-neutral-400">
              Quando o jogador pula
            </span>
          </div>

          <div className="grid grid-cols-[230px_1fr] px-5 py-3 text-sm">
            <code className="text-yellow-200">
              jogador.personagem mudar
            </code>
            <span className="text-neutral-400">
              Quando o personagem muda
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            Eventos da API original
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            A sintaxe <code className="text-yellow-200">quando</code> existe
            para eventos comuns suportados pela Sun. Para qualquer outro
            evento, você pode continuar usando as conexões normais do Roblox.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Exemplo completo
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao mostrarStatus()
    mostrar("Vida: {roblox.vida}")
fim

quando jogador.pular
    mostrar("Pulou!")
    mostrarStatus()
fim

quando jogador.morrer
    mostrar("Você morreu!")
fim

quando jogador.personagem mudar
    mostrar("Personagem carregado novamente")
fim`}</code>
        </pre>

        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/roblox/jogador"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Jogador
          </Link>

          <Link
            href="/docs/roblox/apis-luau"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            APIs Luau →
          </Link>
        </div>
      </div>
    </main>
  );
}
