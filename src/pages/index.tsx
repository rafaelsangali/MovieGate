import Image from 'next/image'
import { useRouter } from 'next/router'
import { ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { icons } from '../../public'
import Loading from '../components/Loading'
import Navigation from '../components/Navigation'
import { AuthContext } from '../contexts/Auth'

export default function Home() {
  const { loggedAccount, logOut, authLoaded } = useContext(AuthContext)
  const router = useRouter()
  if (!authLoaded) {
    return <Loading />
  }
  if (authLoaded && !loggedAccount) {
    router.push('/login')
    return <Loading />
  }
  return (
    <>
      <main>
        <div className="flex flex-col bg-midnight-blue">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4 text-lg">
              <div className="relative flex h-12 w-12 overflow-hidden rounded-full border-2 border-slate-gray">
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
          <div className="-mb-12 flex gap-3 overflow-x-auto pl-6">
            <section className="relative flex min-w-[300px] flex-col justify-between gap-10 rounded-xl bg-white p-6 text-title">
              <div className="flex justify-between">
                <p>Entradas</p>
                <ArrowCircleUp size={45} color="#12A454" weight="light" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl text-title">R$ 17.400,00</p>
                <p className="text-sm text-text">
                  Última entrada dia 13 de abril
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="h-screen w-full bg-backgroundColour px-6 pt-20">
          <p className="text-lg font-bold text-black">Listagem</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-5 rounded-lg bg-white px-6 py-4">
              <div>
                <p className="text-title">Desenvolvimento de Site</p>
                <p className="text-xl text-green">R$ 12.000,00</p>
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
      <Navigation />
    </>
  )
}
