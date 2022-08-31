/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { format } from 'date-fns'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Navigation from '../components/Navigation'
import { AuthContext } from '../contexts/Auth'
import { supabase } from '../libs/supabase'
import { categoryObject } from '../utils/categoryObject'

export default function Register() {
  const { loggedAccount } = useContext(AuthContext)

  const createdAt = format(new Date(), 'dd/MM/yyyy')
  const [register, setRegister] = useState({
    user: loggedAccount.uid,
    name: 'default',
    price: 1,
    type: 'deafult',
    category: 'default',
    createdAt,
  })

  const insertData = async e => {
    e.preventDefault()
    const { status } = await supabase.from('transaction').insert(register)
    const isStatusOk = status.toString().startsWith('20')
    isStatusOk
      ? toast.success('Informação salva com sucesso')
      : toast.error('Algo deu errado. Tente novamente')
  }

  return (
    <>
      <header className="flex h-12 items-center justify-center bg-midnight-blue sm:h-14 md:h-16 lg:h-20">
        <h2 className="text-sm text-white sm:text-base md:text-lg lg:text-xl">
          Cadastro
        </h2>
      </header>
      <main className="w-full  justify-items-center bg-backgroundColour py-10">
        <form className="flex flex-col items-center gap-4">
          <input
            className="h-14 w-[310px] rounded-md px-4"
            type="text"
            placeholder="Nome da Transação"
            name="name"
            onChange={e => setRegister({ ...register, name: e.target.value })}
            required
          />
          <input
            className="h-14 w-[310px] rounded-md px-4"
            type="number"
            placeholder="Preço"
            step="0.01"
            min={1.0}
            max={10000.0}
            onChange={e =>
              setRegister({ ...register, price: Number(e.target.value) })
            }
            required
          />
          <div className="flex flex-wrap justify-center gap-1">
            <label
              className="relative h-14 w-[153px] items-center"
              htmlFor="income"
              tabIndex={0}
            >
              <input
                name="income"
                className={`absolute inset-0 cursor-pointer appearance-none rounded-md border-2
                ${register.type === 'income' ? 'bg-green opacity-10' : ''} `}
                type="radio"
                onFocus={e => setRegister({ ...register, type: e.target.name })}
                required
              />
              <ArrowCircleUp
                size={32}
                className="absolute left-5 top-3 text-green"
              />
              <span className="absolute left-14 top-4 text-title">Income</span>
            </label>
            <label
              className="relative h-14 w-[153px] items-center "
              htmlFor="outcome"
              tabIndex={0}
            >
              <input
                name="outcome"
                className={`absolute inset-0 cursor-pointer appearance-none rounded-md border-2
                ${register.type === 'outcome' ? 'bg-red opacity-10' : ''}`}
                type="radio"
                onFocus={e => setRegister({ ...register, type: e.target.name })}
                required
              />
              <ArrowCircleDown
                size={32}
                className="absolute left-5 top-3 text-red"
              />
              <span className="absolute left-14 top-4 text-title">Outcome</span>
            </label>
          </div>
          <div className="flex w-[310px] flex-wrap justify-center gap-2">
            {categoryObject.map(item => (
              <div
                tabIndex={0}
                className={`flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-md bg-white bg-opacity-50 transition-transform hover:scale-105 hover:shadow-xl
                ${register.category === item.category
                    ? 'border-2 border-black'
                    : ''
                  }`}
                onFocus={() =>
                  setRegister({ ...register, category: item.category })
                }
              >
                {item.icon}
                <span className="text-xs">{item.category}</span>
              </div>
            ))}
          </div>
          <input
            className="h-14 w-[310px] cursor-pointer rounded bg-purple text-white transition-transform hover:scale-105"
            type="submit"
            value="Enviar"
            onClick={e => insertData(e)}
          />
        </form>
      </main>
      <Toaster />
      <Navigation />
    </>
  )
}
