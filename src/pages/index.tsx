import Image from 'next/image'
import { ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { icons } from '../../public'

export default function Home() {
  return (
    <main>
      <div className="bg-midnight-blue flex flex-col">
        <div className="flex items-center px-6 py-4 justify-between">
          <div className="flex gap-4 items-center text-lg">
            <div className="flex border-slate-gray border-2 w-12 h-12 rounded-full relative">
              <Image
                src={icons.iconFinance}
                alt="Icone SpendTracker"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <p className="text-white">
              Olá, <span className="font-bold">Marcus!</span>
            </p>
          </div>
          <div className="flex ">
            <Image
              src={icons.iconPower}
              alt="Icone Power"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="pl-6 -mb-12 flex overflow-x-auto ">
          <div className="relative min-w-[300px] bg-white p-6 text-title flex flex-col gap-10 justify-between">
            <div className="flex justify-between">
              <p>Entradas</p>
              <ArrowCircleUp size={45} color="#12A454" weight="light" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-title text-3xl">R$ 17.400,00</p>
              <p className="text-sm text-text">
                Última entrada dia 13 de abril
              </p>
            </div>
          </div>
          <div className="relative min-w-[300px] bg-white p-6 text-title flex flex-col gap-10 justify-between">
            <div className="flex justify-between">
              <p>Entradas</p>
              <ArrowCircleUp size={45} color="#12A454" weight="light" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-title text-3xl">R$ 17.400,00</p>
              <p className="text-sm text-text">
                Última entrada dia 13 de abril
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen pt-20 bg-backgroundColour px-6">
        <p className="text-black text-lg font-bold">Listagem</p>
        <div className="flex flex-col gap-4">
          <div className="bg-white px-6 py-4 flex flex-col gap-5">
            <div>
              <p className="text-title">Desenvolvimento de Site</p>
              <p className="text-green text-xl">R$ 12.000,00</p>
            </div>
            <div className="flex justify-between text-text">
              <div className="flex gap-2">
                <CurrencyDollar color="#969CB2" size={25} />
                <p>Vendas</p>
              </div>
              <p>13/04/2020</p>
            </div>
          </div>
          <div className="bg-white px-6 py-4 flex flex-col gap-5">
            <div>
              <p className="text-title">Desenvolvimento de Site</p>
              <p className="text-green text-xl">R$ 12.000,00</p>
            </div>
            <div className="flex justify-between text-text">
              <div className="flex gap-2">
                <CurrencyDollar color="#969CB2" size={25} />
                <p>Vendas</p>
              </div>
              <p>13/04/2020</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
