import Link from "next/link";

export default function Bibliotecas() {
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
          AVANÇADO
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Bibliotecas
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          A Sun pode carregar código externo e trabalhar com bibliotecas Luau
          sem renomear ou substituir suas APIs.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        <h2 className="text-2xl font-semibold">
          carregar
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">carregar</code> seguido da URL
          para carregar uma biblioteca.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Biblioteca = carregar "URL"`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Essa sintaxe simplifica uma operação equivalente a carregar o
          conteúdo remoto e executá-lo.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-yellow-300/10 bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-yellow-300">
              Sun
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-300">
              <code>{`Lib = carregar "URL"`}</code>
            </pre>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-neutral-400">
              Luau
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-400">
              <code>{`local Lib =
    loadstring(
        game:HttpGet("URL")
    )()`}</code>
            </pre>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          APIs da biblioteca
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Depois de carregar uma biblioteca, use a API original dela.
          A Sun não altera nomes de métodos.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`WindUI = carregar "URL"

Window = WindUI:CreateWindow({
    Title = "Mirrors Hub",
    Icon = "rbxassetid://123"
})`}</code>
        </pre>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            APIs continuam iguais
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            Se uma biblioteca usa{" "}
            <code className="text-yellow-200">CreateWindow</code>,{" "}
            <code className="text-yellow-200">CreateButton</code> ou qualquer
            outro método, continue usando exatamente a API fornecida pela
            biblioteca.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Métodos com :
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Chamadas de método usando{" "}
          <code className="text-yellow-200">:</code> continuam funcionando
          normalmente.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Window = WindUI:CreateWindow({
    Title = "Sun"
})`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Callbacks
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Quando uma biblioteca espera uma função, você pode usar a sintaxe de
          callback da Sun quando esse formato for suportado pelo compilador.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Button = {
    Title: "Clique aqui",

    Callback: funcao
        mostrar("Clicou!")
    fim
}`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Luau também pode ser usado
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Quando uma biblioteca utiliza uma estrutura específica de Luau, você
          não precisa esperar a Sun criar outra sintaxe para ela.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Window = WindUI:CreateWindow({
    Title = "Sun"
})

print(Window)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Exemplo com WindUI
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`WindUI = carregar "URL"

Window = WindUI:CreateWindow({
    Title = "Mirrors Hub",
    Icon = "rbxassetid://123"
})

mostrar("Interface carregada")`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Código remoto
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Carregar uma URL executa código recebido de outra fonte. Use apenas
          código cuja origem e conteúdo você conhece.
        </p>

        <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
          <p className="font-medium">
            Importante
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            A Sun não torna automaticamente seguro um código remoto.
            O conteúdo carregado possui o comportamento definido pelo próprio
            código e pelo ambiente onde ele é executado.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Regra de compatibilidade
        </h2>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="text-lg font-medium text-yellow-200">
            Sun só existe para facilitar Luau.
          </p>

          <p className="mt-3 leading-7 text-neutral-400">
            Bibliotecas não precisam ganhar uma API alternativa apenas para
            parecerem parte da Sun. Se a API original já funciona, ela
            continua disponível.
          </p>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/roblox/apis-luau"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← APIs Luau
          </Link>

          <Link
            href="/docs/debug"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Debug →
          </Link>
        </div>
      </div>
    </main>
  );
}
