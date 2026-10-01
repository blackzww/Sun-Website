# Sun — Design System

## Produto
Developer tool / programming language documentation.

## Direção
Mistura de documentação técnica limpa (hierarquia semelhante a sites de linguagens como Luau) com superfícies modernas e suaves inspiradas em ferramentas de desenvolvimento. Não copiar layout ou identidade de terceiros.

## Princípios
1. Conteúdo técnico primeiro.
2. Dark mode nativo e legível.
3. Amarelo Sun apenas como destaque, nunca como plano de fundo dominante de texto longo.
4. Componentes consistentes e reutilizáveis.
5. Navegação de docs previsível: esquerda = estrutura, centro = conteúdo, direita = índice.
6. Interações com alvo mínimo de 44px.
7. Foco por teclado sempre visível.
8. Sem dependência de hover para informação essencial.
9. Sem emoji como iconografia funcional; usar SVG.
10. Respeitar `prefers-reduced-motion`.

## Tokens
- Background: #080A0C
- Surface: #0F1216
- Elevated: #14181D
- Border: rgba(255,255,255,.08)
- Text: #F6F7F9
- Muted: #9AA3AD
- Sun: #FFC21C
- Sun light: #FFDD6A
- Sun deep: #E99A00
- Success: #5FD19B
- Danger: #FF6B6B
- Radius cards: 18px–24px
- Radius controls: 12px–14px

## Tipografia
UI: system sans stack otimizada para Android/macOS/Windows/Linux.
Código: ui-monospace / SFMono-Regular / Menlo / Consolas / monospace.

## Motion
- Microinterações: 160–220ms.
- Hero ambient animation: lenta, decorativa, opcional.
- Desativar movimentos não essenciais com `prefers-reduced-motion`.

## Layout
- Container principal: até 1200px.
- Docs: sidebar ~260px; conteúdo 720–820px; TOC ~220px em telas largas.
- Mobile: navegação em drawer e conteúdo com padding de 20–24px.

## Anti-patterns
- Gradientes fortes em todas as superfícies.
- Glassmorphism excessivo.
- Cartões aninhados sem necessidade.
- Texto cinza com contraste insuficiente.
- Ícones sem `aria-label` quando forem botões.
- Efeitos que escondem a estrutura da documentação.
- Inventar nomes alternativos para APIs Luau/Roblox apenas por estética.
