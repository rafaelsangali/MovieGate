import { useRouter } from 'next/router'
import Footer from '../components/Footer'

export default function Register() {
  const router = useRouter().pathname

  return (
    <>
      <header className="bg-midnight-blue h-12 flex justify-center items-center sm:h-14 md:h-16 lg:h-20">
        <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
          Cadastro
        </h2>
      </header>
      <Footer />
    </>
  )
}
