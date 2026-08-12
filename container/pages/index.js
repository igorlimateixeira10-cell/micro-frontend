import { useState } from 'react';
import dynamic from 'next/dynamic';

const Cardapio = dynamic(() => import('catalogo/Cardapio'), { ssr: false });

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const adicionarItem = (produto) => {
    setCarrinho((prev) => [...prev, produto]);
    setMensagem(`Produto "${produto.nome}" adicionado ao carrinho!`);
    setTimeout(() => setMensagem(""), 3000);
  };

  const valorTotal = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ padding: '24px', backgroundColor: '#28a745', color: '#fff' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Disco-Fome | Entrega</h1>
      </div>

      {mensagem && (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', backgroundColor: '#28a745', color: '#fff', padding: '12px 24px', borderRadius: '8px', zIndex: 1000 }}>
          {mensagem}
        </div>
      )}

      <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
        <h2 style={{ margin: 0, fontSize: '18px' }}>Carrinho ({carrinho.length} itens)</h2>
        <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Total: R$ {valorTotal.toFixed(2)}</p>
      </div>

      <div style={{ padding: '24px' }}>
        <h2 style={{ fontSize: '22px', color: '#111' }}>Cardápio</h2>
        <p style={{ fontSize: '14px', color: '#555' }}>Escolha os melhores lanches da região entrequinhos na sua porta.</p>
        
        {/* Passando a função que atualiza o carrinho para o micro frontend */}
        <Cardapio onAdicionar={adicionarItem} />
      </div>
    </div>
  );
}