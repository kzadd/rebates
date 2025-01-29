import { JSX } from 'react'
import { Download } from 'lucide-react'

import {
  Button,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Switch,
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
    documents: 3,
    id: 1,
    period: 'Enero 2024',
    provider: 'Sports World',
    responsible: 'Juan Pérez',
    totalAmount: 2500,
    type: 'Rebate por volumen'
  },
  {
    brand: 'Adidas',
    documents: 2,
    id: 2,
    period: 'Enero 2024',
    provider: 'Athletic Hub',
    responsible: 'Ana García',
    totalAmount: 3200,
    type: 'Rebate de comisión'
  },
  {
    brand: 'Puma',
    documents: 4,
    id: 3,
    period: 'Febrero 2024',
    provider: 'Global Sports',
    responsible: 'Carlos Rodríguez',
    totalAmount: 1800,
    type: 'Rebate por objetivo'
  },
  {
    brand: 'Under Armour',
    documents: 2,
    id: 4,
    period: 'Febrero 2024',
    provider: 'Pro Athletics',
    responsible: 'María López',
    totalAmount: 4200,
    type: 'Rebate por volumen'
  },
  {
    brand: 'New Balance',
    documents: 3,
    id: 5,
    period: 'Marzo 2024',
    provider: 'Sports Unlimited',
    responsible: 'Pedro Sánchez',
    totalAmount: 2900,
    type: 'Rebate de comisión'
  },
  {
    brand: 'Reebok',
    documents: 3,
    id: 6,
    period: 'Marzo 2024',
    provider: 'Athletic Zone',
    responsible: 'Laura Martínez',
    totalAmount: 3500,
    type: 'Rebate por volumen'
  },
  {
    brand: 'Nike',
    documents: 4,
    id: 7,
    period: 'Abril 2024',
    provider: 'Sports Elite',
    responsible: 'Roberto Díaz',
    totalAmount: 2800,
    type: 'Rebate por objetivo'
  },
  {
    brand: 'Adidas',
    documents: 2,
    id: 8,
    period: 'Abril 2024',
    provider: 'Pro Sports',
    responsible: 'Carmen Torres',
    totalAmount: 3100,
    type: 'Rebate de comisión'
  },
  {
    brand: 'Puma',
    documents: 3,
    id: 9,
    period: 'Mayo 2024',
    provider: 'Global Athletics',
    responsible: 'Daniel Ruiz',
    totalAmount: 3800,
    type: 'Rebate por volumen'
  },
  {
    brand: 'Under Armour',
    documents: 4,
    id: 10,
    period: 'Mayo 2024',
    provider: 'Sports Masters',
    responsible: 'Sofia Vargas',
    totalAmount: 4500,
    type: 'Rebate por objetivo'
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
            <TableHead className="min-w-[150px]">Responsable</TableHead>
            <TableHead className="min-w-[150px]">Documentos</TableHead>
            <TableHead className="min-w-[150px]">Marcar como revisada</TableHead>
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
              <TableCell className="min-w-[150px]">{item.responsible}</TableCell>

              <TableCell className="min-w-[150px]">
                <Button className="p-0" size="md" variant="link">
                  <Download />
                  Descargar
                </Button>
              </TableCell>

              <TableCell className="min-w-[150px]">
                <Switch />
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
