import Head from 'next/head';
import { useState, useEffect } from 'react';
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
    setMensagem(`"${produto.nome}" adicionado ao carrinho! 🛒`);
    setTimeout(() => setMensagem(''), 3000);
  };

  // Escuta o evento global vindo do microsserviço remoto
  useEffect(() => {
    const handleEvent = (e) => {
      if (e.detail) adicionarItem(e.detail);
    };
    window.addEventListener('adicionar-ao-carrinho', handleEvent);
    return () => window.removeEventListener('adicionar-ao-carrinho', handleEvent);
  }, []);

  const valorTotal = carrinho.reduce((acc, item) => acc + item.precoNum, 0);

  return (
    <div style={{ backgroundColor: '#f4f4f5', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Head>
        <title>Disco-Fome | Delivery</title>
      </Head>

      {mensagem && (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', backgroundColor: '#00a868', color: '#fff', padding: '12px 24px', borderRadius: '8px', zIndex: 1000, fontWeight: 'bold' }}>
          {mensagem}
        </div>
      )}

      <header style={{ backgroundColor: '#ffffff', padding: '14px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eaeaea' }}>
        <h2 style={{ margin: 0, color: '#ea1d2c' }}>Disco-Fome</h2>
        <div style={{ backgroundColor: '#ea1d2c', color: '#fff', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold' }}>
          🛒 Carrinho ({carrinho.length}) - R$ {valorTotal.toFixed(2)}
        </div>
      </header>

      <div style={{ background: '#ea1d2c', color: '#fff', padding: '36px 32px', textAlign: 'center' }}>
        <h1>Fome de quê?</h1>
        <p>Os melhores lanches da região entregues quentinhos na sua porta.</p>
      </div>

      <main style={{ maxWidth: '1100px', margin: '24px auto', padding: '0 20px' }}>
        <h3 style={{ marginBottom: '16px', color: '#333' }}>Cardápio Remoto (Carregado via Módulo Federação)</h3>
        
        <RemoteCardapio onSelecionarPrato={adicionarItem} />
      </main>
    </div>
  );
}