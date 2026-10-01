export type TocItem = { id: string; label: string };
export type DocEntry = {
  slug: string;
  href: string;
  title: string;
  description: string;
  section: "Começando" | "Linguagem" | "Roblox" | "Avançado";
  keywords: string[];
  toc: TocItem[];
};

export const docsEntries: DocEntry[] = [
  { slug: "", href: "/docs", title: "Introdução", description: "O que é Sun, filosofia e primeiro código.", section: "Começando", keywords: ["inicio", "sun", "luau", "roblox"], toc: [{id:"o-que-e",label:"O que é Sun?"},{id:"primeiro-codigo",label:"Primeiro código"},{id:"compatibilidade",label:"Compatibilidade"},{id:"proximos-passos",label:"Próximos passos"}] },
  { slug: "instalacao", href: "/docs/instalacao", title: "Instalação", description: "Carregando Sun com GitHub RAW e Sun[[ ]].", section: "Começando", keywords: ["loader", "raw", "github", "loadstring"], toc: [{id:"loader",label:"Loader"},{id:"sun-block",label:"Sun[[ ]]"},{id:"bloco-longo",label:"Blocos longos"}] },
  { slug: "variaveis", href: "/docs/variaveis", title: "Variáveis", description: "Valores, local, booleanos, nulo e atribuição.", section: "Linguagem", keywords: ["local", "verdadeiro", "falso", "nulo", "+=", "-="], toc: [{id:"criando",label:"Criando variáveis"},{id:"tipos",label:"Tipos básicos"},{id:"local",label:"local"},{id:"atalhos",label:"+= e -="}] },
  { slug: "condicoes", href: "/docs/condicoes", title: "Condições", description: "se, senaose, senao e operadores da Sun.", section: "Linguagem", keywords: ["se", "senao", "senaose", "operadores", "entao"], toc: [{id:"se",label:"se"},{id:"senaose",label:"senaose"},{id:"operadores",label:"Operadores"},{id:"logica",label:"Lógica"}] },
  { slug: "loops", href: "/docs/loops", title: "Loops", description: "repetir, enquanto, para, parar e continuar.", section: "Linguagem", keywords: ["repetir", "enquanto", "para", "parar", "continuar", "esperar"], toc: [{id:"repetir",label:"repetir"},{id:"enquanto",label:"enquanto"},{id:"para",label:"para"},{id:"controle",label:"Controle"},{id:"esperar",label:"esperar"}] },
  { slug: "funcoes", href: "/docs/funcoes", title: "Funções", description: "funcao, parâmetros, retornar e valores padrão.", section: "Linguagem", keywords: ["funcao", "retornar", "parametros", "default"], toc: [{id:"criando",label:"Criando funções"},{id:"parametros",label:"Parâmetros"},{id:"retorno",label:"Retorno"},{id:"padrao",label:"Valores padrão"}] },
  { slug: "listas", href: "/docs/listas", title: "Listas", description: "Listas, tamanho, adicionar, remover e iteração.", section: "Linguagem", keywords: ["lista", "array", "tamanho", "adicionar", "remover"], toc: [{id:"criando",label:"Criando listas"},{id:"acesso",label:"Acesso"},{id:"helpers",label:"Helpers"},{id:"iteracao",label:"Iteração"}] },
  { slug: "objetos", href: "/docs/objetos", title: "Objetos", description: "Objetos, propriedades e estruturas aninhadas.", section: "Linguagem", keywords: ["objeto", "tabela", "propriedade", "chave"], toc: [{id:"criando",label:"Criando objetos"},{id:"propriedades",label:"Propriedades"},{id:"aninhados",label:"Estruturas aninhadas"}] },
  { slug: "texto", href: "/docs/texto", title: "Texto", description: "Strings, concatenação com + e interpolação.", section: "Linguagem", keywords: ["texto", "string", "interpolacao", "concatenação", "+"], toc: [{id:"strings",label:"Strings"},{id:"mais",label:"Concatenação com +"},{id:"interpolacao",label:"Interpolação"}] },
  { slug: "comentarios", href: "/docs/comentarios", title: "Comentários", description: "Comentários de linha e bloco.", section: "Linguagem", keywords: ["comentario", "//", "bloco"], toc: [{id:"linha",label:"Linha"},{id:"inline",label:"Inline"},{id:"bloco",label:"Bloco"},{id:"sun-wrapper",label:"Dentro de Sun[[ ]]"}] },
  { slug: "roblox", href: "/docs/roblox", title: "Introdução", description: "Atalhos Roblox e compatibilidade com APIs Luau.", section: "Roblox", keywords: ["roblox", "vida", "velocidade", "pulo", "posicao"], toc: [{id:"atalhos",label:"Atalhos"},{id:"leitura",label:"Leitura"},{id:"escrita",label:"Escrita"},{id:"luau",label:"Luau original"}] },
  { slug: "roblox/jogador", href: "/docs/roblox/jogador", title: "Jogador", description: "Jogador local, personagem, humanoide e posição.", section: "Roblox", keywords: ["jogador", "personagem", "humanoide", "cabeca", "raiz"], toc: [{id:"jogador",label:"Jogador local"},{id:"personagem",label:"Personagem"},{id:"status",label:"Status"},{id:"posicao",label:"Posição"}] },
  { slug: "roblox/eventos", href: "/docs/roblox/eventos", title: "Eventos", description: "quando jogador.morrer, pular e mudança de personagem.", section: "Roblox", keywords: ["quando", "evento", "morrer", "pular", "respawn"], toc: [{id:"quando",label:"quando"},{id:"morrer",label:"Morrer"},{id:"pular",label:"Pular"},{id:"personagem",label:"Personagem"}] },
  { slug: "roblox/apis-luau", href: "/docs/roblox/apis-luau", title: "APIs Luau", description: "Use game:GetService, Instance.new, CFrame e bibliotecas normalmente.", section: "Roblox", keywords: ["getservice", "instance", "cframe", "vector3", "luau"], toc: [{id:"getservice",label:"game:GetService"},{id:"instances",label:"Instances"},{id:"tipos",label:"Vector3 e CFrame"},{id:"mistura",label:"Misturando Sun e Luau"}] },
  { slug: "bibliotecas", href: "/docs/bibliotecas", title: "Bibliotecas", description: "carregar URLs e usar APIs externas sem renomear métodos.", section: "Avançado", keywords: ["carregar", "library", "windui", "url", "callback"], toc: [{id:"carregar",label:"carregar"},{id:"api",label:"API original"},{id:"callbacks",label:"Callbacks"},{id:"seguranca",label:"Código remoto"}] },
  { slug: "debug", href: "/docs/debug", title: "Debug", description: "Sun.debug, Luau gerado e mensagens de erro.", section: "Avançado", keywords: ["debug", "erro", "luau gerado", "sugestao"], toc: [{id:"ativando",label:"Ativando"},{id:"erros",label:"Erros"},{id:"sugestoes",label:"Sugestões"},{id:"quando-usar",label:"Quando usar"}] },
];

export const docsSections = ["Começando", "Linguagem", "Roblox", "Avançado"] as const;

export function findDoc(slug: string) {
  return docsEntries.find((entry) => entry.slug === slug);
}
