import Head from 'next/head'
import Image from 'next/image'
import { icons } from '../../public'

export default function Home() {
  return (
    <>
      <Head>
        <title>SpendTracker</title>
        <link rel="icon" href={icons.iconFinance} />
      </Head>
      <header className="bg-midnight-blue h-3/4 w-full top-0 absolute -z-10"></header>
      <main className="h-screen grid justify-items-center gap-24 place-content-center">
        <a
          className="sm:scale-125 md:scale-150 transition-transform"
          href={'/'}
        >
          <>
            <Image src={icons.iconFinance} width={110} alt="Icone OrganiEZ" />
            <h1 className="text-white">SpendTracker</h1>
          </>
        </a>
        <h2 className="h-14 mx-10 text-center text-white font-medium text-lg sm:text-xl md:text-2xl">
          Controle suas finanças de forma muito simples
        </h2>
        <button className="flex items-center w-[312px] h-[56px] bg-white rounded">
          <div className='px-4 h-full flex text-center border-r-2'>
            <Image src={icons.iconGoogle} alt="Icone Google" />
          </div>
          <p className='w-full'>Entrar com Google</p>
        </button>
      </main>
      <footer className="bg-slate-gray h-1/4 w-full bottom-0 absolute -z-10"></footer>
    </>
  )
}
