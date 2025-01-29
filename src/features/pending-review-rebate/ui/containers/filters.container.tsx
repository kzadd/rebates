import { JSX, useState } from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import {
  Button,
  Calendar,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@app/shared/components'
import { cn } from '@app/shared/utils/shadcn.utils'

/**
 * Filters container.
 */
export const FiltersContainer = (): JSX.Element => {
  const [date, setDate] = useState<Date>()
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-semibold text-primary">Filtros de búsqueda</h3>

      <div className="grid grid-cols-1 gap-4 rounded-lg border border-border bg-white p-6 shadow-sm hover:border-primary md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="department">Departamento</Label>

          <Select>
            <SelectTrigger id="department">
              <SelectValue placeholder="Seleccione un departamento" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="option-1">Option 1</SelectItem>
              <SelectItem value="option-2">Option 2</SelectItem>
              <SelectItem value="option-3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="provider">Proveedor</Label>

          <Select>
            <SelectTrigger id="provider">
              <SelectValue placeholder="Seleccione un proveedor" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="option-1">Option 1</SelectItem>
              <SelectItem value="option-2">Option 2</SelectItem>
              <SelectItem value="option-3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="brand">Marca</Label>

          <Select>
            <SelectTrigger id="brand">
              <SelectValue placeholder="Seleccione una marca" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="option-1">Option 1</SelectItem>
              <SelectItem value="option-2">Option 2</SelectItem>
              <SelectItem value="option-3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="period">Periodo</Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(
                  'justify-start border bg-white text-sm shadow-sm outline-none transition-colors hover:bg-white data-[state=open]:border-primary text-black',
                  !date && 'text-disabled-foreground'
                )}
              >
                <CalendarIcon />
                {date ? format(date, 'dd/MM/yyyy') : <span>Ingresa la fecha</span>}
              </Button>
            </PopoverTrigger>

            <PopoverContent align="start" className="w-auto p-0">
              <Calendar initialFocus mode="single" onSelect={setDate} selected={date} />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="type">Tipo rebate</Label>

          <Select>
            <SelectTrigger id="type">
              <SelectValue placeholder="Seleccione un tipo de rebate" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="option-1">Option 1</SelectItem>
              <SelectItem value="option-2">Option 2</SelectItem>
              <SelectItem value="option-3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="mt-6 self-center">Filtrar resultados</Button>
      </div>
    </div>
  )
}
