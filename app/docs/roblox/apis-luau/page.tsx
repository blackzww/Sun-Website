import Link from "next/link";

export default function APIsLuau() {
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
          APIs Luau
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          A Sun foi criada para simplificar Luau, não para esconder o Roblox.
          APIs existentes continuam disponíveis com sua sintaxe e seus nomes
          originais.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        <h2 className="text-2xl font-semibold">
          game:GetService()
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Serviços do Roblox podem ser obtidos normalmente.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Players = game:GetService("Players")
Workspace = game:GetService("Workspace")

player = Players.LocalPlayer`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Instance.new()
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          A criação de instâncias continua usando a API oficial do Roblox.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`parte = Instance.new("Part")

parte.Name = "MinhaParte"
parte.Parent = workspace`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Vector3
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`parte = Instance.new("Part")

parte.Size = Vector3.new(5, 1, 5)
parte.Position = Vector3.new(0, 10, 0)

parte.Parent = workspace`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          CFrame
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`parte = Instance.new("Part")

parte.CFrame = CFrame.new(0, 10, 0)

parte.Parent = workspace`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Métodos com :
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Chamadas com <code className="text-yellow-200">:</code> continuam
          funcionando normalmente.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Players = game:GetService("Players")

player = Players.LocalPlayer

character = player.Character

humanoid = character:FindFirstChildOfClass("Humanoid")`}</code>
        </pre>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            Não precisa traduzir APIs
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            A Sun não cria nomes como{" "}
            <code className="text-yellow-200">criarParte()</code> para
            substituir <code className="text-yellow-200">Instance.new()</code>.
            Quando uma API já é clara e conhecida, ela permanece como é.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Misturando com a sintaxe Sun
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          A principal vantagem é poder usar a sintaxe simplificada da Sun junto
          com APIs existentes.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Players = game:GetService("Players")

player = Players.LocalPlayer

se player ?= nulo entao
    mostrar("Jogador encontrado: " + player.Name)
fim`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Eventos Luau
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Se a Sun não possuir um atalho para determinado evento, a API
          original continua disponível.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Players = game:GetService("Players")

player = Players.LocalPlayer

player.CharacterAdded:Connect(function(character)
    mostrar("Novo personagem")
end)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Bibliotecas externas
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          O mesmo princípio vale para bibliotecas escritas para Luau.
          Métodos e APIs dessas bibliotecas não precisam ser renomeados.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`WindUI = carregar "URL"

Window = WindUI:CreateWindow({
    Title = "Mirrors Hub",
    Icon = "rbxassetid://123"
})`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Quando usar cada um?
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.07]">
          <div className="grid grid-cols-[160px_1fr] border-b border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-medium">
            <span>Opção</span>
            <span>Uso</span>
          </div>

          <div className="grid grid-cols-[160px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm">
            <span className="font-medium text-yellow-200">
              Sun
            </span>
            <span className="text-neutral-400">
              Quando existe uma forma mais simples e clara
            </span>
          </div>

          <div className="grid grid-cols-[160px_1fr] px-5 py-3 text-sm">
            <span className="font-medium text-neutral-300">
              Luau
            </span>
            <span className="text-neutral-400">
              APIs específicas, recursos avançados e compatibilidade
            </span>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Exemplo completo
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Players = game:GetService("Players")

player = Players.LocalPlayer

mostrar("Jogador: " + player.Name)

parte = Instance.new("Part")

parte.Name = "SunPart"
parte.Size = Vector3.new(5, 1, 5)
parte.CFrame = CFrame.new(0, 10, 0)
parte.Parent = workspace

roblox.velocidade = 50

se roblox.vida => 50 entao
    mostrar("Tudo certo!")
fim`}</code>
        </pre>

        <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
          <p className="font-medium">
            Regra da Sun
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            Simplificar o que precisa ser simplificado sem quebrar o que já
            funciona em Luau.
          </p>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/roblox/eventos"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Eventos
          </Link>

          <Link
            href="/docs/bibliotecas"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Bibliotecas →
          </Link>
        </div>
      </div>
    </main>
  );
}
