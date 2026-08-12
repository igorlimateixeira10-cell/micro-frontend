# Projeto Micro Frontends - Disco-Fome Delivery (Micro Catálogo)

Este diretório contém o micro frontend responsável pelo catálogo de produtos (Cardápio).

## Como rodar (isolado)

```bash
cd catalogo
npm install
npm run dev
```

O catálogo ficará disponível em: http://localhost:3000

## Integração com o Container

- O micro `catalogo` expõe o componente `Cardapio` via `NextFederationPlugin` em `catalogo/next.config.js`.
- O `container` importa `catalogo/Cardapio` dinamicamente e passa a função `onAdicionar` para que o container atualize o carrinho.

## Observações

- Mantenha a porta 3000 livre ao executar o micro.
- Para rodar a aplicação completa, veja o README na raiz do repositório.
