import React from 'react';

export default function Cardapio({ onSelecionarPrato }) {
  const produtos = [
    { id: 1, nome: 'X Total Duplo', descricao: 'Pão, dois hambúrgueres artesanais, muito queijo e bacon crocante.', preco: 'R$ 28,00', precoNum: 28.00 },
    { id: 2, nome: 'Mata Fome', descricao: 'Pão grande, três carnes, ovo, presunto, queijo, alface e tomate.', preco: 'R$ 35,00', precoNum: 35.00 },
    { id: 3, nome: 'Cachorro Quente da Casa', descricao: 'Pão de cachorro-quente, duas salsichas, purê de batata, batata palha e molho especial.', preco: 'R$ 18,00', precoNum: 18.00 },
  ];

  const handleClick = (item) => {
    // Tenta chamar a prop normal caso funcione
    if (onSelecionarPrato) onSelecionarPrato(item);
    
    // Dispara também um evento global do navegador (Garantia absoluta)
    window.dispatchEvent(new CustomEvent('adicionar-ao-carrinho', { detail: item }));
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
      {produtos.map((item) => (
        <div key={item.id} style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#111' }}>{item.nome}</h3>
            <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#666' }}>{item.descricao}</p>
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '700', color: '#111', marginBottom: '12px' }}>{item.preco}</div>
            <button 
              onClick={() => handleClick(item)}
              style={{ backgroundColor: '#00a868', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', fontWeight: '600', width: '100%', cursor: 'pointer' }}
            >
              adicionar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}