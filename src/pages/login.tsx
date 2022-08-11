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
      <main className="flex flex-col pt-[18%] justify-center items-center gap-10 h-screen bg-midnight-blue">
        <a
          className="sm:scale-125 md:scale-150 transition-transform flex flex-col"
          href="/"
        >
          <Image src={icons.iconFinance} width={110} alt="Icone SpendTracker" />
          <h1 className="text-white text-xl">SpendTracker</h1>
        </a>
        <h2 className=" mx-10 text-center text-white font-medium text-3xl sm:text-xl md:text-2xl">
          Controle suas finanças de forma muito simples
        </h2>
        <h3 className="text-white text-center w-[50%] mt-10 mb-[5%]">
          Faça seu login com sua conta google
        </h3>
        {/* <button
          type="button"
          className="flex items-center gap-16 bg-white rounded py-[18px] px-4"
        >
          <div className="flex text-center border-r-2">
            <Image src={icons.iconGoogle} alt="Icone Google" />
          </div>
          <p className="mr-10">Entrar com Google</p>
        </button> */}

        <div className="bg-slate-gray h-full w-screen">
          <button
            type="button"
            className="flex gap-[12%] w-[80%] h-14 mx-auto items-center bg-white rounded translate-y-[-50%]"
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
