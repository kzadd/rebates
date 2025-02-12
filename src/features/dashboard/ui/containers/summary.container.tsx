import { JSX } from 'react'
import { Download } from 'lucide-react'

interface SummaryItem {
  title: string
  content: string | JSX.Element
}

const summaryData: SummaryItem[] = [
  {
    content: '$506.780.456.223',
    title: 'Aporte total mes'
  },
  {
    content: '05/12/2024',
    title: 'Última actualización'
  },
  {
    content: '250 de 313',
    title: 'Rebates pagados'
  },
  {
    content: (
      <div className="flex items-center gap-2">
        <span className="cursor-pointer text-sm text-link underline-offset-4 hover:underline hover:disabled:no-underline">
          Descargar listado completo
        </span>

        <Download className="h-4 w-4 text-link" />
      </div>
    ),
    title: 'Reporte'
  }
]

/**
 * Summary container.
 */
export const SummaryContainer = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-2 gap-y-4 rounded-lg border border-border bg-white p-6 shadow-sm hover:border-primary md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {summaryData.map((item, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <h3 className="text-sm text-muted">{item.title}</h3>
          {typeof item.content === 'string' ? (
            <p className="text-lg font-medium">{item.content}</p>
          ) : (
            item.content
          )}
        </div>
      ))}
    </div>
  )
}
