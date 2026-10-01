import Link from "next/link";

export default function Texto() {
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
          Texto
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          Textos são usados para representar nomes, mensagens e qualquer outro
          conteúdo escrito. Na Sun, textos podem ser combinados e incluir
          valores diretamente.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        {/* TEXTO BÁSICO */}
        <h2 className="text-2xl font-semibold">
          Criando um texto
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Um texto é escrito entre aspas.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nome = "Black"
mensagem = "Olá, mundo!"

mostrar(nome)
mostrar(mensagem)`}</code>
        </pre>

        {/* MOSTRAR */}
        <h2 className="mt-12 text-2xl font-semibold">
          mostrar()
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">mostrar()</code> para exibir
          um valor.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`mostrar("Olá, Sun!")`}</code>
        </pre>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            Parênteses
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            A forma padrão é{" "}
            <code className="text-yellow-200">mostrar("texto")</code>.
            As chamadas de função da Sun usam parênteses.
          </p>
        </div>

        {/* CONCATENAÇÃO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Juntando textos com +
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          A Sun permite usar <code className="text-yellow-200">+</code> para
          juntar textos.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nome = "Black"

mostrar("Olá " + nome)`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Você também pode juntar vários valores:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nome = "Black"
mensagem = "Olá " + nome + "!"

mostrar(mensagem)`}</code>
        </pre>

        {/* INTERPOLAÇÃO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Interpolação
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Para textos mais fáceis de ler, você pode colocar valores diretamente
          dentro do texto usando{" "}
          <code className="text-yellow-200">{"{ }"}</code>.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nome = "Black"

mostrar("Olá {nome}!")`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          O valor de <code className="text-yellow-200">nome</code> será
          colocado automaticamente no texto.
        </p>

        <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
          <p className="text-sm text-neutral-500">
            Resultado
          </p>

          <code className="mt-2 block text-yellow-200">
            Olá Black!
          </code>
        </div>

        {/* VÁRIAS VARIÁVEIS */}
        <h2 className="mt-12 text-2xl font-semibold">
          Vários valores
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Um único texto pode usar várias variáveis.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nome = "Black"
idade = 18

mostrar("{nome} tem {idade} anos")`}</code>
        </pre>

        {/* PROPRIEDADES */}
        <h2 className="mt-12 text-2xl font-semibold">
          Propriedades em textos
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Valores armazenados em objetos também podem ser usados em textos.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`usuario = {
    nome: "Black",
    idade: 18
}

mostrar("Nome: {usuario.nome}")
mostrar("Idade: {usuario.idade}")`}</code>
        </pre>

        {/* FUNÇÕES */}
        <h2 className="mt-12 text-2xl font-semibold">
          Textos em funções
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao boasVindas(nome)
    mostrar("Bem-vindo, {nome}!")
fim

boasVindas("Black")`}</code>
        </pre>

        {/* CONCATENAÇÃO VS INTERPOLAÇÃO */}
        <h2 className="mt-12 text-2xl font-semibold">
          + ou interpolação?
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          As duas formas são válidas. Para mensagens maiores, a interpolação
          geralmente deixa o código mais fácil de ler.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-neutral-400">
              Usando +
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-300">
              <code>{`mostrar(
    "Olá " + nome + "!"
)`}</code>
            </pre>
          </div>

          <div className="overflow-hidden rounded-xl border border-yellow-300/10 bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-yellow-300">
              Interpolação
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-300">
              <code>{`mostrar(
    "Olá {nome}!"
)`}</code>
            </pre>
          </div>
        </div>

        {/* SUN VS LUAU */}
        <h2 className="mt-12 text-2xl font-semibold">
          Sun e Luau
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-yellow-300/10 bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-yellow-300">
              Sun
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-300">
              <code>{`nome = "Black"

mostrar("Olá {nome}!")`}</code>
            </pre>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-neutral-400">
              Luau
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-400">
              <code>{`local nome = "Black"

print("Olá " .. nome .. "!")`}</code>
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
    nivel: 10
}

funcao apresentar(jogador)
    mostrar("Jogador: {jogador.nome}")
    mostrar("Nível: {jogador.nivel}")
fim

apresentar(jogador)`}</code>
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
            <code className="text-yellow-200">&quot;texto&quot;</code>
            <span>Cria um texto</span>
          </div>

          <div className="grid grid-cols-[180px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">+</code>
            <span>Junta textos</span>
          </div>

          <div className="grid grid-cols-[180px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">{"{nome}"}</code>
            <span>Insere um valor no texto</span>
          </div>

          <div className="grid grid-cols-[180px_1fr] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">mostrar()</code>
            <span>Exibe um valor</span>
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/objetos"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Objetos
          </Link>

          <Link
            href="/docs/comentarios"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Comentários →
          </Link>
        </div>
      </div>
    </main>
  );
}
