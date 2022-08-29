import format from 'date-fns/format'
import { useState } from 'react'
import { VictoryPie } from 'victory'
import Navigation from '../components/Navigation'

const myData = [
  { title: 'react', x: '70%', y: '200' },
  { title: 'vue', x: '60%', y: '100' },
  { title: 'angular', x: '10%', y: '100' },
  { title: 'php', x: '10%', y: '100' },
]

export default function Summary() {
  const newDate = new Date()
  const dataFormat = format(new Date(), 'yyyy-MM')
  const [date, setDate] = useState(dataFormat)

  return (
    <>
      <header className="bg-midnight-blue h-12 flex justify-center items-center sm:h-14 md:h-16 lg:h-20">
        <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
          Resumo por categoria
        </h2>
      </header>
      <main className="bg-light-gray min-h-screen flex flex-col items-center -z-10">
        <input
          className="w-80 h-10 my-4 px-2 text-center rounded-md sm:h-12 md:h-14"
          type="month"
          min={`${newDate.getFullYear()}-01`}
          max={`${newDate.getFullYear()}-12`}
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div className="">
          <VictoryPie
            width={500}
            height={500}
            data={myData}
            innerRadius={70}
            labelRadius={90}
            style={{
              labels: { fill: 'white', fontSize: 20, fontWeight: 'bold' },
            }}
            colorScale={['#5636D3', '#FF872C', '#12A454', '#E83F5B']}
            radius={150}
          />
          <div className="flex justify-center items-center">
            <div className="bg-white w-72 py-3 px-3 flex justify-between border-l-4 border-purple items-center rounded">
              <p>Casa</p>
              <div className="flex">
                R$
                <p className="font-bold">123312</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Navigation />
    </>
  )
}
