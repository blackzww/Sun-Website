import Link from "next/link";

export default function Listas() {
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
          Listas
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          Listas permitem guardar vários valores em uma única variável.
          Na Sun, listas são criadas usando colchetes.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        {/* CRIANDO */}
        <h2 className="text-2xl font-semibold">
          Criando uma lista
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Coloque os valores entre{" "}
          <code className="text-yellow-200">[ ]</code> e separe cada item
          usando vírgulas.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nomes = ["Black", "Joao", "Ana"]`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Uma lista também pode ser escrita em várias linhas:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nomes = [
    "Black",
    "Joao",
    "Ana"
]`}</code>
        </pre>

        {/* TAMANHO */}
        <h2 className="mt-12 text-2xl font-semibold">
          tamanho()
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">tamanho()</code> para descobrir
          quantos itens existem em uma lista.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nomes = ["Black", "Joao", "Ana"]

mostrar(tamanho(nomes))`}</code>
        </pre>

        <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
          <p className="text-sm text-neutral-500">
            Resultado
          </p>

          <code className="mt-2 block text-yellow-200">
            3
          </code>
        </div>

        {/* ADICIONAR */}
        <h2 className="mt-12 text-2xl font-semibold">
          adicionar()
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">adicionar()</code> para
          adicionar um novo valor à lista.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nomes = ["Black", "Joao"]

adicionar(nomes, "Ana")

mostrar(tamanho(nomes))`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Depois da operação, a lista contém três valores.
        </p>

        {/* REMOVER */}
        <h2 className="mt-12 text-2xl font-semibold">
          remover()
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">remover()</code> para remover
          um item usando sua posição.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nomes = ["Black", "Joao", "Ana"]

remover(nomes, 2)`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Nesse exemplo, o segundo item,{" "}
          <code className="text-yellow-200">"Joao"</code>, é removido.
        </p>

        {/* POSIÇÕES */}
        <h2 className="mt-12 text-2xl font-semibold">
          Posições
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Como a Sun é construída sobre Luau, as posições de listas começam
          em <code className="text-yellow-200">1</code>.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nomes = ["Black", "Joao", "Ana"]

mostrar(nomes[1])
mostrar(nomes[2])
mostrar(nomes[3])`}</code>
        </pre>

        <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.07]">
          <div className="grid grid-cols-2 border-b border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-medium">
            <span>Posição</span>
            <span>Valor</span>
          </div>

          <div className="grid grid-cols-2 border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">1</code>
            <code>"Black"</code>
          </div>

          <div className="grid grid-cols-2 border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">2</code>
            <code>"Joao"</code>
          </div>

          <div className="grid grid-cols-2 px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">3</code>
            <code>"Ana"</code>
          </div>
        </div>

        {/* ALTERAR */}
        <h2 className="mt-12 text-2xl font-semibold">
          Alterando um item
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Você pode substituir um valor usando sua posição.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nomes = ["Black", "Joao", "Ana"]

nomes[2] = "Pedro"

mostrar(nomes[2])`}</code>
        </pre>

        {/* PERCORRER */}
        <h2 className="mt-12 text-2xl font-semibold">
          Percorrendo uma lista
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">para ... em</code> para
          executar código para cada valor da lista.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nomes = ["Black", "Joao", "Ana"]

para nome em nomes
    mostrar(nome)
fim`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Também é possível obter a posição e o valor:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nomes = ["Black", "Joao", "Ana"]

para i, nome em nomes
    mostrar("Posição: {i}")
    mostrar("Nome: {nome}")
fim`}</code>
        </pre>

        {/* TIPOS */}
        <h2 className="mt-12 text-2xl font-semibold">
          Diferentes tipos de valores
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Uma lista não precisa conter apenas textos.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`valores = [
    "Sun",
    10,
    verdadeiro,
    falso
]`}</code>
        </pre>

        {/* EXEMPLO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Exemplo completo
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`jogadores = ["Black", "Ana"]

adicionar(jogadores, "Pedro")

mostrar("Jogadores: {tamanho(jogadores)}")

para i, jogador em jogadores
    mostrar("{i}: {jogador}")
fim

remover(jogadores, 2)

mostrar("Restantes: {tamanho(jogadores)}")`}</code>
        </pre>

        {/* RESUMO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Resumo
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.07]">
          <div className="grid grid-cols-[170px_1fr] border-b border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-medium">
            <span>Sintaxe</span>
            <span>Uso</span>
          </div>

          <div className="grid grid-cols-[170px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">[ ]</code>
            <span>Cria uma lista</span>
          </div>

          <div className="grid grid-cols-[170px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">lista[1]</code>
            <span>Acessa um item</span>
          </div>

          <div className="grid grid-cols-[170px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">tamanho()</code>
            <span>Retorna a quantidade de itens</span>
          </div>

          <div className="grid grid-cols-[170px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">adicionar()</code>
            <span>Adiciona um item</span>
          </div>

          <div className="grid grid-cols-[170px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">remover()</code>
            <span>Remove um item</span>
          </div>

          <div className="grid grid-cols-[170px_1fr] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">para ... em</code>
            <span>Percorre os itens</span>
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/funcoes"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Funções
          </Link>

          <Link
            href="/docs/objetos"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Objetos →
          </Link>
        </div>
      </div>
    </main>
  );
}
