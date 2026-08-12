import React from 'react';

// Componente exposto pelo micro `pedido`.
// Este componente é intencionalmente simples e documentado para ficar claro
// qual é o contrato entre o micro e o container.
// - O container deve passar uma prop `items` que é um array de objetos:
//   { nome: string, preco: number, ... }
// - O componente apenas renderiza a lista e calcula o total localmente.
// Motivo: manter a responsabilidade de orquestração (adicionar/remover itens)
// no container, deixando o micro focado apenas na apresentação.
export default function Pedido({ items = [] }) {
  const total = items.reduce((s, i) => s + (Number(i.preco) || 0), 0);

  return (
    <div style={{ border: '1px solid #e6e6e6', padding: '16px', borderRadius: '8px' }}>
      <h3 style={{ marginTop: 0 }}>Itens do Pedido</h3>

      {/* Mensagem quando não há itens */}
      {items.length === 0 ? (
        <p>Seu pedido está vazio.</p>
      ) : (
        <ul style={{ paddingLeft: '16px' }}>
          {items.map((it, idx) => (
            <li key={idx} style={{ marginBottom: '8px' }}>
              <strong>{it.nome}</strong> — R$ {it.preco.toFixed(2)}
            </li>
          ))}
        </ul>
      )}

      {/* Total calculado localmente a partir da lista recebida */}
      <p style={{ marginTop: '12px', fontWeight: 'bold' }}>
        Total: R$ {total.toFixed(2)}
      </p>
    </div>
  );
}
