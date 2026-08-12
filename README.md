# Micro Frontends — Disco-Fome Delivery

Projeto de exemplo com 3 micros: `catalogo` (3000), `container` (3001) e `pedido` (3002). Integração por Module Federation (Next.js).

Como rodar (dev — abra 3 terminais, na ordem):
```bash
cd catalogo && npm install && npm run dev        # http://localhost:3000
cd pedido  && npm install && PORT=3002 npm run dev # http://localhost:3002
cd container && npm install && NEXT_PRIVATE_LOCAL_WEBPACK=true npm run dev # http://localhost:3001

Teste rápido

Abra http://localhost:3001.
Clique em "Adicionar" no catálogo; confirme que o item aparece no pedido e o total atualiza.
Checklist rápido antes do envio

 catalogo, pedido, container rodando e builds OK.
 Cardapio e Pedido expostos via Module Federation.
 README curto (este), relatório REPORT.md incluído no branch de entrega.
