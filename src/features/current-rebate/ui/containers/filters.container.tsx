import { JSX, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'
import { CalendarIcon, FilterX } from 'lucide-react'

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
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-primary">Filtros de búsqueda</h3>

        <span className="flex cursor-pointer items-center gap-2 self-center text-sm text-muted underline-offset-4 hover:underline hover:disabled:no-underline">
          <FilterX className="h-4 w-4" />
          Limpiar filtros
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          <Label htmlFor="date">Rango de fecha</Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(
                  'justify-start border bg-white text-sm shadow-sm outline-none transition-colors hover:bg-white data-[state=open]:border-primary text-black',
                  !date?.from && !date?.to && 'text-disabled-foreground'
                )}
              >
                <CalendarIcon />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, 'dd/MM/yyyy')} - {format(date.to, 'dd/MM/yyyy')}
                    </>
                  ) : (
                    format(date.from, 'dd/MM/yyyy')
                  )
                ) : (
                  <span>Ingresa la fecha</span>
                )}
              </Button>
            </PopoverTrigger>

            <PopoverContent align="start" className="w-auto p-0">
              <Calendar
                defaultMonth={date?.from}
                initialFocus
                mode="range"
                numberOfMonths={2}
                onSelect={setDate}
                selected={date}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="sortBy">Ordenar por</Label>

          <Select>
            <SelectTrigger id="sortBy">
              <SelectValue placeholder="Seleccione un orden" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="option-1">Option 1</SelectItem>
              <SelectItem value="option-2">Option 2</SelectItem>
              <SelectItem value="option-3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
