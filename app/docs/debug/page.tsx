import Link from "next/link";

export default function Debug() {
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
          Debug
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          A Sun possui ferramentas para ajudar a entender o código gerado e
          encontrar erros durante o desenvolvimento.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        <h2 className="text-2xl font-semibold">
          Sun.debug
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Ative <code className="text-yellow-200">Sun.debug</code> para
          visualizar o Luau gerado pelo compilador.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`local Sun = loadstring(game:HttpGet("https://raw.githubusercontent.com/blackzww/Sun/refs/heads/main/sun.lua"))()

Sun.debug = true

Sun[[
    repetir 3
        mostrar("Olá!")
    fim
]]`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Código gerado
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Com o debug ativo, você pode inspecionar como uma construção da Sun
          foi convertida para Luau.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-yellow-300/10 bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-yellow-300">
              Sun
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-300">
              <code>{`repetir 3
    mostrar("Olá!")
fim`}</code>
            </pre>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-neutral-400">
              Luau equivalente
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-400">
              <code>{`for i = 1, 3 do
    print("Olá!")
end`}</code>
            </pre>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Erros da Sun
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Quando possível, a Sun mostra a linha onde encontrou o problema e
          uma explicação do erro.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`[SUN ERRO] Linha 7

mostar("oi")
^^^^^^^

"mostar" não existe.
Talvez você quis dizer "mostrar".`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Sugestões
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Alguns erros de digitação podem gerar uma sugestão com uma palavra
          conhecida parecida.
        </p>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            A Sun não corrige silenciosamente
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            Uma sugestão serve apenas para explicar o possível problema.
            O código não deve ser alterado automaticamente sem você saber.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Erros de sintaxe
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Se algo não for reconhecido como sintaxe Sun nem como Luau válido,
          a execução é interrompida com um erro.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`mostar("Olá")`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Em vez de transformar silenciosamente{" "}
          <code className="text-yellow-200">mostar</code> em{" "}
          <code className="text-yellow-200">mostrar</code>, a Sun informa o
          problema para que ele seja corrigido no código.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Erros vindos do Luau
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Como o código Sun é convertido para Luau, alguns problemas podem
          acontecer durante a compilação ou execução do código resultante.
          A Sun tenta relacionar esses erros ao código original quando possui
          informação suficiente para isso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Quando ativar o debug
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.07]">
          <div className="grid grid-cols-[180px_1fr] border-b border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-medium">
            <span>Situação</span>
            <span>Debug</span>
          </div>

          <div className="grid grid-cols-[180px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm">
            <span className="text-neutral-300">
              Código normal
            </span>
            <span className="text-neutral-400">
              Geralmente desnecessário
            </span>
          </div>

          <div className="grid grid-cols-[180px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm">
            <span className="text-neutral-300">
              Investigando erro
            </span>
            <span className="text-yellow-200">
              Recomendado
            </span>
          </div>

          <div className="grid grid-cols-[180px_1fr] px-5 py-3 text-sm">
            <span className="text-neutral-300">
              Modificando a Sun
            </span>
            <span className="text-yellow-200">
              Recomendado
            </span>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Desativando
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Para voltar ao comportamento normal:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Sun.debug = false`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Exemplo completo
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`local Sun = loadstring(game:HttpGet("https://raw.githubusercontent.com/blackzww/Sun/refs/heads/main/sun.lua"))()

Sun.debug = true

Sun[[
    nome = "Black"

    funcao ola(nome)
        mostrar("Olá {nome}!")
    fim

    repetir 3
        ola(nome)
    fim
]]`}</code>
        </pre>

        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/bibliotecas"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Bibliotecas
          </Link>

          <Link
            href="/docs"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Voltar ao início →
          </Link>
        </div>
      </div>
    </main>
  );
}
