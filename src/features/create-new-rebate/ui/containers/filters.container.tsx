import { JSX, useState } from 'react'
import { format } from 'date-fns'
import { CalendarIcon, FilterX } from 'lucide-react'

import {
  Button,
  Calendar,
  Input,
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
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-primary">Últimos rebates creados</h3>

        <span className="flex cursor-pointer items-center gap-2 self-center text-sm text-muted underline-offset-4 hover:underline hover:disabled:no-underline">
          <FilterX className="h-4 w-4" />
          Limpiar filtros
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="provider">Proveedor</Label>
          <Input id="provider" placeholder="Ingresa el nombre del proveedor" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="department">Departamento</Label>
          <Input id="department" placeholder="Ingresa el departamento" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="date">Fecha</Label>

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
          <Label htmlFor="typeRebate">Tipo rebate</Label>

          <Select>
            <SelectTrigger id="typeRebate">
              <SelectValue placeholder="Seleccione un tipo de rebate" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="manual">Manual</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
