import Image from 'next/image'
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
      </div>
    </main>
  )
}
