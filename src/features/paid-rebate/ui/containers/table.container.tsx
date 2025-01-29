import { JSX } from 'react'
import { Download, Eye } from 'lucide-react'

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
    brand: 'Nike',
    department: 'Deportes',
    id: 1,
    period: 'Enero 2024',
    provider: 'Sports World',
    totalAmount: 2500,
    type: 'Rebate por volumen'
  },
  {
    brand: 'Adidas',
    department: 'Deportes',
    id: 2,
    period: 'Enero 2024',
    provider: 'Athletic Hub',
    totalAmount: 3200,
    type: 'Rebate de comisión'
  },
  {
    brand: 'Puma',
    department: 'Calzado',
    id: 3,
    period: 'Febrero 2024',
    provider: 'Global Sports',
    totalAmount: 1800,
    type: 'Rebate por objetivo'
  },
  {
    brand: 'Under Armour',
    department: 'Deportes',
    id: 4,
    period: 'Febrero 2024',
    provider: 'Pro Athletics',
    totalAmount: 4200,
    type: 'Rebate por volumen'
  },
  {
    brand: 'New Balance',
    department: 'Calzado',
    id: 5,
    period: 'Marzo 2024',
    provider: 'Sports Unlimited',
    totalAmount: 2900,
    type: 'Rebate de comisión'
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
            <TableHead className="min-w-[150px]">Departamento</TableHead>
            <TableHead className="min-w-[150px]">Aporte</TableHead>
            <TableHead className="min-w-[150px]">Detalles</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell className="min-w-[160px]">{item.type}</TableCell>
              <TableCell className="min-w-[190px]">{item.period}</TableCell>
              <TableCell className="min-w-[190px]">{item.provider}</TableCell>
              <TableCell className="min-w-[190px]">{item.brand}</TableCell>
              <TableCell className="min-w-[150px]">{item.department}</TableCell>
              <TableCell className="min-w-[150px]">{item.totalAmount}</TableCell>

              <TableCell className="min-w-[150px]">
                <Button className="p-0" size="md" variant="link">
                  <Eye />
                  Revisar detalle
                </Button>
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
