import React from 'react';
import Pedido from '../src/components/Pedido';

export default function Home() {
  // Exemplo local para rodar o micro isolado
  const exemplo = [];

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Micro Pedido (Standalone)</h1>
      <p>Este micro exibe os itens do pedido quando consumido pelo container.</p>
      <Pedido items={exemplo} />
    </div>
  );
}
