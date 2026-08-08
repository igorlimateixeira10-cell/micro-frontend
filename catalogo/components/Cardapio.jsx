import React, { useState } from 'react';

export default function Cardapio({ categoriaSelecionada = 'Destaques', onAdicionar }) {
  // Lista completa de produtos com suas respectivas categorias
  const produtos = [
    { id: 1, nome: 'X Total Duplo', categoria: 'Burgers Artesanais', descricao: 'Pão, dois hambúrgueres artesanais, muito queijo e bacon crocante.', preco: 'R$ 28,00' },
    { id: 2, nome: 'Mata Fome', categoria: 'Burgers Artesanais', descricao: 'Pão grande, três carnes, ovo, presunto, queijo, alface e tomate.', preco: 'R$ 35,00' },
    { id: 3, nome: 'Cachorro Quente da Casa', categoria: 'Hot Dogs', descricao: 'Pão de cachorro-quente, duas salsichas, purê de batata, batata palha e molho especial.', preco: 'R$ 18,00' },
    // Adicione mais itens se quiser testar outras categorias (ex: Sobremesas, Bebidas)
  ];

  // Filtra os produtos com base na categoria que veio do container principal
  const produtosFiltrados = categoriaSelecionada === 'Destaques' 
    ? produtos 
    : produtos.filter(p => p.categoria.toLowerCase() === categoriaSelecionada.toLowerCase());

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
      {produtosFiltrados.length > 0 ? (
        produtosFiltrados.map((item) => (
          <div key={item.id} style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#111', fontWeight: '700' }}>{item.nome}</h3>
              <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#666', lineHeight: '1.4' }}>{item.descricao}</p>
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#111', marginBottom: '12px' }}>{item.preco}</div>
              <button 
                onClick={() => onAdicionar && onAdicionar(item)}
                style={{ backgroundColor: '#00a868', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', fontWeight: '600', width: '100%', cursor: 'pointer', transition: 'background 0.2s' }}
              >
                Adicionar
              </button>
            </div>
          </div>
        ))
      ) : (
        <p style={{ color: '#777', fontSize: '14px', gridColumn: '1 / -1', textAlign: 'center', padding: '32px 0' }}>
          Nenhum item encontrado nesta categoria no momento.
        </p>
      )}
    </div>
  );
}
