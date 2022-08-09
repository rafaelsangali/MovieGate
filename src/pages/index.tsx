import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Organizze</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <h1 className='bg-light-gray'>Hello World</h1>
      </main>
    </div>
  );
}
