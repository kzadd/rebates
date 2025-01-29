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
  }
]

/**
 * Table container.
 */
export const TableContainer = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <Table className=" ">
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
