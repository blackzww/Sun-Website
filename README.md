# Sun Website

Site oficial da linguagem **Sun**, construído com Next.js 16, React 19, TypeScript e Tailwind CSS 4.

O projeto foi redesenhado como um site de linguagem/documentação: homepage limpa, documentação com navegação lateral e busca, Playground de transpilação, responsividade completa, SEO e headers de segurança.

## Termux

Requisito: **Node.js 20.9 ou superior**.

```bash
unzip Sun-Website-Complete.zip
cd Sun-Website-Complete
chmod +x install-termux.sh
./install-termux.sh
npm run dev
```

Depois abra `http://localhost:3000`.

Se preferir instalar manualmente:

```bash
npm install
npm run dev
```

## Produção

```bash
npm run check
npm run build
npm run start
```

## Vercel

O projeto funciona diretamente no Vercel. Se `NEXT_PUBLIC_SITE_URL` não estiver definido, ele usa `VERCEL_PROJECT_PRODUCTION_URL` automaticamente para canonical URLs e sitemap.

## Estrutura

- `/` — homepage
- `/docs` — documentação
- `/docs/...` — páginas da linguagem, Roblox e avançado
- `/playground` — editor Sun + preview de Luau gerado
- `design-system/sun/MASTER.md` — regras visuais do produto
- `lib/sun-preview-compiler.ts` — transpiler leve usado no Playground

## Playground

O Playground é um **preview de transpilação no navegador**. Ele não executa Roblox nem `loadstring` no browser. O compilador oficial continua sendo o `sun.lua` executado no ambiente Luau/Roblox.

## Segurança

O site atual é essencialmente estático e não possui endpoint sensível. Por isso Turnstile/rate-limit não foram adicionados sem necessidade. O projeto inclui CSP, bloqueio de iframe, `nosniff`, Referrer Policy e Permissions Policy.

## Fonte oficial da Sun

`https://github.com/blackzww/Sun`

## Licença

MIT.
