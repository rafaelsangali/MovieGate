import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ClipboardText,
  CurrencyDollarSimple,
  // eslint-disable-next-line prettier/prettier
  ListBullets
} from 'phosphor-react'

export default function Footer() {
  const router = useRouter().pathname

  const navFooter = [
    {
      title: 'Listagem',
      icon: (
        <ListBullets
          size={25}
          color={`${router === '/' ? '#E83F5B' : '#969CB2'}`}
        />
      ),
      href: '/',
    },
    {
      title: 'Cadastrar',
      icon: (
        <CurrencyDollarSimple
          size={25}
          color={`${router === '/register' ? '#E83F5B' : '#969CB2'}`}
        />
      ),
      href: '/register',
    },
    {
      title: 'Resumo',
      icon: (
        <ClipboardText
          size={25}
          color={`${router === '/summary' ? '#E83F5B' : '#969CB2'}`}
        />
      ),
      href: '/summary',
    },
  ]

  return (
    <footer className="fixed bottom-0 h-[72px] border-t-2 w-screen flex items-center bg-white">
      <nav className="w-screen flex justify-around">
        {navFooter.map(item => (
          <Link key={item.title} href={item.href} passHref>
            <a className="flex items-center cursor-pointer">
              {item.icon}
              <p
                className={`pl-2 ${
                  router === item.href ? 'text-red' : 'text-text'
                }`}
              >
                {item.title}
              </p>
            </a>
          </Link>
        ))}
      </nav>
    </footer>
  )
}
