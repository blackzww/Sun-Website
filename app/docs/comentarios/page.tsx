import Link from "next/link";

export default function Comentarios() {
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
          LINGUAGEM
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Comentários
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          Comentários permitem escrever anotações dentro do código sem que elas
          sejam executadas pela Sun.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        {/* LINHA ÚNICA */}
        <h2 className="text-2xl font-semibold">
          Comentário de uma linha
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">//</code> para criar um
          comentário.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`// Isso é um comentário

mostrar("Olá!")`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Tudo depois de <code className="text-yellow-200">//</code> nessa
          linha é ignorado.
        </p>

        {/* INLINE */}
        <h2 className="mt-12 text-2xl font-semibold">
          Comentário depois do código
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Um comentário também pode aparecer depois de uma instrução.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`velocidade = 50 // velocidade do jogador

mostrar(velocidade)`}</code>
        </pre>

        {/* VÁRIAS LINHAS */}
        <h2 className="mt-12 text-2xl font-semibold">
          Comentários de várias linhas
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Para comentários maiores, use{" "}
          <code className="text-yellow-200">//[[</code> para começar e{" "}
          <code className="text-yellow-200">]]</code> para terminar.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`//[[
Este é um comentário maior.

Ele pode ocupar várias linhas.

Nada aqui será executado.
]]

mostrar("Sun!")`}</code>
        </pre>

        {/* EXEMPLO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Organizando seu código
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Comentários podem explicar partes importantes do programa.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`// Configurações
velocidade = 50
pulo = 80

// Informações do jogador
jogador = {
    nome: "Black",
    ativo: verdadeiro
}

// Verifica se o jogador está ativo
se jogador.ativo entao
    mostrar("{jogador.nome} está ativo")
fim`}</code>
        </pre>

        {/* DESATIVAR CÓDIGO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Desativando código temporariamente
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Comentários também são úteis para impedir temporariamente que uma
          parte do código seja executada.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`mostrar("Executa")

// mostrar("Não executa")

mostrar("Executa também")`}</code>
        </pre>

        {/* BLOCO SUN */}
        <h2 className="mt-12 text-2xl font-semibold">
          Comentários multilinha dentro de Sun[[ ]]
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Existe um detalhe importante ao usar comentários multilinha dentro
          do bloco usado para carregar código Sun.
        </p>

        <p className="mt-4 leading-7 text-neutral-400">
          O loader normalmente usa{" "}
          <code className="text-yellow-200">Sun[[ ... ]]</code>. Como um
          comentário multilinha também termina com{" "}
          <code className="text-yellow-200">]]</code>, isso pode fechar a
          string externa antes da hora.
        </p>

        <div className="mt-6 rounded-xl border border-red-400/10 bg-red-400/[0.03] p-5">
          <p className="font-medium text-red-300">
            Evite esta combinação
          </p>

          <pre className="mt-4 overflow-x-auto text-sm leading-7 text-neutral-400">
            <code>{`Sun[[
    //[[
    comentário
    ]]
]]`}</code>
          </pre>
        </div>

        {/* LONG BRACKET */}
        <h2 className="mt-12 text-2xl font-semibold">
          Usando Sun[=[ ]=]
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Quando seu código tiver um comentário multilinha, use uma string
          longa com <code className="text-yellow-200">=</code> no bloco
          externo.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-yellow-300/10 bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`Sun[=[
    //[[
    Este comentário pode
    ocupar várias linhas.
    ]]

    mostrar("Olá!")
]=]`}</code>
        </pre>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            Por que isso acontece?
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            O código Sun é passado inicialmente como uma string longa do Luau.
            Usar <code className="text-yellow-200">[=[ ]=]</code> evita que o{" "}
            <code className="text-yellow-200">]]</code> existente dentro do
            código seja confundido com o final da string externa.
          </p>
        </div>

        {/* RESUMO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Resumo
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.07]">
          <div className="grid grid-cols-[180px_1fr] border-b border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-medium">
            <span>Sintaxe</span>
            <span>Uso</span>
          </div>

          <div className="grid grid-cols-[180px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">// comentário</code>
            <span>Comentário de uma linha</span>
          </div>

          <div className="grid grid-cols-[180px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">código // comentário</code>
            <span>Comentário no final da linha</span>
          </div>

          <div className="grid grid-cols-[180px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">//[[ ... ]]</code>
            <span>Comentário de várias linhas</span>
          </div>

          <div className="grid grid-cols-[180px_1fr] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">Sun[=[ ... ]=]</code>
            <span>
              Bloco recomendado quando houver comentário multilinha
            </span>
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/texto"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Texto
          </Link>

          <Link
            href="/docs/roblox"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Roblox →
          </Link>
        </div>
      </div>
    </main>
  );
}
