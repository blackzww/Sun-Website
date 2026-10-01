import Link from "next/link";

export default function Funcoes() {
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
          Funções
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          Funções permitem agrupar código para reutilizá-lo sempre que
          necessário. Na Sun, funções são criadas com{" "}
          <code className="text-yellow-200">funcao</code>.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        {/* FUNÇÃO BÁSICA */}
        <h2 className="text-2xl font-semibold">
          Criando uma função
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Defina o nome da função, seus parâmetros entre parênteses e finalize
          o bloco com <code className="text-yellow-200">fim</code>.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao ola()
    mostrar("Olá!")
fim`}</code>
        </pre>

        {/* CHAMANDO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Chamando uma função
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Para executar uma função, escreva seu nome seguido de parênteses.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao ola()
    mostrar("Olá!")
fim

ola()`}</code>
        </pre>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            Parênteses fazem parte da sintaxe
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            Chamadas de função na Sun usam parênteses. Por exemplo:{" "}
            <code className="text-yellow-200">mostrar("Olá")</code> e{" "}
            <code className="text-yellow-200">ola()</code>.
          </p>
        </div>

        {/* PARÂMETROS */}
        <h2 className="mt-12 text-2xl font-semibold">
          Parâmetros
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Uma função pode receber valores para usar durante sua execução.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao ola(nome)
    mostrar("Olá {nome}!")
fim

ola("Black")
ola("Ana")`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Você também pode receber vários parâmetros:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao apresentar(nome, idade)
    mostrar("Nome: {nome}")
    mostrar("Idade: {idade}")
fim

apresentar("Black", 18)`}</code>
        </pre>

        {/* RETORNAR */}
        <h2 className="mt-12 text-2xl font-semibold">
          retornar
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">retornar</code> para devolver
          um resultado da função.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao somar(a, b)
    retornar a + b
fim

resultado = somar(10, 20)

mostrar(resultado)`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Nesse exemplo,{" "}
          <code className="text-yellow-200">somar(10, 20)</code> retorna{" "}
          <code className="text-yellow-200">30</code>.
        </p>

        {/* PARÂMETROS PADRÃO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Parâmetros padrão
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Um parâmetro pode ter um valor padrão. Esse valor será usado quando
          nenhum argumento for enviado.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao ola(nome = "Mundo")
    mostrar("Olá {nome}!")
fim

ola()
ola("Black")`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          A primeira chamada usa{" "}
          <code className="text-yellow-200">"Mundo"</code>. A segunda substitui
          o valor padrão por <code className="text-yellow-200">"Black"</code>.
        </p>

        {/* FUNÇÕES + CONDIÇÕES */}
        <h2 className="mt-12 text-2xl font-semibold">
          Funções com condições
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Funções podem usar normalmente outros recursos da linguagem.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao verificarIdade(idade)
    se idade => 18 entao
        retornar verdadeiro
    senao
        retornar falso
    fim
fim

se verificarIdade(18) entao
    mostrar("Maior de idade")
fim`}</code>
        </pre>

        {/* EXEMPLO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Exemplo completo
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`funcao boasVindas(nome = "Jogador")
    mostrar("Bem-vindo, {nome}!")
fim

funcao somar(a, b)
    retornar a + b
fim

boasVindas("Black")

resultado = somar(5, 10)

mostrar("Resultado: {resultado}")`}</code>
        </pre>

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
              <code>{`funcao somar(a, b)
    retornar a + b
fim

mostrar(somar(5, 10))`}</code>
            </pre>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-neutral-400">
              Luau
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-400">
              <code>{`local function somar(a, b)
    return a + b
end

print(somar(5, 10))`}</code>
            </pre>
          </div>
        </div>

        {/* RESUMO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Resumo
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.07]">
          <div className="grid grid-cols-[150px_1fr] border-b border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-medium">
            <span>Sintaxe</span>
            <span>Uso</span>
          </div>

          <div className="grid grid-cols-[150px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">funcao</code>
            <span>Cria uma função</span>
          </div>

          <div className="grid grid-cols-[150px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">retornar</code>
            <span>Retorna um valor</span>
          </div>

          <div className="grid grid-cols-[150px_1fr] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">nome = valor</code>
            <span>Define um valor padrão para um parâmetro</span>
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/loops"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Loops
          </Link>

          <Link
            href="/docs/listas"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Listas →
          </Link>
        </div>
      </div>
    </main>
  );
          }
