import { JSX } from 'react'

import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@app/shared/components'

interface SummaryItem {
  title: string
  description: string
  price: string
}

const summaryData: SummaryItem[] = [
  {
    description: 'Valor total de aportes de los rebates filtrados.',
    price: '$120.000.000',
    title: 'Aporte total'
  },
  {
    description: 'Valor total de tiendas vinculadas a rebates filtrados',
    price: '$50.000.000',
    title: 'Total Tienda'
  },
  {
    description: 'Total de tiendas web con rebates filtrados.',
    price: '$60.000.000',
    title: 'Total .COM'
  }
]

/**
 * Summary container.
 */
export const SummaryContainer = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {summaryData.map((item, index) => (
        <div
          className="flex w-full items-center justify-between gap-4 rounded-lg border border-border bg-white p-6 shadow-sm hover:border-primary"
          key={index}
        >
          <div className="flex flex-col gap-2">
            <p>{item.title}</p>
            <p className="text-xs text-muted">{item.description}</p>
          </div>

          <p className="text-lg font-semibold">{item.price}</p>
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <Label htmlFor="sortBy">Ordenar por</Label>

        <Select>
          <SelectTrigger id="sortBy">
            <SelectValue placeholder="Seleccione un orden" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="option-1">Option 1</SelectItem>
            <SelectItem value="option-2">Option 2</SelectItem>
            <SelectItem value="option-3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
