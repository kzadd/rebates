import { JSX } from 'react'
import { PencilLine } from 'lucide-react'

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
    amount: 2500,
    department: 'Recursos Humanos',
    id: 1,
    month: 'Enero',
    provider: 'Training Corp'
  },
  {
    amount: 1800,
    department: 'Marketing',
    id: 2,
    month: 'Febrero',
    provider: 'Media Solutions'
  },
  {
    amount: 3200,
    department: 'Tecnología',
    id: 3,
    month: 'Marzo',
    provider: 'Tech Services'
  },
  {
    amount: 1500,
    department: 'Ventas',
    id: 4,
    month: 'Abril',
    provider: 'Print & Design'
  },
  {
    amount: 2800,
    department: 'Operaciones',
    id: 5,
    month: 'Mayo',
    provider: 'Maintenance Pro'
  },
  {
    amount: 3100,
    department: 'Finanzas',
    id: 6,
    month: 'Junio',
    provider: 'Financial Plus'
  },
  {
    amount: 2700,
    department: 'Recursos Humanos',
    id: 7,
    month: 'Julio',
    provider: 'HR Solutions'
  },
  {
    amount: 3400,
    department: 'Marketing',
    id: 8,
    month: 'Agosto',
    provider: 'Digital Marketing Co'
  },
  {
    amount: 2900,
    department: 'Tecnología',
    id: 9,
    month: 'Septiembre',
    provider: 'IT Services Pro'
  },
  {
    amount: 3600,
    department: 'Ventas',
    id: 10,
    month: 'Octubre',
    provider: 'Sales Solutions'
  },
  {
    amount: 2400,
    department: 'Operaciones',
    id: 11,
    month: 'Noviembre',
    provider: 'Operations Elite'
  },
  {
    amount: 3300,
    department: 'Finanzas',
    id: 12,
    month: 'Diciembre',
    provider: 'Finance Corp'
  },
  {
    amount: 2600,
    department: 'Recursos Humanos',
    id: 13,
    month: 'Enero',
    provider: 'Talent Solutions'
  },
  {
    amount: 3000,
    department: 'Marketing',
    id: 14,
    month: 'Febrero',
    provider: 'Brand Masters'
  },
  {
    amount: 2800,
    department: 'Tecnología',
    id: 15,
    month: 'Marzo',
    provider: 'Tech Innovators'
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
            <TableHead>Mes</TableHead>
            <TableHead>Departamento</TableHead>
            <TableHead>Proveedor</TableHead>
            <TableHead>Aporte</TableHead>
            <TableHead>Detalle</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.month}</TableCell>
              <TableCell>{item.department}</TableCell>
              <TableCell>{item.provider}</TableCell>
              <TableCell>{item.amount}</TableCell>

              <TableCell>
                <Button className="p-0" size="md" variant="link">
                  <PencilLine />
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
