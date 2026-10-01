import Link from "next/link";

export default function Condicoes() {
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
          Condições
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-400">
          Condições permitem executar diferentes partes do código dependendo
          de uma comparação ou valor.
        </p>

        <div className="my-10 h-px bg-white/[0.07]" />

        {/* SE */}
        <h2 className="text-2xl font-semibold">
          se
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">se</code> para executar um
          bloco somente quando uma condição for verdadeira.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`idade = 18

se idade => 18 entao
    mostrar("Você é maior de idade.")
fim`}</code>
        </pre>

        {/* SENAOSE */}
        <h2 className="mt-12 text-2xl font-semibold">
          senaose
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Use <code className="text-yellow-200">senaose</code> quando quiser
          testar outra condição caso a anterior seja falsa.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`idade = 16

se idade => 18 entao
    mostrar("Maior de idade")

senaose idade => 16 entao
    mostrar("Quase lá")

senao
    mostrar("Menor de idade")
fim`}</code>
        </pre>

        {/* SENAO */}
        <h2 className="mt-12 text-2xl font-semibold">
          senao
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          <code className="text-yellow-200">senao</code> executa quando
          nenhuma das condições anteriores for verdadeira.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`temKey = falso

se temKey == verdadeiro entao
    mostrar("Acesso liberado")
senao
    mostrar("Você precisa de uma key")
fim`}</code>
        </pre>

        {/* ALIASES */}
        <h2 className="mt-12 text-2xl font-semibold">
          Formas alternativas de senao
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          A Sun também aceita{" "}
          <code className="text-yellow-200">casocontrario</code> e{" "}
          <code className="text-yellow-200">cs</code> como alternativas para{" "}
          <code className="text-yellow-200">senao</code>.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`ativo = falso

se ativo == verdadeiro entao
    mostrar("Ativo")
cs
    mostrar("Desativado")
fim`}</code>
        </pre>

        {/* OPERADORES */}
        <h2 className="mt-12 text-2xl font-semibold">
          Operadores de comparação
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Comparações verificam a relação entre dois valores.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.07]">
          <div className="grid grid-cols-[100px_1fr] border-b border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-medium">
            <span>Operador</span>
            <span>Significado</span>
          </div>

          <div className="grid grid-cols-[100px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">==</code>
            <span>igual</span>
          </div>

          <div className="grid grid-cols-[100px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">?=</code>
            <span>diferente</span>
          </div>

          <div className="grid grid-cols-[100px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">&gt;</code>
            <span>maior que</span>
          </div>

          <div className="grid grid-cols-[100px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">&lt;</code>
            <span>menor que</span>
          </div>

          <div className="grid grid-cols-[100px_1fr] border-b border-white/[0.05] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">=&gt;</code>
            <span>maior ou igual</span>
          </div>

          <div className="grid grid-cols-[100px_1fr] px-5 py-3 text-sm text-neutral-400">
            <code className="text-yellow-200">&lt;=</code>
            <span>menor ou igual</span>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-yellow-300/10 bg-yellow-300/[0.04] p-5">
          <p className="font-medium text-yellow-200">
            Atenção ao =&gt;
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-400">
            Na Sun, <code className="text-yellow-200">=&gt;</code> significa
            maior ou igual. Ele corresponde a{" "}
            <code className="text-yellow-200">&gt;=</code> no Luau.
          </p>
        </div>

        {/* LÓGICA */}
        <h2 className="mt-12 text-2xl font-semibold">
          e, ou e nao
        </h2>

        <p className="mt-4 leading-7 text-neutral-400">
          Você pode combinar ou inverter condições usando operadores lógicos.
        </p>

        <h3 className="mt-8 text-lg font-semibold">
          e
        </h3>

        <p className="mt-3 leading-7 text-neutral-400">
          As duas condições precisam ser verdadeiras.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`idade = 18
temKey = verdadeiro

se idade => 18 e temKey == verdadeiro entao
    mostrar("Acesso liberado")
fim`}</code>
        </pre>

        <h3 className="mt-8 text-lg font-semibold">
          ou
        </h3>

        <p className="mt-3 leading-7 text-neutral-400">
          Pelo menos uma das condições precisa ser verdadeira.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`admin = falso
dono = verdadeiro

se admin == verdadeiro ou dono == verdadeiro entao
    mostrar("Você tem permissão")
fim`}</code>
        </pre>

        <h3 className="mt-8 text-lg font-semibold">
          nao
        </h3>

        <p className="mt-3 leading-7 text-neutral-400">
          Inverte um valor lógico.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-5 text-sm leading-7 text-neutral-300">
          <code>{`bloqueado = falso

se nao bloqueado entao
    mostrar("Pode entrar")
fim`}</code>
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
              <code>{`se vida <= 0 entao
    mostrar("Morreu")
senao
    mostrar("Vivo")
fim`}</code>
            </pre>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d0d0d]">
            <div className="border-b border-white/[0.06] px-5 py-3 text-sm font-medium text-neutral-400">
              Luau
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-neutral-400">
              <code>{`if vida <= 0 then
    print("Morreu")
else
    print("Vivo")
end`}</code>
            </pre>
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-7">
          <Link
            href="/docs/variaveis"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            ← Variáveis
          </Link>

          <Link
            href="/docs/loops"
            className="text-sm text-yellow-300 transition hover:text-yellow-200"
          >
            Loops →
          </Link>
        </div>
      </div>
    </main>
  );
}
