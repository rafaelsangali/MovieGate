import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { icons } from '../../public'
import { AuthContext } from '../contexts/Auth'

export default function Home() {
  const { signInWithGoogle } = useContext(AuthContext)


  return (
    <>
      <Head>
        <title>SpendTracker</title>
        <link rel="icon" href={icons.iconFinance} />
      </Head>
      <main className="h-screen ">
        <div className="flex h-3/4 flex-col items-center justify-center bg-midnight-blue ">
          <a
            className="flex flex-col transition-transform sm:scale-125 md:scale-150"
            href="/"
          >
            <Image
              src={icons.iconFinance}
              width={110}
              alt="Icone SpendTracker"
            />
            <h1 className="text-xl text-white">SpendTracker</h1>
          </a>
          <h2 className="mt-10 w-2/3 text-center text-3xl font-medium text-white sm:text-xl md:text-2xl">
            Controle suas finanças de forma muito simples
          </h2>
          <h3 className="mt-14 w-1/2 text-center text-white">
            Faça seu login com sua conta google
          </h3>
        </div>

        <div className="flex h-1/4 w-screen justify-center bg-slate-gray">
          <button
            onClick={signInWithGoogle}
            type="button"
            className="flex h-14 w-[300px] -translate-y-1/2 items-center gap-[15%] rounded bg-white transition-transform hover:scale-105"
          >
            <div className="flex border-r-2 p-2">
              <Image
                src={icons.iconGoogle}
                alt="Icone Google"
                className="border-rounded"
              />
            </div>
            <p>Entrar com Google</p>
          </button>
        </div>
      </main>
    </>
  )
}
