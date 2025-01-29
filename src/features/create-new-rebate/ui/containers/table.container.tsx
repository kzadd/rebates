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

export const data = [
  {
    date: '2024-01-01',
    department: 'Recursos Humanos',
    id: 1,
    provider: 'Training Corp',
    responsible: 'Juan Pérez',
    totalAmount: 2500,
    type: 'Rebate de comisión'
  },
  {
    date: '2024-01-15',
    department: 'Marketing',
    id: 2,
    provider: 'Media Solutions',
    responsible: 'Ana García',
    totalAmount: 3200,
    type: 'Rebate por volumen'
  },
  {
    date: '2024-02-01',
    department: 'Tecnología',
    id: 3,
    provider: 'Tech Services',
    responsible: 'Carlos Rodríguez',
    totalAmount: 1800,
    type: 'Rebate de comisión'
  },
  {
    date: '2024-02-15',
    department: 'Ventas',
    id: 4,
    provider: 'Sales Pro',
    responsible: 'María López',
    totalAmount: 4200,
    type: 'Rebate por objetivo'
  },
  {
    date: '2024-03-01',
    department: 'Operaciones',
    id: 5,
    provider: 'Operations Plus',
    responsible: 'Pedro Sánchez',
    totalAmount: 2900,
    type: 'Rebate por volumen'
  },
  {
    date: '2024-03-15',
    department: 'Finanzas',
    id: 6,
    provider: 'Finance Group',
    responsible: 'Laura Martínez',
    totalAmount: 3500,
    type: 'Rebate de comisión'
  },
  {
    date: '2024-04-01',
    department: 'Logística',
    id: 7,
    provider: 'Logistics Pro',
    responsible: 'Roberto Díaz',
    totalAmount: 2800,
    type: 'Rebate por volumen'
  },
  {
    date: '2024-04-15',
    department: 'Compras',
    id: 8,
    provider: 'Supply Chain Solutions',
    responsible: 'Carmen Torres',
    totalAmount: 3900,
    type: 'Rebate por objetivo'
  },
  {
    date: '2024-05-01',
    department: 'Calidad',
    id: 9,
    provider: 'Quality Systems',
    responsible: 'Diego Morales',
    totalAmount: 2100,
    type: 'Rebate de comisión'
  },
  {
    date: '2024-05-15',
    department: 'Marketing',
    id: 10,
    provider: 'Digital Marketing Co',
    responsible: 'Sofia Ruiz',
    totalAmount: 4500,
    type: 'Rebate por volumen'
  },
  {
    date: '2024-06-01',
    department: 'Recursos Humanos',
    id: 11,
    provider: 'HR Solutions',
    responsible: 'Javier Flores',
    totalAmount: 3300,
    type: 'Rebate por objetivo'
  },
  {
    date: '2024-06-15',
    department: 'Tecnología',
    id: 12,
    provider: 'IT Services Plus',
    responsible: 'Patricia Vega',
    totalAmount: 2700,
    type: 'Rebate de comisión'
  },
  {
    date: '2024-07-01',
    department: 'Ventas',
    id: 13,
    provider: 'Sales Excellence',
    responsible: 'Ricardo Luna',
    totalAmount: 4100,
    type: 'Rebate por volumen'
  },
  {
    date: '2024-07-15',
    department: 'Operaciones',
    id: 14,
    provider: 'Ops Management',
    responsible: 'Isabel Castro',
    totalAmount: 3600,
    type: 'Rebate por objetivo'
  },
  {
    date: '2024-08-01',
    department: 'Finanzas',
    id: 15,
    provider: 'Financial Services Corp',
    responsible: 'Miguel Ángel Soto',
    totalAmount: 2900,
    type: 'Rebate de comisión'
  }
]

/**
 * Table container.
 */
export const TableContainer = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[160px]">Fecha creación</TableHead>
            <TableHead className="min-w-[190px]">Tipo rebate</TableHead>
            <TableHead className="min-w-[190px]">Proveedor</TableHead>
            <TableHead className="min-w-[190px]">Departamento</TableHead>
            <TableHead className="min-w-[150px]">Aporte total</TableHead>
            <TableHead className="min-w-[150px]">Responsable</TableHead>
            <TableHead className="min-w-[150px]">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell className="min-w-[160px]">{item.date}</TableCell>
              <TableCell className="min-w-[190px]">{item.type}</TableCell>
              <TableCell className="min-w-[190px]">{item.provider}</TableCell>
              <TableCell className="min-w-[190px]">{item.department}</TableCell>
              <TableCell className="min-w-[150px]">{item.totalAmount}</TableCell>
              <TableCell className="min-w-[150px]">{item.responsible}</TableCell>

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
