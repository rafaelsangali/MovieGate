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
          <h2 className="text-center mt-10 w-2/3 text-white font-medium text-3xl sm:text-xl md:text-2xl">
            Controle suas finanças de forma muito simples
          </h2>
          <h3 className="text-white text-center w-1/2 mt-14">
            Faça seu login com sua conta google
          </h3>
        </div>

        <div className="bg-slate-gray h-1/4 w-screen flex justify-center">
          <button
            type="button"
            className="flex gap-[15%] w-[300px] h-14 items-center bg-white rounded -translate-y-1/2 hover:scale-105 transition-transform"
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
      {/* {showLoading && <Loading />} */}
    </>
  )
}
