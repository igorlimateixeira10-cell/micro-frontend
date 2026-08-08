# Projeto Micro Frontends - Disque-Fome

Aplicação de delivery desenvolvida com arquitetura de **Micro Frontends**, utilizando **Next.js** e **Module Federation** para integrar de forma dinâmica aplicações independentes.

---

## 🏗️ Arquitetura do Projeto

O sistema está dividido em dois microsserviços independentes:

1. **Catálogo (`catalogo` - Porta 3001):**
   - Microsserviço responsável por gerenciar e expor o componente de cardápio (`./Cardapio`) remotamente através do plugin Module Federation (`remoteEntry.js`).

2. **Container (`container` - Porta 3000):**
   - Aplicação Host principal. Ela consome o componente remoto do catálogo em tempo de execução via carregamento dinâmico e gerencia o estado global do carrinho de compras (cálculo de valores, quantidades, adição de itens e eventos de interação).

---

## 🚀 Como Executar o Projeto

Para testar o fluxo completo de micro frontends, você precisará rodar os dois projetos simultaneamente em terminais separados.

### 1. Iniciar o microsserviço de Catálogo (Remoto)
Abra um terminal na pasta do catálogo (`catalogo`), instale as dependências (se necessário), faça o build de produção inicial e inicie na porta **3001**:

```bash
cd catalogo
npm install
npm run build
npm run dev -- -p 3001