import { JSX } from 'react'
import { Download, FilePenLine, Trash2 } from 'lucide-react'

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
    date: '2024-01-01',
    id: 1,
    provider: 'Training Corp',
    sale: 25000,
    totalAmount: 2500,
    type: 'Rebate de comisión'
  },
  {
    brand: 'Adidas',
    date: '2024-01-15',
    id: 2,
    provider: 'Media Solutions',
    sale: 32000,
    totalAmount: 3200,
    type: 'Rebate por volumen'
  },
  {
    brand: 'Puma',
    date: '2024-02-01',
    id: 3,
    provider: 'Tech Services',
    sale: 18000,
    totalAmount: 1800,
    type: 'Rebate de comisión'
  },
  {
    brand: 'Under Armour',
    date: '2024-02-15',
    id: 4,
    provider: 'Sports Direct',
    sale: 45000,
    totalAmount: 4500,
    type: 'Rebate por volumen'
  },
  {
    brand: 'New Balance',
    date: '2024-03-01',
    id: 5,
    provider: 'Athletic Goods',
    sale: 28000,
    totalAmount: 2800,
    type: 'Rebate de comisión'
  },
  {
    brand: 'Reebok',
    date: '2024-03-15',
    id: 6,
    provider: 'Fitness Pro',
    sale: 35000,
    totalAmount: 3500,
    type: 'Rebate por volumen'
  },
  {
    brand: 'Nike',
    date: '2024-04-01',
    id: 7,
    provider: 'Sports Elite',
    sale: 42000,
    totalAmount: 4200,
    type: 'Rebate de comisión'
  },
  {
    brand: 'Adidas',
    date: '2024-04-15',
    id: 8,
    provider: 'Active Wear',
    sale: 38000,
    totalAmount: 3800,
    type: 'Rebate por volumen'
  },
  {
    brand: 'Puma',
    date: '2024-05-01',
    id: 9,
    provider: 'Global Sports',
    sale: 29000,
    totalAmount: 2900,
    type: 'Rebate de comisión'
  },
  {
    brand: 'Under Armour',
    date: '2024-05-15',
    id: 10,
    provider: 'Pro Athletics',
    sale: 33000,
    totalAmount: 3300,
    type: 'Rebate por volumen'
  },
  {
    brand: 'New Balance',
    date: '2024-06-01',
    id: 11,
    provider: 'Sports Unlimited',
    sale: 27000,
    totalAmount: 2700,
    type: 'Rebate de comisión'
  },
  {
    brand: 'Reebok',
    date: '2024-06-15',
    id: 12,
    provider: 'Athletic Zone',
    sale: 31000,
    totalAmount: 3100,
    type: 'Rebate por volumen'
  },
  {
    brand: 'Nike',
    date: '2024-07-01',
    id: 13,
    provider: 'Sports World',
    sale: 36000,
    totalAmount: 3600,
    type: 'Rebate de comisión'
  },
  {
    brand: 'Adidas',
    date: '2024-07-15',
    id: 14,
    provider: 'Fitness Gear',
    sale: 41000,
    totalAmount: 4100,
    type: 'Rebate por volumen'
  },
  {
    brand: 'Puma',
    date: '2024-08-01',
    id: 15,
    provider: 'Athletic Hub',
    sale: 39000,
    totalAmount: 3900,
    type: 'Rebate de comisión'
  }
]

/**
 * Table container.
 */
export const TableContainer = (): JSX.Element => {
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
            <TableHead className="min-w-[160px]">Proveedor</TableHead>
            <TableHead className="min-w-[190px]">Marca</TableHead>
            <TableHead className="min-w-[190px]">Tipo rebate</TableHead>
            <TableHead className="min-w-[190px]">Fecha</TableHead>
            <TableHead className="min-w-[150px]">Venta</TableHead>
            <TableHead className="min-w-[150px]">Aporte total</TableHead>
            <TableHead className="min-w-[150px]">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell className="min-w-[160px]">{item.provider}</TableCell>
              <TableCell className="min-w-[190px]">{item.brand}</TableCell>
              <TableCell className="min-w-[190px]">{item.type}</TableCell>
              <TableCell className="min-w-[190px]">{item.date}</TableCell>
              <TableCell className="min-w-[150px]">{item.sale}</TableCell>
              <TableCell className="min-w-[150px]">{item.totalAmount}</TableCell>

              <TableCell className="min-w-[150px]">
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
