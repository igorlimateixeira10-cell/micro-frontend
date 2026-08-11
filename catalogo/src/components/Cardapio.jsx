import React, { useState } from 'react';

export default function Cardapio({ categoriaSelecionada = 'Destaques', onAdicionar }) {
  const produtos = [
    { id: 1, nome: 'X Total Duplo', descricao: 'Burgers Artesanais, muito queijo e bacon crocante.', preco: 'R$ 20,00', precoNum: 20.00, categoria: 'Burgers' },
    { id: 2, nome: 'Mata Fome', descricao: 'Três carnes, ovo, presunto, queijo, alface e tomate.', preco: 'R$ 35,00', precoNum: 35.00, categoria: 'Burgers' },
    { id: 3, nome: 'Cachorro Quente da Casa', descricao: 'Hot Dogs, duas salsichas, purê de batata, batata palha e molho especial.', preco: 'R$ 18,00', precoNum: 18.00, categoria: 'Hot Dogs' }
  ];

  // Filtra os produtos com base na categoria que veio do container principal
  const produtosFiltrados = categoriaSelecionada === 'Destaques' 
    ? produtos 
    : produtos.filter(p => p.categoria.toLowerCase() === categoriaSelecionada.toLowerCase());

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
      {produtosFiltrados.map((item) => (
        <div key={item.id} style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#111' }}>{item.nome}</h3>
            <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#666' }}>{item.descricao}</p>
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '700', color: '#111', marginBottom: '12px' }}>{item.preco}</div>
            <button
              onClick={() => onAdicionar && onAdicionar(item)}
              style={{ backgroundColor: '#00a868', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', width: '100%', cursor: 'pointer', transition: 'background 0.2s' }}
            >
              Adicionar
            </button>
          </div>
        </div>
      ))}
      {produtosFiltrados.length === 0 && (
        <div style={{ fontSize: '16px', gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#666' }}>
          Nenhum item encontrado nesta categoria no momento.
        </div>
      )}
    </div>
  );
}
