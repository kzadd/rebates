import { JSX } from 'react'
import { CircleCheckBig, CircleMinus, Download, FilePen } from 'lucide-react'

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
    aporteTienda: '$2,500',
    aporteTotal: '$5,000',
    aporteWeb: '$2,500',
    brand: 'Nike',
    department: 'Deportes',
    id: 1,
    period: 'Enero 2024',
    provider: 'Sports World',
    status: 'Pendiente',
    totalSales: '$50,000',
    type: 'Rebate por volumen'
  },
  {
    aporteTienda: '$3,000',
    aporteTotal: '$7,500',
    aporteWeb: '$4,500',
    brand: 'Adidas',
    department: 'Calzado',
    id: 2,
    period: 'Febrero 2024',
    provider: 'Athletic Hub',
    status: 'Pendiente',
    totalSales: '$75,000',
    type: 'Rebate de comisión'
  },
  {
    aporteTienda: '$4,000',
    aporteTotal: '$10,000',
    aporteWeb: '$6,000',
    brand: 'Puma',
    department: 'Ropa',
    id: 3,
    period: 'Marzo 2024',
    provider: 'Global Sports',
    status: 'Pendiente',
    totalSales: '$100,000',
    type: 'Rebate por temporada'
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
            <TableHead>Periodo</TableHead>
            <TableHead>Departamento</TableHead>
            <TableHead>Proveedor</TableHead>
            <TableHead>Marca</TableHead>
            <TableHead>Tipo rebate</TableHead>
            <TableHead>Venta total</TableHead>
            <TableHead>Aporte total</TableHead>
            <TableHead>Aporte internet</TableHead>
            <TableHead>Aporte tienda</TableHead>
            <TableHead>status</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.period}</TableCell>
              <TableCell>{item.department}</TableCell>
              <TableCell>{item.provider}</TableCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.totalSales}</TableCell>
              <TableCell>{item.aporteTotal}</TableCell>
              <TableCell>{item.aporteWeb}</TableCell>
              <TableCell>{item.aporteTienda}</TableCell>
              <TableCell>{item.status}</TableCell>

              <TableCell>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col ">
                    <Button className="h-8 justify-start p-0 text-black" size="md" variant="link">
                      <CircleCheckBig className="text-success" />
                      Aprobar
                    </Button>

                    <Button className="h-8 justify-start p-0 text-black" size="md" variant="link">
                      <CircleMinus className="text-error" />
                      Rechazar
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="text">
                      <FilePen className="text-primary" />
                    </Button>

                    <Button size="icon" variant="text">
                      <Download className="text-black" />
                    </Button>
                  </div>
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
