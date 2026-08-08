import Head from 'next/head';
import Catalogo from '@/components/catalogo';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Catálogo</title>
      </Head>
      <main>
        <h1>Catálogo</h1>
        <Catalogo />
      </main>
    </div>
  );
}