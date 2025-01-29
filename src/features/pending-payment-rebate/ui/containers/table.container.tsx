import { JSX } from 'react'
import { Bell, CloudUpload, Download, Eye } from 'lucide-react'

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

const data = [
  {
    brand: 'Marca A',
    id: 1,
    paymentDate: '15/01/2024',
    period: 'Enero 2024',
    provider: 'Proveedor 1',
    responsible: 'Juan Pérez',
    totalAmount: '$5,000',
    type: 'Rebate Tipo A'
  },
  {
    brand: 'Marca B',
    id: 2,
    paymentDate: '20/02/2024',
    period: 'Febrero 2024',
    provider: 'Proveedor 2',
    responsible: 'María García',
    totalAmount: '$7,500',
    type: 'Rebate Tipo B'
  },
  {
    brand: 'Marca C',
    id: 3,
    paymentDate: '10/03/2024',
    period: 'Marzo 2024',
    provider: 'Proveedor 3',
    responsible: 'Carlos López',
    totalAmount: '$10,000',
    type: 'Rebate Tipo C'
  },
  {
    brand: 'Marca D',
    id: 4,
    paymentDate: '05/04/2024',
    period: 'Abril 2024',
    provider: 'Proveedor 4',
    responsible: 'Ana Martínez',
    totalAmount: '$8,200',
    type: 'Rebate Tipo A'
  },
  {
    brand: 'Marca E',
    id: 5,
    paymentDate: '12/05/2024',
    period: 'Mayo 2024',
    provider: 'Proveedor 5',
    responsible: 'Pedro Sánchez',
    totalAmount: '$6,300',
    type: 'Rebate Tipo B'
  },
  {
    brand: 'Marca F',
    id: 6,
    paymentDate: '18/06/2024',
    period: 'Junio 2024',
    provider: 'Proveedor 6',
    responsible: 'Laura Torres',
    totalAmount: '$9,100',
    type: 'Rebate Tipo C'
  },
  {
    brand: 'Marca G',
    id: 7,
    paymentDate: '22/07/2024',
    period: 'Julio 2024',
    provider: 'Proveedor 7',
    responsible: 'Diego Ruiz',
    totalAmount: '$11,500',
    type: 'Rebate Tipo A'
  },
  {
    brand: 'Marca H',
    id: 8,
    paymentDate: '30/08/2024',
    period: 'Agosto 2024',
    provider: 'Proveedor 8',
    responsible: 'Carmen Flores',
    totalAmount: '$4,800',
    type: 'Rebate Tipo B'
  }
]

/**
 * Table container.
 */
export const TableContainer = (): JSX.Element => {
  return (
    <div className="flex flex-1 flex-col gap-4 overflow-hidden">
      <div className="flex w-full items-center justify-end gap-2">
        <span className="cursor-pointer text-sm text-link underline-offset-4 hover:underline hover:disabled:no-underline">
          Exportar todos los datos
        </span>

        <Download className="h-4 w-4 text-link" />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[160px]">Tipo rebate</TableHead>
            <TableHead className="min-w-[190px]">Periodo</TableHead>
            <TableHead className="min-w-[190px]">Proveedor</TableHead>
            <TableHead className="min-w-[190px]">Marca</TableHead>
            <TableHead className="min-w-[150px]">Aporte total</TableHead>
            <TableHead className="min-w-[150px]">Fecha pago</TableHead>
            <TableHead className="min-w-[150px]">Responsable cobro</TableHead>
            <TableHead className="min-w-[150px]">Notificar</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell className="min-w-[160px]">{item.type}</TableCell>
              <TableCell className="min-w-[190px]">{item.period}</TableCell>
              <TableCell className="min-w-[190px]">{item.provider}</TableCell>
              <TableCell className="min-w-[190px]">{item.brand}</TableCell>
              <TableCell className="min-w-[150px]">{item.totalAmount}</TableCell>
              <TableCell className="min-w-[150px]">{item.paymentDate}</TableCell>
              <TableCell className="min-w-[150px]">{item.responsible}</TableCell>

              <TableCell className="min-w-[150px]">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col ">
                    <Button className="h-8 p-0 text-secondary" size="md" variant="link">
                      <Eye />
                      Descargar detalle
                    </Button>

                    <Button className="h-8 p-0 text-primary" size="md" variant="link">
                      <CloudUpload />
                      Subir documento
                    </Button>
                  </div>

                  <Button size="icon" variant="text">
                    <Bell className="text-black" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
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
