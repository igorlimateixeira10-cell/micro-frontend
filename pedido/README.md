# Micro Pedido - Disco-Fome Delivery

Este diretório contém o micro frontend `pedido`, responsável por exibir os itens do pedido.

Como rodar (isolado):

```bash
cd pedido
npm install
npm run dev
```

Porta: `3002`

Integração:
- O micro expõe `./Pedido` via Module Federation (veja `next.config.js`).
- O `container` importa `pedido/Pedido` e passa os itens do carrinho via props.

Contrato do componente exposto `Pedido`:
- Props:
  - `items` (array): lista de objetos de produto com pelo menos `nome` e `preco`.

Antes de entregar:
- Rode `npm run build` no `pedido` para garantir que o build está OK.
