# Projeto Micro Frontends - Disco-Fome Delivery

Aplicação desenvolvida para praticar os conceitos de **Micro Frontends** utilizando **Webpack Module Federation** com Next.js e React. O sistema simula um ambiente real de desenvolvimento distribuído, dividindo a aplicação em partes independentes integradas por um container principal.

---

## 🛠️ Arquitetura do Projeto (Monorepo)

O projeto está dividido em duas aplicações independentes:
1. **`catalogo` (Micro Cardápio):** Responsável por expor os produtos/pratos disponíveis (nome, descrição, preço e botão de adicionar ao pedido). **Roda na porta `3000`**.
2. **`container` (Container App):** Aplicação principal que consome o micro de catálogo via Module Federation, gerencia o estado global do carrinho e exibe a interface principal. **Roda na porta `3001`**.

---

## 🚀 Como Rodar o Projeto

Para executar o projeto localmente de forma completa, abra **duas abas separadas** em seu terminal:

### 1. Iniciar o Micro Catálogo
Na primeira aba do seu terminal, entre na pasta do catálogo, instale as dependências e inicie o servidor:

```bash
cd catalogo
npm install
npm run dev


O catálogo deve estar em execução na porta 3000 - http://localhost:3000


​2. Iniciar o Container App
​Em uma segunda aba separada do seu terminal, entre na pasta do container, instale as dependências e inicie utilizando o Webpack local


cd container
npm install
NEXT_PRIVATE_LOCAL_WEBPACK=true npm run dev


O container deve estar em execução na porta 3001 - http://localhost:3001

Como Funciona a Integração e Comunicação
​Module Federation: O container/next.config.mjs utiliza o NextFederationPlugin para importar remotamente o componente Cardapio exposto pelo micro catalogo.
​Carregamento Dinâmico: O container consome os componentes remotos de forma assíncrona, garantindo independência no build e no deploy de cada micro frontend.
​Comunicação: A interação de adicionar itens ao carrinho gerencia o estado reativo entre os componentes integrados na interface principal.