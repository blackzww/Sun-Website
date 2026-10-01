import { CodeBlock } from "@/components/code-block";
import { Callout, DocSection, DocTable } from "@/components/docs-elements";

const loader = `local Sun = loadstring(game:HttpGet("https://raw.githubusercontent.com/blackzww/Sun/refs/heads/main/sun.lua"))()

Sun[[
    mostrar("Olá, Sun!")
]]`;

export function renderDocContent(slug: string) {
  switch (slug) {
    case "": return <>
      <DocSection id="o-que-e" title="O que é Sun?">
        <p>Sun é uma camada de linguagem sobre Luau. Ela reduz cerimônia em tarefas comuns, mantém a sintaxe fácil de ler e deixa APIs de Roblox e Luau reconhecíveis quando não existe motivo para escondê-las.</p>
        <Callout title="Regra principal">Sun só existe para facilitar Luau. O que puder ser simplificado sem criar confusão é simplificado; o resto continua compatível com Luau.</Callout>
      </DocSection>
      <DocSection id="primeiro-codigo" title="Seu primeiro código">
        <p>Carregue o compilador e envie o código Sun dentro de <code>Sun[[ ]]</code>.</p>
        <CodeBlock code={loader} language="luau" title="loader.lua" />
        <CodeBlock code={`nome = "Mundo"\nmostrar("Olá {nome}!")`} language="sun" title="Sun" />
      </DocSection>
      <DocSection id="compatibilidade" title="Compatibilidade com Luau">
        <p>APIs conhecidas continuam como são. Você pode usar <code>game:GetService</code>, <code>Instance.new</code>, <code>Vector3.new</code>, <code>CFrame.new</code> e métodos com <code>:</code>.</p>
        <CodeBlock code={`Players = game:GetService("Players")\nplayer = Players.LocalPlayer\nparte = Instance.new("Part")`} language="luau" />
      </DocSection>
      <DocSection id="proximos-passos" title="Próximos passos">
        <p>Comece por instalação, variáveis e condições. Depois avance para Roblox, bibliotecas e debug. O Playground do site permite visualizar uma transpilação equivalente sem executar Roblox no navegador.</p>
      </DocSection>
    </>;

    case "instalacao": return <>
      <DocSection id="loader" title="Loader">
        <p>Use o arquivo RAW oficial do GitHub. O loader retorna o objeto <code>Sun</code>.</p>
        <CodeBlock code={`local Sun = loadstring(game:HttpGet("https://raw.githubusercontent.com/blackzww/Sun/refs/heads/main/sun.lua"))()`} language="luau" />
      </DocSection>
      <DocSection id="sun-block" title="Sun[[ ]]">
        <p>O arquivo inteiro continua sendo Luau, então o código Sun precisa ser enviado como texto para o compilador.</p>
        <CodeBlock code={`Sun[[\n    mostrar("Olá!")\n]]`} language="sun" />
        <Callout title="Por que não escrever Sun direto depois do loader?">Luau analisa o arquivo inteiro antes de executar o loader. Uma sintaxe que Luau não entende falharia antes de Sun ter chance de processá-la.</Callout>
      </DocSection>
      <DocSection id="bloco-longo" title="Quando o código contém ]]">
        <p>Comentários de bloco da Sun também usam <code>]]</code>. Nesse caso use a forma longa de string do Lua.</p>
        <CodeBlock code={`Sun[=[\n    //[[\n    comentário grande\n    ]]\n\n    mostrar("continua aqui")\n]=]`} language="sun" />
      </DocSection>
    </>;

    case "variaveis": return <>
      <DocSection id="criando" title="Criando variáveis">
        <p>Para a maioria dos casos basta atribuir um valor.</p>
        <CodeBlock code={`nome = "Black"\nidade = 18\nativo = verdadeiro`} language="sun" />
      </DocSection>
      <DocSection id="tipos" title="Tipos básicos">
        <DocTable headers={["Sun", "Luau", "Uso"]} rows={[
          [<code key="a">verdadeiro</code>, <code key="b">true</code>, "Booleano verdadeiro"],
          [<code key="a">falso</code>, <code key="b">false</code>, "Booleano falso"],
          [<code key="a">nulo</code>, <code key="b">nil</code>, "Ausência de valor"],
        ]} />
      </DocSection>
      <DocSection id="local" title="local">
        <p>Sun não substitui <code>local</code>. Use quando quiser escopo local explícito.</p>
        <CodeBlock code={`local nome = "Black"\nmostrar(nome)`} language="sun" />
      </DocSection>
      <DocSection id="atalhos" title="+= e -=">
        <p>Os operadores de atribuição de Luau continuam disponíveis.</p>
        <CodeBlock code={`pontos = 10\npontos += 5\npontos -= 2\nmostrar(pontos)`} language="sun" />
      </DocSection>
    </>;

    case "condicoes": return <>
      <DocSection id="se" title="se">
        <CodeBlock code={`idade = 18\n\nse idade => 18 entao\n    mostrar("maior")\nsenao\n    mostrar("menor")\nfim`} language="sun" />
      </DocSection>
      <DocSection id="senaose" title="senaose e aliases">
        <CodeBlock code={`se idade => 18 entao\n    mostrar("maior")\nsenaose idade => 16 entao\n    mostrar("quase")\nsenao\n    mostrar("menor")\nfim`} language="sun" />
        <p><code>casocontrario</code> e <code>cs</code> também funcionam como aliases de <code>senao</code>.</p>
      </DocSection>
      <DocSection id="operadores" title="Operadores">
        <DocTable headers={["Sun", "Equivalente", "Significado"]} rows={[
          [<code key="a">==</code>, <code key="b">==</code>, "igual"], [<code key="a">?=</code>, <code key="b">~=</code>, "diferente"],
          [<code key="a">=&gt;</code>, <code key="b">&gt;=</code>, "maior ou igual"], [<code key="a">&lt;=</code>, <code key="b">&lt;=</code>, "menor ou igual"],
          [<code key="a">&gt;</code>, <code key="b">&gt;</code>, "maior"], [<code key="a">&lt;</code>, <code key="b">&lt;</code>, "menor"],
        ]} />
      </DocSection>
      <DocSection id="logica" title="e, ou e nao">
        <CodeBlock code={`se admin e ativo entao\n    mostrar("acesso")\nfim\n\nse premium ou admin entao\n    mostrar("benefício")\nfim\n\nse nao bloqueado entao\n    mostrar("liberado")\nfim`} language="sun" />
      </DocSection>
    </>;

    case "loops": return <>
      <DocSection id="repetir" title="repetir">
        <CodeBlock code={`repetir 5\n    mostrar("Oi")\nfim`} language="sun" />
      </DocSection>
      <DocSection id="enquanto" title="enquanto">
        <CodeBlock code={`contador = 0\n\nenquanto contador < 3\n    mostrar(contador)\n    contador += 1\nfim`} language="sun" />
      </DocSection>
      <DocSection id="para" title="para">
        <CodeBlock code={`para i de 1 ate 10\n    mostrar(i)\nfim\n\npara i, nome em nomes\n    mostrar(i + ": " + nome)\nfim`} language="sun" />
      </DocSection>
      <DocSection id="controle" title="parar e continuar">
        <p>Use <code>parar</code> para sair do loop e <code>continuar</code> para pular para a próxima iteração.</p>
        <CodeBlock code={`para i de 1 ate 10\n    se i == 4 entao\n        continuar\n    fim\n\n    se i == 8 entao\n        parar\n    fim\n\n    mostrar(i)\nfim`} language="sun" />
      </DocSection>
      <DocSection id="esperar" title="esperar">
        <CodeBlock code={`esperar 1 segundo\nesperar 500 ms\nesperar 0.25`} language="sun" />
      </DocSection>
    </>;

    case "funcoes": return <>
      <DocSection id="criando" title="Criando funções"><CodeBlock code={`funcao ola()\n    mostrar("Olá!")\nfim\n\nola()`} language="sun" /></DocSection>
      <DocSection id="parametros" title="Parâmetros"><CodeBlock code={`funcao somar(a, b)\n    retornar a + b\nfim\n\nresultado = somar(10, 20)`} language="sun" /></DocSection>
      <DocSection id="retorno" title="Retorno"><p><code>retornar</code> vira <code>return</code> em Luau.</p><CodeBlock code={`funcao dobro(valor)\n    retornar valor * 2\nfim`} language="sun" /></DocSection>
      <DocSection id="padrao" title="Valores padrão"><CodeBlock code={`funcao ola(nome = "Mundo")\n    mostrar("Olá {nome}!")\nfim\n\nola()\nola("Black")`} language="sun" /></DocSection>
    </>;

    case "listas": return <>
      <DocSection id="criando" title="Criando listas"><CodeBlock code={`nomes = ["Black", "Joao", "Ana"]\n\ncores = [\n    "amarelo",\n    "branco",\n    "preto"\n]`} language="sun" /></DocSection>
      <DocSection id="acesso" title="Acesso"><p>Listas seguem a indexação de Lua/Luau: o primeiro item é posição 1.</p><CodeBlock code={`mostrar(nomes[1])\nnomes[2] = "Pedro"`} language="sun" /></DocSection>
      <DocSection id="helpers" title="Helpers"><CodeBlock code={`quantidade = tamanho(nomes)\nadicionar(nomes, "Pedro")\nremover(nomes, 2)`} language="sun" /><DocTable headers={["Helper", "Função"]} rows={[[<code key="a">tamanho(lista)</code>,"Quantidade de itens"],[<code key="a">adicionar(lista, valor)</code>,"Adiciona item"],[<code key="a">remover(lista, indice)</code>,"Remove item"]]} /></DocSection>
      <DocSection id="iteracao" title="Iteração"><CodeBlock code={`para nome em nomes\n    mostrar(nome)\nfim\n\npara i, nome em nomes\n    mostrar(i + ": " + nome)\nfim`} language="sun" /></DocSection>
    </>;

    case "objetos": return <>
      <DocSection id="criando" title="Criando objetos"><CodeBlock code={`usuario = {\n    nome: "Black",\n    idade: 18,\n    admin: verdadeiro\n}`} language="sun" /></DocSection>
      <DocSection id="propriedades" title="Propriedades"><CodeBlock code={`mostrar(usuario.nome)\nusuario.idade = 19\n\nse usuario.admin entao\n    mostrar("Administrador")\nfim`} language="sun" /></DocSection>
      <DocSection id="aninhados" title="Estruturas aninhadas"><CodeBlock code={`usuarios = [\n    { nome: "Black", admin: verdadeiro },\n    { nome: "Ana", admin: falso }\n]\n\npara usuario em usuarios\n    mostrar(usuario.nome)\nfim`} language="sun" /></DocSection>
    </>;

    case "texto": return <>
      <DocSection id="strings" title="Strings"><CodeBlock code={`nome = "Sun"\nmensagem = 'Olá'\nmostrar(nome)`} language="sun" /></DocSection>
      <DocSection id="mais" title="Concatenação com +"><p>Quando existe texto na expressão, Sun usa concatenação segura internamente.</p><CodeBlock code={`nome = "Black"\nmostrar("Olá " + nome)\nmostrar("Pontos: " + 100)`} language="sun" /></DocSection>
      <DocSection id="interpolacao" title="Interpolação"><p>Interpolação aceita variáveis e caminhos simples de propriedades.</p><CodeBlock code={`nome = "Black"\nusuario = { nome: "Ana" }\n\nmostrar("Olá {nome}!")\nmostrar("Usuário: {usuario.nome}")`} language="sun" /></DocSection>
    </>;

    case "comentarios": return <>
      <DocSection id="linha" title="Comentário de linha"><CodeBlock code={`// comentário\nmostrar("Olá")`} language="sun" /></DocSection>
      <DocSection id="inline" title="Comentário inline"><CodeBlock code={`velocidade = 50 // velocidade do jogador`} language="sun" /></DocSection>
      <DocSection id="bloco" title="Comentário de bloco"><CodeBlock code={`//[[\nEste trecho inteiro\né ignorado pela Sun.\n]]`} language="sun" /></DocSection>
      <DocSection id="sun-wrapper" title="Dentro de Sun[[ ]]"><p>Como <code>]]</code> fecha a string longa externa, prefira <code>Sun[=[ ]=]</code> quando houver comentário de bloco.</p><CodeBlock code={`Sun[=[\n    //[[\n    comentário\n    ]]\n\n    mostrar("Oi")\n]=]`} language="luau" /></DocSection>
    </>;

    case "roblox": return <>
      <DocSection id="atalhos" title="Atalhos Roblox"><p>Sun oferece atalhos para o jogador local e propriedades frequentes, mas a API original continua disponível.</p><DocTable headers={["Atalho", "Valor"]} rows={[
        [<code key="a">roblox.jogador</code>,"LocalPlayer"],[<code key="a">roblox.personagem</code>,"Character"],[<code key="a">roblox.humanoide</code>,"Humanoid"],[<code key="a">roblox.vida</code>,"Health"],[<code key="a">roblox.vidamaxima</code>,"MaxHealth"],[<code key="a">roblox.velocidade</code>,"WalkSpeed"],[<code key="a">roblox.pulo</code>,"JumpPower"],[<code key="a">roblox.posicao</code>,"posição da raiz"]
      ]} /></DocSection>
      <DocSection id="leitura" title="Leitura"><CodeBlock code={`mostrar(roblox.vida)\nmostrar(roblox.velocidade)\nmostrar(roblox.jogador.nome)\nmostrar(roblox.jogador.cabeca.posicao)\n\nmostrar(em roblox vida)`} language="sun" /></DocSection>
      <DocSection id="escrita" title="Escrita"><CodeBlock code={`roblox.velocidade = 50\nroblox.pulo = 80\nroblox.vida = 100\nroblox.posicao = Vector3.new(0, 10, 0)\n\nem roblox velocidade = 50`} language="sun" /></DocSection>
      <DocSection id="luau" title="Luau original"><CodeBlock code={`Players = game:GetService("Players")\nplayer = Players.LocalPlayer\nparte = Instance.new("Part")\nparte.CFrame = CFrame.new(0, 10, 0)`} language="luau" /></DocSection>
    </>;

    case "roblox/jogador": return <>
      <DocSection id="jogador" title="Jogador local"><CodeBlock code={`mostrar(roblox.jogador.nome)`} language="sun" /></DocSection>
      <DocSection id="personagem" title="Personagem"><CodeBlock code={`personagem = roblox.jogador.personagem\ncabeca = roblox.jogador.cabeca\nmostrar(cabeca.posicao)`} language="sun" /></DocSection>
      <DocSection id="status" title="Vida, velocidade e pulo"><CodeBlock code={`mostrar(roblox.vida)\nmostrar(roblox.vidamaxima)\n\nroblox.velocidade = 50\nroblox.pulo = 80`} language="sun" /></DocSection>
      <DocSection id="posicao" title="Posição"><CodeBlock code={`mostrar(roblox.posicao)\nroblox.posicao = Vector3.new(0, 20, 0)`} language="sun" /><Callout>Ao escrever em <code>roblox.posicao</code>, o runtime aceita <code>Vector3</code> ou <code>CFrame</code>.</Callout></DocSection>
    </>;

    case "roblox/eventos": return <>
      <DocSection id="quando" title="quando"><p>Eventos comuns possuem uma forma declarativa curta.</p><CodeBlock code={`quando jogador.morrer\n    mostrar("Você morreu")\nfim`} language="sun" /></DocSection>
      <DocSection id="morrer" title="Quando morrer"><CodeBlock code={`quando jogador.morrer\n    mostrar("Respawn em breve")\nfim`} language="sun" /></DocSection>
      <DocSection id="pular" title="Quando pular"><CodeBlock code={`quando jogador.pular\n    mostrar("Pulou!")\nfim`} language="sun" /></DocSection>
      <DocSection id="personagem" title="Mudança de personagem"><CodeBlock code={`quando jogador.personagem mudar\n    mostrar("Novo personagem")\nfim`} language="sun" /><Callout title="Eventos fora desses atalhos">Use normalmente <code>:Connect(function(...)</code> da API Roblox quando não houver atalho Sun.</Callout></DocSection>
    </>;

    case "roblox/apis-luau": return <>
      <DocSection id="getservice" title="game:GetService"><CodeBlock code={`Players = game:GetService("Players")\nRunService = game:GetService("RunService")`} language="luau" /></DocSection>
      <DocSection id="instances" title="Instance.new"><CodeBlock code={`parte = Instance.new("Part")\nparte.Name = "SunPart"\nparte.Parent = workspace`} language="luau" /></DocSection>
      <DocSection id="tipos" title="Vector3 e CFrame"><CodeBlock code={`parte.Size = Vector3.new(5, 1, 5)\nparte.CFrame = CFrame.new(0, 10, 0)`} language="luau" /></DocSection>
      <DocSection id="mistura" title="Misturando Sun e Luau"><CodeBlock code={`Players = game:GetService("Players")\nplayer = Players.LocalPlayer\n\nse player ?= nulo entao\n    mostrar("Jogador: " + player.Name)\nfim`} language="sun" /><Callout title="Sem wrappers desnecessários">Sun não cria nomes alternativos para APIs claras como <code>Instance.new</code> ou <code>CFrame.new</code>.</Callout></DocSection>
    </>;

    case "bibliotecas": return <>
      <DocSection id="carregar" title="carregar"><p><code>carregar</code> simplifica <code>loadstring(game:HttpGet(url))()</code>.</p><CodeBlock code={`WindUI = carregar "URL"`} language="sun" /></DocSection>
      <DocSection id="api" title="Use a API original"><CodeBlock code={`WindUI = carregar "URL"\n\nWindow = WindUI:CreateWindow({\n    Title = "Mirrors Hub",\n    Icon = "rbxassetid://123"\n})`} language="sun" /></DocSection>
      <DocSection id="callbacks" title="Callbacks"><CodeBlock code={`Button = {\n    Title: "Executar",\n    Callback: funcao\n        mostrar("clicou")\n    fim\n}`} language="sun" /></DocSection>
      <DocSection id="seguranca" title="Código remoto"><Callout tone="warning" title="Revise a origem">Carregar uma URL executa código externo no ambiente atual. Sun não torna automaticamente seguro um script remoto.</Callout></DocSection>
    </>;

    case "debug": return <>
      <DocSection id="ativando" title="Ativando"><p>Ative o debug antes de executar o bloco Sun.</p><CodeBlock code={`local Sun = loadstring(game:HttpGet("https://raw.githubusercontent.com/blackzww/Sun/refs/heads/main/sun.lua"))()\n\nSun.debug = true\n\nSun[[\n    repetir 3\n        mostrar("Olá")\n    fim\n]]`} language="luau" /></DocSection>
      <DocSection id="erros" title="Erros"><CodeBlock code={`[SUN ERRO] Linha 7\n\nmostar("oi")\n^^^^^^^\n\n"mostar" não existe.\nTalvez você quis dizer "mostrar".`} language="text" title="Erro" /></DocSection>
      <DocSection id="sugestoes" title="Sugestões"><p>A Sun pode sugerir uma palavra conhecida próxima, mas não corrige o código silenciosamente.</p><Callout>Isso preserva previsibilidade: o código executado não é alterado sem você perceber.</Callout></DocSection>
      <DocSection id="quando-usar" title="Quando usar"><DocTable headers={["Situação", "Debug"]} rows={[["Uso normal","Geralmente desligado"],["Investigando erro","Recomendado"],["Modificando a linguagem","Recomendado"]]} /><CodeBlock code={`Sun.debug = false`} language="luau" /></DocSection>
    </>;
    default: return null;
  }
}
