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
      <header className="flex h-12 items-center justify-center bg-midnight-blue sm:h-14 md:h-16 lg:h-20">
        <h2 className="text-sm text-white sm:text-base md:text-lg lg:text-xl">
          Resumo por categoria
        </h2>
      </header>
      <main className="-z-10 flex min-h-screen flex-col items-center bg-light-gray">
        <input
          className="my-4 h-10 w-80 rounded-md px-2 text-center sm:h-12 md:h-14"
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
          <div className="flex items-center justify-center">
            <div className="flex w-72 items-center justify-between rounded border-l-4 border-purple bg-white py-3 px-3">
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
