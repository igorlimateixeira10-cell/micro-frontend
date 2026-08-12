import { useState } from 'react';
import dynamic from 'next/dynamic';

const Cardapio = dynamic(() => import('catalogo/Cardapio'), { ssr: false });
const Pedido = dynamic(() => import('pedido/Pedido'), { ssr: false });

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const adicionarItem = (produto) => {
    // Normaliza o produto para garantir que `preco` é numérico
    const produtoNormalizado = {
      ...produto,
      preco: Number(produto.preco) || 0,
    };
    setCarrinho((prev) => [...prev, produtoNormalizado]);
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
        
        {/*
          Passando a função que atualiza o carrinho para o micro frontend.
          Observação arquitetural: o container é responsável pela orquestração
          do estado (carrinho). Os micros ficam responsáveis pela UI e pela
          notificação de eventos (através de props ou eventos globais).
        */}
        <Cardapio onAdicionar={adicionarItem} />
        
        <div style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: '20px', color: '#111' }}>Pedido</h2>
          {/* O container passa os `items` atuais para o micro `Pedido` exposto */}
          <Pedido items={carrinho} />
        </div>
      </div>
    </div>
  );
}