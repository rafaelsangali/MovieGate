import { useRouter } from "next/router"
import {
  ClipboardText,
  CurrencyDollarSimple,
  Link,
  // eslint-disable-next-line prettier/prettier
  ListBullets
} from "phosphor-react"

export default function SignIn() {
  const router = useRouter().pathname
  console.log(router)

  const navFooter = [
    {
      title: "Listagem",
      icon: (
        <ListBullets
          size={25}
          color={`${router === "/" ? "#E83F5B" : "#969CB2"}`}
        />
      ),
      href: "/",
    },
    {
      title: "Cadastrar",
      icon: (
        <CurrencyDollarSimple
          size={25}
          color={`${router === "/signIn" ? "#E83F5B" : "#969CB2"}`}
        />
      ),
      href: "/signIn",
    },
    {
      title: "Resumo",
      icon: (
        <ClipboardText
          size={25}
          color={`${router === "/summary" ? "#E83F5B" : "#969CB2"}`}
        />
      ),
      href: "/summary",
    },
  ]
  return (
    <header className="bg-midnight-blue h-12 flex justify-center items-center sm:h-14 md:h-16 lg:h-20">
      <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
        Cadastro
      </h2>
      <footer className="fixed bottom-0 h-[72px] border-t-2 w-screen flex items-center">
        <nav className="w-screen flex justify-around">
          {navFooter.map(item => (
            <div className="flex items-center cursor-pointer" key={item.title}>
              <Link href={item.href}>
                <>
                  {item.icon}
                  <p
                    className={`pl-2 ${
                      router === item.href ? "text-red" : "text-text"
                    }`}
                  >
                    {item.title}
                  </p>
                </>
              </Link>
            </div>
          ))}
        </nav>
      </footer>
    </header>
  )
}
