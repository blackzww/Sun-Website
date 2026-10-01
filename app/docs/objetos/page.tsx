import Link from "next/link";

export default function Objetos() {
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
          Objetos
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          Objetos permitem agrupar informações relacionadas dentro de uma
          única variável. Cada informação é armazenada em uma propriedade.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        {/* CRIANDO */}
        <h2 className="text-2xl font-semibold">
          Criando um objeto
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Na Sun, objetos usam chaves e propriedades separadas por{" "}
          <code className="text-yellow-200">:</code>.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`usuario = {
    nome: "Black",
    idade: 18,
    admin: verdadeiro
}`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Nesse exemplo, <code className="text-yellow-200">usuario</code>{" "}
          possui três propriedades:{" "}
          <code className="text-yellow-200">nome</code>,{" "}
          <code className="text-yellow-200">idade</code> e{" "}
          <code className="text-yellow-200">admin</code>.
        </p>

        {/* ACESSO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Acessando propriedades
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use um ponto depois do nome do objeto para acessar uma propriedade.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`usuario = {
    nome: "Black",
    idade: 18
}

mostrar(usuario.nome)
mostrar(usuario.idade)`}</code>
        </pre>

        {/* ALTERAÇÃO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Alterando propriedades
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Uma propriedade pode receber um novo valor normalmente.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`usuario = {
    nome: "Black",
    idade: 18
}

usuario.idade = 19

mostrar(usuario.idade)`}</code>
        </pre>

        {/* DIFERENTES VALORES */}
        <h2 className="mt-12 text-2xl font-semibold">
          Diferentes tipos de valores
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Propriedades podem guardar textos, números, valores lógicos, listas
          e outros valores.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`jogador = {
    nome: "Black",
    nivel: 10,
    vivo: verdadeiro,
    itens: ["Espada", "Poção"]
}`}</code>
        </pre>

        {/* LISTAS EM OBJETOS */}
        <h2 className="mt-12 text-2xl font-semibold">
          Listas dentro de objetos
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Como uma propriedade pode guardar uma lista, você pode usar os
          recursos de listas normalmente.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`jogador = {
    nome: "Black",
    itens: ["Espada", "Poção"]
}

adicionar(jogador.itens, "Escudo")

mostrar(tamanho(jogador.itens))`}</code>
        </pre>

        {/* OBJETOS EM LISTAS */}
        <h2 className="mt-12 text-2xl font-semibold">
          Objetos dentro de listas
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Objetos também podem ser armazenados dentro de listas.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`jogadores = [
    {
        nome: "Black",
        nivel: 10
    },
    {
        nome: "Ana",
        nivel: 7
    }
]`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Isso é útil para representar várias entidades com a mesma estrutura.
        </p>

        {/* PERCORRENDO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Percorrendo objetos de uma lista
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`jogadores = [
    {
        nome: "Black",
        nivel: 10
    },
    {
        nome: "Ana",
        nivel: 7
    }
]

para jogador em jogadores
    mostrar(jogador.nome)
    mostrar(jogador.nivel)
fim`}</code>
        </pre>

        {/* CONDIÇÕES */}
        <h2 className="mt-12 text-2xl font-semibold">
          Objetos com condições
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Propriedades podem ser usadas diretamente em condições.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`usuario = {
    nome: "Black",
    admin: verdadeiro
}

se usuario.admin == verdadeiro entao
    mostrar("{usuario.nome} é administrador")
senao
    mostrar("Sem permissão")
fim`}</code>
        </pre>

        {/* FUNÇÕES */}
        <h2 className="mt-12 text-2xl font-semibold">
          Objetos em funções
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Objetos podem ser enviados para funções como qualquer outro valor.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao apresentar(usuario)
    mostrar("Nome: {usuario.nome}")
    mostrar("Idade: {usuario.idade}")
fim

usuario = {
    nome: "Black",
    idade: 18
}

apresentar(usuario)`}</code>
        </pre>

        {/* LUAU */}
        <h2 className="mt-12 text-2xl font-semibold">
          Sun e Luau
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          A sintaxe de objetos da Sun é transformada em uma tabela compatível
          com Luau.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-yellow-300/10 bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-yellow-300">
              Sun
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-300">
              <code>{`usuario = {
    nome: "Black",
    idade: 18
}

mostrar(usuario.nome)`}</code>
            </pre>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-neutral-400">
              Luau
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-400">
              <code>{`local usuario = {
    nome = "Black",
    idade = 18
}

print(usuario.nome)`}</code>
            </pre>
          </div>
        </div>

        {/* EXEMPLO COMPLETO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Exemplo completo
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`jogador = {
    nome: "Black",
    nivel: 10,
    vivo: verdadeiro,
    itens: ["Espada"]
}

adicionar(jogador.itens, "Escudo")

se jogador.vivo entao
    mostrar("{jogador.nome} está vivo")
    mostrar("Nível: {jogador.nivel}")
    mostrar("Itens: {tamanho(jogador.itens)}")
fim`}</code>
        </pre>

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
            <code className="text-yellow-200">{"{ }"}</code>
            <span>Cria um objeto</span>
          </div>

          <div className="grid grid-cols-[180px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">nome: valor</code>
            <span>Cria uma propriedade</span>
          </div>

          <div className="grid grid-cols-[180px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">objeto.nome</code>
            <span>Acessa uma propriedade</span>
          </div>

          <div className="grid grid-cols-[180px_1fr] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">
              objeto.nome = valor
            </code>
            <span>Altera uma propriedade</span>
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/listas"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Listas
          </Link>

          <Link
            href="/docs/texto"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Texto →
          </Link>
        </div>
      </div>
    </main>
  );
}
