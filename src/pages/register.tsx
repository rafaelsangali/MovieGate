/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { useState } from 'react'
import Navigation from '../components/Navigation'
import { categoryObject } from '../utils/categoryObject'

export default function Register() {
  const [name, setName] = useState<string>()
  const [price, setPrice] = useState<number | EventTarget | unknown>()
  const [financeType, setFincanceType] = useState<string>()
  const [category, setCategory] = useState<string>()
  console.log(category)

  return (
    <>
      <header className="bg-midnight-blue h-12 flex justify-center items-center sm:h-14 md:h-16 lg:h-20">
        <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
          Cadastro
        </h2>
      </header>
      <main className="w-full h-screen bg-backgroundColour gap-1 justify-items-center ">
        <div className="flex flex-col items-center gap-2">
          <input
            className="w-[310px] h-14 rounded-md px-4"
            type="text"
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />
          <input
            className="w-[310px] h-14 rounded-md px-4"
            type="number"
            placeholder="Preço"
            min={1}
            max={10000}
            onChange={e => setPrice(e.target.value)}
          />
          <div className="flex flex-wrap justify-center gap-1">
            <label
              className="relative items-center w-[153px] h-14"
              htmlFor="income"
              tabIndex={0}
            >
              <input
                id="income"
                className={`border-2 rounded-md appearance-none inset-0 absolute cursor-pointer ${
                  financeType === 'Income' ? 'bg-green opacity-10' : ''
                } `}
                type="radio"
                onFocus={() => setFincanceType('Income')}
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
                id="outcome"
                className={`border-2 rounded-md appearance-none inset-0 absolute cursor-pointer ${
                  financeType === 'Outcome' ? 'bg-red opacity-10' : ''
                }`}
                type="radio"
                onFocus={() => setFincanceType('Outcome')}
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
                className={`flex flex-col items-center justify-center w-20 h-20 cursor-pointer bg-white bg-opacity-50 rounded-md hover:scale-105 transition-transform ${
                  category === item.category ? 'border-2 border-black' : ''
                }`}
                onClick={() => setCategory(item.category)}
              >
                {item.icon}
                <span className="text-xs">{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Navigation />
    </>
  )
}
