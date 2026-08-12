# Projeto Micro Frontends - Disco-Fome Delivery

Aplicação desenvolvida para praticar os conceitos de **Micro Frontends** utilizando **Webpack Module Federation** com Next.js e React. O sistema simula um ambiente real de desenvolvimento distribuído, dividindo a aplicação em partes independentes integradas por um container principal.

---

## 🛠️ Arquitetura do Projeto (Monorepo)

O projeto está dividido em duas aplicações principais:
1. **`catalogo` (Micro Cardápio):** Responsável por expor os produtos/pratos disponíveis (nome, descrição, preço e botão de adicionar ao pedido). Roda na porta `3000`.
2. **`container` (Container App):** Aplicação principal que consome o micro de catálogo via Module Federation, gerencia o estado global do carrinho e exibe a interface principal. Roda na porta `3001`.

---

## 🚀 Como Rodar o Projeto

Para executar o projeto localmente, abra **duas abas separadas** no seu terminal:

### 1. Rodar o Micro Catálogo
Entre na pasta do catálogo e inicie o servidor:
```bash
cd catalogo
npm install
npm run build
npm run start

--

container
cd container
npm install
npm run build
PORT=3001 npx next start -p 3001
