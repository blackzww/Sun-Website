import Link from "next/link";

export default function Roblox() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/docs"
          className="text-sm text-neutral-500 transition hover:text-white"
        >
          ← Documentação
        </Link>

        <p className="mt-12 text-sm font-medium text-yellow-300">
          ROBLOX
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Sun no Roblox
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          A Sun simplifica operações comuns do Roblox sem substituir a API
          original. Você pode usar os atalhos da Sun e continuar usando Luau
          normalmente quando precisar.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        <h2 className="text-2xl font-semibold">
          Acessando valores
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          O objeto <code className="text-yellow-200">roblox</code> oferece
          acesso simplificado a informações comuns.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`mostrar(roblox.vida)
mostrar(roblox.velocidade)`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          A Sun também aceita a forma{" "}
          <code className="text-yellow-200">em roblox</code>.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`mostrar(em roblox vida)
mostrar(em roblox velocidade)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Alterando valores
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Algumas propriedades também podem ser alteradas diretamente.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`roblox.velocidade = 50
roblox.pulo = 80
roblox.vida = 100`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          A sintaxe alternativa funciona da mesma forma:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`em roblox velocidade = 50
em roblox pulo = 80
em roblox vida = 100`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Navegação
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Você pode navegar por informações relacionadas ao jogador usando
          propriedades.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`mostrar(roblox.jogador.nome)

mostrar(roblox.jogador.cabeca.posicao)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Propriedades disponíveis
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.07]">
          <div className="grid grid-cols-[160px_1fr] border-b border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-medium">
            <span>Propriedade</span>
            <span>Descrição</span>
          </div>

          {[
            ["jogador", "Jogador local"],
            ["personagem", "Personagem atual"],
            ["humanoide", "Humanoid do personagem"],
            ["vida", "Vida atual"],
            ["vidamaxima", "Vida máxima"],
            ["velocidade", "Velocidade do personagem"],
            ["pulo", "Força ou altura de pulo"],
            ["cabeca", "Cabeça do personagem"],
            ["raiz", "Parte raiz do personagem"],
            ["posicao", "Posição do objeto"],
          ].map(([nome, descricao]) => (
            <div
              key={nome}
              className="grid grid-cols-[160px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm last:border-b-0"
            >
              <code className="text-yellow-200">{nome}</code>
              <span className="text-neutral-400">{descricao}</span>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Luau continua disponível
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Os atalhos da Sun são opcionais. A API original do Roblox continua
          disponível.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Players = game:GetService("Players")

player = Players.LocalPlayer

parte = Instance.new("Part")

parte.Parent = workspace`}</code>
        </pre>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            A Sun não renomeia o Roblox
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            APIs como game:GetService(), Instance.new(), CFrame.new() e
            Vector3.new() continuam com seus nomes originais.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Misturando Sun e Luau
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Players = game:GetService("Players")

player = Players.LocalPlayer

mostrar("Jogador: " + player.Name)

roblox.velocidade = 50

se roblox.vida <= 0 entao
    mostrar("O jogador morreu")
fim`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Exemplo completo
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`mostrar("Jogador: {roblox.jogador.nome}")

roblox.velocidade = 50

se roblox.vida => 50 entao
    mostrar("Vida está boa")
senao
    mostrar("Vida está baixa")
fim

mostrar(roblox.jogador.cabeca.posicao)`}</code>
        </pre>

        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/comentarios"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Comentários
          </Link>

          <Link
            href="/docs/roblox/jogador"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Jogador →
          </Link>
        </div>
      </div>
    </main>
  );
}
