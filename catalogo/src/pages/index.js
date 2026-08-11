import Head from 'next/head';
import Cardapio from '@/components/Cardapio';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Catálogo</title>
      </Head>
      <main>
        <h1>Catálogo</h1>
        <Cardapio />
      </main>
    </div>
  );
}