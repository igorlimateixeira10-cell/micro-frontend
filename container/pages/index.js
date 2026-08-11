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
      <h1>Disco-Fome | Entrega</h1>
      
      {mensagem && (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', backgroundColor: '#28a745', color: '#fff', padding: '16px', borderRadius: '8px' }}>
          {mensagem}
        </div>
      )}

      <div style={{ padding: '16px 24px' }}>
        <h2>Carrinho ({carrinho.length} itens)</h2>
        <p>Total: R$ {valorTotal.toFixed(2)}</p>
      </div>

      <div style={{ padding: '16px 24px' }}>
        <h2>Cardápio</h2>
        {/* Passamos a função adicionarItem para a prop onAdicionar */}
        <Cardapio onAdicionar={adicionarItem} />
      </div>
    </div>
  );
}