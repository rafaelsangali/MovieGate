import format from 'date-fns/format'
import { useState } from 'react'

export default function Summary() {
  const newDate =  new Date()
  const dataFormat = format(new Date(), 'yyyy-MM')
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(dataFormat)

  return (
    <>
      <header className="bg-midnight-blue h-12 flex justify-center items-center sm:h-14 md:h-16 lg:h-20">
        <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
          Resumo por categoria
        </h2>
      </header>
      <main className="bg-light-gray h-screen">
        <div>
          <input
          className='w-80 h-10 text-center'
            type="month"
            min={`${newDate.getFullYear()}-01`}
            max={`${newDate.getFullYear()}-12`}
            value={date}
            onChange={(e) => setDate(e.target.value)}

          />
        </div>
      </main>
    </>
  )
}
