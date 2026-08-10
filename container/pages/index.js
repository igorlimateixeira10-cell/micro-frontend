import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const RemoteCardapio = dynamic(
  () => import('catalogo/Cardapio'),
  { ssr: false }
);

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);
  const [mensagem, setMensagem] = useState('');

  const adicionarItem = (produto) => {
    setCarrinho((prev) => [...prev, produto]);
    setMensagem(`Produto "${produto.nome}" adicionado ao carrinho!`);
    setTimeout(() => setMensagem(''), 3000);
  };

  const valorTotal = carrinho.reduce((acc, item) => acc + item.precoNum, 0);

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Título do Disco-Fome / Delivery */}
      <div style={{ padding: '24px', backgroundColor: '#00a868', color: '#fff' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Disco-Fome | Delivery</h1>
      </div>

      {mensagem && (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', backgroundColor: '#28a745', color: '#fff', padding: '12px 24px', borderRadius: '8px', zIndex: 1000 }}>
          {mensagem}
        </div>
      )}

      {/* Seção do Carrinho */}
      <div style={{ background: '#fff', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eaeaea' }}>
        <h2 style={{ margin: 0, fontSize: '18px', color: '#111' }}>Carrinho ({carrinho.length} itens)</h2>
        <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#00a868' }}>
          Total: R$ {valorTotal.toFixed(2)}
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div style={{ padding: '24px' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '22px', color: '#111' }}>Cardápio</h2>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Escolha os melhores lanches da região entregues quentinhos na sua porta.
        </p>

        {/* Componente Remoto via Module Federation */}
        <RemoteCardapio onAdicionar={adicionarItem} />
      </div>

    </div>
  );
}