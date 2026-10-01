import Link from "next/link";

export default function Variaveis() {
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
          Variáveis
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          Variáveis guardam valores que podem ser usados posteriormente no
          código. Na Sun, você pode criá-las diretamente, sem precisar escrever
          uma palavra especial antes do nome.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        <h2 className="text-2xl font-semibold">
          Criando uma variável
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Basta escolher um nome e atribuir um valor usando{" "}
          <code className="text-yellow-200">=</code>.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nome = "Black"
idade = 18
ativo = verdadeiro`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Depois disso, você pode usar as variáveis normalmente:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nome = "Black"

mostrar(nome)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Alterando valores
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Uma variável pode receber outro valor a qualquer momento.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`velocidade = 16

velocidade = 50

mostrar(velocidade)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Tipos de valores
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Variáveis podem guardar diferentes tipos de valores.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nome = "Sun"
versao = 1
ativo = verdadeiro
desativado = falso
nada = nulo`}</code>
        </pre>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.07]">
          <div className="grid grid-cols-2 border-b border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-medium">
            <span>Sun</span>
            <span>Luau</span>
          </div>

          <div className="grid grid-cols-2 border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">verdadeiro</code>
            <code>true</code>
          </div>

          <div className="grid grid-cols-2 border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">falso</code>
            <code>false</code>
          </div>

          <div className="grid grid-cols-2 px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">nulo</code>
            <code>nil</code>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Variáveis locais
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Quando você precisar controlar o escopo de uma variável, a Sun
          também aceita o{" "}
          <code className="text-yellow-200">local</code> do Luau.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`local nome = "Black"

mostrar(nome)`}</code>
        </pre>

        <div className="mt-10 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            Compatibilidade com Luau
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            A Sun não tenta substituir recursos úteis do Luau. Quando uma
            construção original já é simples, ela pode continuar sendo usada.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          Atualização rápida
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Para somar ou subtrair diretamente do valor atual, use{" "}
          <code className="text-yellow-200">+=</code> ou{" "}
          <code className="text-yellow-200">-=</code>.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`pontos = 10

pontos += 5
mostrar(pontos)

pontos -= 2
mostrar(pontos)`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">
          Texto com variáveis
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Você pode colocar uma variável diretamente dentro de um texto usando{" "}
          <code className="text-yellow-200">{"{nome}"}</code>.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nome = "Black"

mostrar("Olá {nome}!")`}</code>
        </pre>

        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/instalacao"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Instalação
          </Link>

          <Link
            href="/docs/condicoes"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Condições →
          </Link>
        </div>
      </div>
    </main>
  );
}
