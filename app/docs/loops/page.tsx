import Link from "next/link";

export default function Loops() {
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
          Loops
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          Loops permitem repetir código automaticamente. A Sun oferece formas
          simples de repetir uma quantidade específica de vezes, repetir
          enquanto uma condição for verdadeira ou percorrer valores.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        {/* REPETIR */}
        <h2 className="text-2xl font-semibold">
          repetir
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">repetir</code> quando você
          souber quantas vezes o código deve executar.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`repetir 3
    mostrar("Olá!")
fim`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Nesse exemplo, a mensagem será exibida três vezes.
        </p>

        {/* ENQUANTO */}
        <h2 className="mt-12 text-2xl font-semibold">
          enquanto
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          <code className="text-yellow-200">enquanto</code> continua
          executando o bloco enquanto sua condição for verdadeira.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`numero = 1

enquanto numero <= 5
    mostrar(numero)
    numero += 1
fim`}</code>
        </pre>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            Cuidado com loops infinitos
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            Se a condição nunca deixar de ser verdadeira, o loop continuará
            executando. Garanta que exista uma condição de saída quando isso
            for necessário.
          </p>
        </div>

        {/* LOOP CONTÍNUO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Repetição contínua
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Como <code className="text-yellow-200">verdadeiro</code> representa
          um valor verdadeiro, ele também pode ser usado para criar um loop
          contínuo.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`enquanto verdadeiro
    mostrar("Executando...")
    esperar 1 segundo
fim`}</code>
        </pre>

        {/* PARA NUMÉRICO */}
        <h2 className="mt-12 text-2xl font-semibold">
          para
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">para</code> para percorrer
          uma sequência de números.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`para i de 1 ate 10
    mostrar(i)
fim`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          A variável <code className="text-yellow-200">i</code> começa em{" "}
          <code className="text-yellow-200">1</code> e aumenta até chegar em{" "}
          <code className="text-yellow-200">10</code>.
        </p>

        {/* LISTAS */}
        <h2 className="mt-12 text-2xl font-semibold">
          Percorrendo listas
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          <code className="text-yellow-200">para</code> também pode percorrer
          os valores de uma lista.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nomes = ["Black", "Joao", "Ana"]

para nome em nomes
    mostrar(nome)
fim`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Se você também precisar da posição de cada valor, declare duas
          variáveis:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`nomes = ["Black", "Joao", "Ana"]

para i, nome em nomes
    mostrar(i)
    mostrar(nome)
fim`}</code>
        </pre>

        {/* PARAR */}
        <h2 className="mt-12 text-2xl font-semibold">
          parar
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          <code className="text-yellow-200">parar</code> encerra o loop
          imediatamente.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`para i de 1 ate 10
    se i == 5 entao
        parar
    fim

    mostrar(i)
fim`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Nesse exemplo, o loop termina quando{" "}
          <code className="text-yellow-200">i</code> chegar a{" "}
          <code className="text-yellow-200">5</code>.
        </p>

        {/* CONTINUAR */}
        <h2 className="mt-12 text-2xl font-semibold">
          continuar
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          <code className="text-yellow-200">continuar</code> ignora o restante
          da execução atual e segue para a próxima repetição.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`para i de 1 ate 5
    se i == 3 entao
        continuar
    fim

    mostrar(i)
fim`}</code>
        </pre>

        {/* ESPERAR */}
        <h2 className="mt-12 text-2xl font-semibold">
          Esperando entre repetições
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Em loops que executam continuamente, você pode usar{" "}
          <code className="text-yellow-200">esperar</code> para adicionar um
          intervalo.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`repetir 3
    mostrar("Esperando...")
    esperar 1 segundo
fim`}</code>
        </pre>

        <p className="mt-5 leading-7 text-neutral-400">
          Milissegundos também podem ser usados:
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`esperar 500 ms`}</code>
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
              <code>{`repetir 3
    mostrar("Olá!")
fim`}</code>
            </pre>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-neutral-400">
              Luau
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-400">
              <code>{`for i = 1, 3 do
    print("Olá!")
end`}</code>
            </pre>
          </div>
        </div>

        {/* RESUMO */}
        <h2 className="mt-12 text-2xl font-semibold">
          Resumo
        </h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.07]">
          <div className="grid grid-cols-[140px_1fr] border-b border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-medium">
            <span>Sintaxe</span>
            <span>Uso</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">repetir</code>
            <span>Repete uma quantidade definida</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">enquanto</code>
            <span>Repete enquanto uma condição for verdadeira</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">para</code>
            <span>Percorre números ou listas</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">parar</code>
            <span>Encerra o loop</span>
          </div>

          <div className="grid grid-cols-[140px_1fr] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">continuar</code>
            <span>Avança para a próxima repetição</span>
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/condicoes"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Condições
          </Link>

          <Link
            href="/docs/funcoes"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Funções →
          </Link>
        </div>
      </div>
    </main>
  );
}
