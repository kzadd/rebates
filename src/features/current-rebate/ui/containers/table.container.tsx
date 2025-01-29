import { JSX, useState } from 'react'
import { ChevronDown, ChevronUp, Download, FilePenLine, Trash2 } from 'lucide-react'

import {
  Button,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@app/shared/components'

// Datos de ejemplo para la tabla anidada
const nestedTableData = [
  {
    id: 1,
    details: 'Detalle 1',
    quantity: 100,
    subTotal: 1000
  },
  {
    id: 2,
    details: 'Detalle 2',
    quantity: 200,
    subTotal: 2000
  }
]

const data = [
  {
    brand: 'Nike',
    date: '2024-01-01',
    id: 1,
    provider: 'Training Corp',
    sale: 25000,
    totalAmount: 2500,
    type: 'Rebate de comisión',
    details: nestedTableData
  },
  {
    brand: 'Adidas',
    date: '2024-01-02',
    id: 2,
    provider: 'Sports Inc',
    sale: 35000,
    totalAmount: 3500,
    type: 'Rebate por volumen',
    details: nestedTableData
  },
  {
    brand: 'Puma',
    date: '2024-01-03',
    id: 3,
    provider: 'Athletic Goods',
    sale: 45000,
    totalAmount: 4500,
    type: 'Rebate promocional',
    details: nestedTableData
  }
]

/**
 * Table container.
 */
export const TableContainer = (): JSX.Element => {
  // Estado para controlar qué filas están expandidas
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  // Función para manejar la expansión/colapso de filas
  const toggleRow = (id: number) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    )
  }

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-hidden">
      <div className="flex w-full items-center gap-2">
        <span className="cursor-pointer text-sm text-link underline-offset-4 hover:underline hover:disabled:no-underline">
          Exportar todos los datos
        </span>

        <Download className="h-4 w-4 text-link" />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]" />
            <TableHead>Proveedor</TableHead>
            <TableHead>Marca</TableHead>
            <TableHead>Tipo rebate</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Venta</TableHead>
            <TableHead>Aporte total</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(item => (
            <>
              <TableRow className="cursor-pointer hover:bg-gray-50" key={item.id}>
                <TableCell>
                  <Button onClick={() => toggleRow(item.id)} size="sm" variant="text">
                    {expandedRows.includes(item.id) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </TableCell>
                <TableCell>{item.provider}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.sale}</TableCell>
                <TableCell>{item.totalAmount}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-6">
                    <Button
                      className="p-0 transition-transform duration-200 hover:scale-110"
                      size="md"
                      variant="link"
                    >
                      <FilePenLine className="text-primary" />
                    </Button>

                    <Button
                      className="p-0 transition-transform duration-200 hover:scale-110"
                      size="md"
                      variant="link"
                    >
                      <Download className="text-black" />
                    </Button>

                    <Button
                      className="p-0 transition-transform duration-200 hover:scale-110"
                      size="md"
                      variant="link"
                    >
                      <Trash2 className="text-error" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              {/* Tabla anidada que se muestra cuando la fila está expandida */}
              {expandedRows.includes(item.id) && (
                <TableRow>
                  <TableCell className="bg-gray-50 p-4" colSpan={8}>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Detalles</TableHead>
                          <TableHead>Cantidad</TableHead>
                          <TableHead>Subtotal</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {item.details.map(detail => (
                          <TableRow key={detail.id}>
                            <TableCell>{detail.details}</TableCell>
                            <TableCell>{detail.quantity}</TableCell>
                            <TableCell>{detail.subTotal}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink isActive>1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink>2</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink>3</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
