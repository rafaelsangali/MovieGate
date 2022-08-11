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
      <main className="h-screen ">
        <div className="bg-midnight-blue h-3/4 flex flex-col justify-center items-center ">
          <a
            className="sm:scale-125 md:scale-150 transition-transform flex flex-col"
            href="/"
          >
            <Image
              src={icons.iconFinance}
              width={110}
              alt="Icone SpendTracker"
            />
            <h1 className="text-white text-xl">SpendTracker</h1>
          </a>
          <h2 className="text-center mt-10 text-white font-medium text-3xl sm:text-xl md:text-2xl">
            Controle suas finanças de forma muito simples
          </h2>
          <h3 className="text-white text-center w-1/2 mt-20">
            Faça seu login com sua conta google
          </h3>
        </div>
        {/* <button
          type="button"
          className="flex items-center gap-16 bg-white rounded py-[18px] px-4"
        >
          <div className="flex text-center border-r-2">
            <Image src={icons.iconGoogle} alt="Icone Google" />
          </div>
          <p className="mr-10">Entrar com Google</p>
        </button> */}

        <div className="bg-slate-gray h-1/4 w-screen flex justify-center">
          <button
            type="button"
            className="flex gap-[12%] w-4/5 h-14 items-center bg-white rounded -translate-y-1/2"
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
      {/* <footer className="bg-slate-gray h-1/4 w-full bottom-0 absolute -z-10" /> */}
    </>
  )
}
