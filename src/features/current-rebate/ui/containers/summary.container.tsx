import { JSX } from 'react'

interface SummaryItem {
  title: string
  description: string
  price: string
}

const summaryData: SummaryItem[] = [
  {
    description: 'Valor total de aportes de los rebates filtrados.',
    price: '$000.000.000',
    title: 'Aporte total'
  },
  {
    description: 'Valor total de tiendas vinculadas a rebates filtrados',
    price: '$000.000.000',
    title: 'Total Tienda'
  },
  {
    description: 'Total de tiendas web con rebates filtrados.',
    price: '$000.000.000',
    title: 'Total .COM'
  }
]

/**
 * Summary container.
 */
export const SummaryContainer = (): JSX.Element => {
  return (
    <div className="grid h-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:mt-9 lg:grid-cols-1">
      {summaryData.map((item, index) => (
        <div
          className="flex w-full flex-col gap-2 rounded-lg border border-border bg-white p-6 shadow-sm hover:border-primary md:max-w-[220px]"
          key={index}
        >
          <p>{item.title}</p>
          <p className="text-xs text-muted">{item.description}</p>
          <p className="text-lg font-semibold">{item.price}</p>
        </div>
      ))}
    </div>
  )
}
