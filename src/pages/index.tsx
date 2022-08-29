import Image from 'next/image'
import { useRouter } from 'next/router'
import { ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { icons } from '../../public'
import Footer from '../components/Footer'
import { AuthContext } from '../contexts/Auth'
import { auth } from '../libs/firebase'

export default function Home() {
  const { logOut, loggedAccount, authLoaded } = useContext(AuthContext)
  const router = useRouter()
  console.log(loggedAccount)
  if (!authLoaded) {
    return <p>Loading</p>
  }
  if (authLoaded && !loggedAccount) {
    router.push('/login')
    return <p>Loading</p>
  }
  return (
    <>
      <main>
        <div className="bg-midnight-blue flex flex-col">
          <div className="flex items-center px-6 py-4 justify-between">
            <div className="flex gap-4 items-center text-lg">
              <div className="overflow-hidden rounded-full flex border-slate-gray border-2 w-12 h-12 relative">
                <Image
                  src={loggedAccount.photoURL}
                  alt="Icone SpendTracker"
                  layout="fill"
                />
              </div>

              <p className="text-white">
                Olá,{' '}
                <span className="font-bold">
                  {loggedAccount.displayName.split(' ')[0]}
                </span>
              </p>
            </div>
            <button className="flex " type="button" onClick={logOut}>
              <Image
                src={icons.iconPower}
                alt="Icone Power"
                className="rounded-full"
              />
            </button>
          </div>
          <div className="pl-6 -mb-12 flex overflow-x-auto gap-3">
            <section className="relative min-w-[300px] bg-white p-6 text-title flex flex-col gap-10 justify-between rounded-xl">
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
            </section>
          </div>
        </div>
        <div className="w-screen h-screen pt-20 bg-backgroundColour px-6">
          <p className="text-black text-lg font-bold">Listagem</p>
          <div className="flex flex-col gap-4">
            <div className="bg-white px-6 py-4 flex flex-col gap-5 rounded-lg">
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
      <Footer />
    </>
  )
}
