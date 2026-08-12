import React from 'react';

const produtos = [
  { id: 1, nome: 'X Total Duplo', preco: 20.00, descricao: 'Hambúrgueres Artesanais, muito queijo e bacon crocante.' },
  { id: 2, nome: 'Mata Fome', preco: 35.00, descricao: 'Três carnes, ovo, presunto, queijo, alface e tomate.' },
  { id: 3, nome: 'Cachorro Quente da Casa', preco: 18.00, descricao: 'Hot Dogs, duas salsichas, purê de batata, batata palha e molho especial.' }
];

export default function Cardapio({ onAdicionar }) {
  const handleAdicionar = (item) => {
    if (typeof onAdicionar === 'function') {
      onAdicionar(item);
    } else {
      console.log('Item adicionado:', item);
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
      {produtos.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <p><strong>R$ {item.preco.toFixed(2)}</strong></p>
          
          <button 
            onClick={() => handleAdicionar(item)} 
            style={{ 
              backgroundColor: '#28a745', 
              color: '#fff', 
              border: 'none', 
              padding: '10px 16px', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              width: '100%' 
            }}
          >
            Adicionar
          </button>
        </div>
      ))}
    </div>
  );
}