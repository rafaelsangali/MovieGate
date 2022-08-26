/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { format } from 'date-fns'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { useState } from 'react'
import Navigation from '../components/Navigation'
import { categoryObject } from '../utils/categoryObject'

export default function Register() {
  const createdAt = format(new Date(), 'dd/MM/yyyy')
  const [register, setRegister] = useState({
    name: 'default',
    price: '1',
    type: 'deafult',
    category: 'default',
  })
  console.log(register)

  return (
    <>
      <header className="bg-midnight-blue h-12 flex justify-center items-center sm:h-14 md:h-16 lg:h-20">
        <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
          Cadastro
        </h2>
      </header>
      <main className="w-full  bg-backgroundColour justify-items-center py-10">
        <form className="flex flex-col items-center gap-4">
          <input
            className="w-[310px] h-14 rounded-md px-4"
            type="text"
            placeholder="Nome"
            name="name"
            onChange={e => setRegister({ ...register, name: e.target.value })}
            required
          />
          <input
            className="w-[310px] h-14 rounded-md px-4"
            type="number"
            placeholder="Preço"
            step="0.01"
            min={1.00}
            max={10000.000}
            onChange={e => setRegister({ ...register, price: e.target.value })}
            required
          />
          <div className="flex flex-wrap justify-center gap-1">
            <label
              className="relative items-center w-[153px] h-14"
              htmlFor="income"
              tabIndex={0}
            >
              <input
                name="income"
                className={`border-2 rounded-md appearance-none inset-0 absolute cursor-pointer ${register.type === 'income' ? 'bg-green opacity-10' : ''
                  } `}

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
              className="relative items-center w-[153px] h-14 "
              htmlFor="outcome"
              tabIndex={0}
            >
              <input
                name="outcome"
                className={`border-2 rounded-md appearance-none inset-0 absolute cursor-pointer ${register.type === 'outcome' ? 'bg-red opacity-10' : ''
                  }`}

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
          <div className="w-[310px] flex flex-wrap justify-center gap-2">
            {categoryObject.map(item => (
              <div
                tabIndex={0}
                className={`flex flex-col items-center justify-center w-20 h-20 cursor-pointer bg-white bg-opacity-50 rounded-md hover:scale-105 hover:shadow-xl transition-transform
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
            className="w-[310px] h-14 bg-purple rounded text-white hover:scale-105 transition-transform cursor-pointer"
            type="submit"
            value="Enviar"
          />
        </form>
      </main>
      <Navigation />
    </>
  )
}
