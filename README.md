# Projeto Micro Frontends - Disco-Fome Delivery
Aplicação desenvolvida para praticar os conceitos de Micro Frontends usando Webpack Module Federation com Next.js e React. Este README foi preparado para cumprir a rúbrica do professor e servir como checklist antes do envio ao GitHub.

---

**Resumo rápido (o que o repositório deve conter)**

- `catalogo/` — Micro Cardápio: expõe `Cardapio` (nome, descrição, preço, botão "Adicionar").
- `pedido/` — Micro Pedido: expõe `Pedido` (lista de itens do pedido + total).
- `container/` — Container App: importa remotos via Module Federation, mantém o estado do carrinho e orquestra a UI.

---

**Requisitos da rúbrica (copiar/confirmar com o professor)**

1. Estrutura em 3 aplicações separadas (Container, Cardápio, Pedido).
2. Cardápio lista pratos com nome, descrição, preço e botão "Adicionar".
3. Pedido exibe itens selecionados e total.
4. Integração via Webpack Module Federation (cada micro em pasta/repositório separado ou monorepo com pastas).
5. Usar React e JavaScript (sem TS obrigatório).
6. Comunicação entre micros via props/eventos/contexto (documentado aqui).
7. Código limpo e comentado; README explicando como rodar e como funciona a comunicação.

---

## Como rodar (ambiente de desenvolvimento)

Execute em três terminais separados, na ordem indicada (importante):

1) Micro Catálogo (porta 3000):

```bash
cd catalogo
npm install
npm run dev
# abre em http://localhost:3000
```

2) Micro Pedido (porta 3002):

```bash
cd pedido
npm install
# opcional: exporte PORT=3002 se necessário
PORT=3002 npm run dev
# abre em http://localhost:3002
```

3) Container (porta 3001) — inicie por último para garantir que os remotes estejam acessíveis:

```bash
cd container
npm install
NEXT_PRIVATE_LOCAL_WEBPACK=true npm run dev
# abre em http://localhost:3001
```

Observações:
- Se o container mostrar mensagens "remote offline" ou erros "Loading script failed", verifique se os micros estão rodando nas portas corretas.
- Se as portas já estiverem ocupadas, configure explicitamente `PORT=<n>` ao iniciar cada app.

---

## Como a integração foi implementada (técnica)

- Cada app usa `@module-federation/nextjs-mf` (NextFederationPlugin) em `next.config.js`.
- `catalogo/next.config.js` expõe `./Cardapio` (caminho `./src/components/Cardapio`).
- `pedido/next.config.js` expõe `./Pedido` (caminho `./src/components/Pedido`).
- `container/next.config.js` define `remotes` apontando para os `remoteEntry.js` de cada micro:
	- `catalogo@http://localhost:3000/_next/static/chunks/remoteEntry.js`
	- `pedido@http://localhost:3002/_next/static/chunks/remoteEntry.js`
- No `container`, os componentes remotos são importados dinamicamente com `next/dynamic({ ssr: false })` para evitar problemas de SSR com remotos.

**Comunicação entre micros**

- A orquestração do estado (lista de itens do pedido) fica no `container`.
- O `container` passa a função `onAdicionar` para o `Cardapio` remoto; quando um item é adicionado o `container` atualiza seu estado `carrinho`.
- O `container` então passa `items={carrinho}` para o `Pedido` remoto para exibir os itens e calcular o total.

Alternativa aceita pela rúbrica: comunicação via eventos globais (`window.dispatchEvent` / `window.addEventListener`) ou via SDK compartilhado. A implementação aqui usa props via Module Federation para simplicidade e clareza.

---

## Testes manuais (passo a passo para o professor verificar rapidamente)

1. Inicie os micros e o container conforme acima (container por último).
2. Abra `http://localhost:3001` (container).
3. Verifique se o Cardápio é renderizado (lista de pratos).
4. Clique em "Adicionar" em um prato — deve aparecer uma notificação e o contador do carrinho deve aumentar.
5. Verifique se o micro `Pedido` (renderizado dentro do container) mostra o item e o total atualizado.
6. Abra DevTools → Network e confirme que os `remoteEntry.js` foram carregados de `localhost:3000` e `localhost:3002`.

---

## Checklist antes do push (obrigatório)

- [ ] Executar `npm run build` em `catalogo`, `pedido` e `container` sem erros.
- [ ] Código comentado nas funções públicas/contratos (ex.: contrato de props `onAdicionar`, `items`).
- [ ] `README.md` atualizado (este arquivo) com instruções e checklist.
- [ ] Commit limpo e informativo (ex.: "feat: add micro-pedido + update container remotes").
- [ ] Criar um branch para entrega (ex.: `deliver/micro-frontends`) e abrir o repositório público no GitHub.

Comandos sugeridos para push:

```bash
git checkout -b deliver/micro-frontends
git add .
git commit -m "feat: add micro-pedido and update container to consume remotes; update docs"
git push origin deliver/micro-frontends
```

Depois, cole aqui o link do repositório GitHub para eu confirmar as configurações e o README final.

---

## Entregáveis esperados (o que seu professor provavelmente irá procurar)

- Monorepo com as três pastas (`catalogo/`, `pedido/`, `container/`) ou três repositórios separados.
- `next.config.js` em cada app com Module Federation configurado corretamente.
- Componentes expostos: `Cardapio` e `Pedido` com contrato documentado.
- `README.md` na raiz com instruções claras (este arquivo), e READMEs locais em cada micro com instruções específicas.

---

Se quiser, eu já:
- adiciono o link do repositório quando você criar o remote no GitHub e me passar a URL; ou
- faço o commit e crio o branch e preparo o repo para push (se autorizar).

