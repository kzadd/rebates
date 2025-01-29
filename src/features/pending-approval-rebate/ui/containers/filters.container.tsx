import { JSX, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

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
  SelectValue,
  Separator,
  Switch
} from '@app/shared/components'
import { cn } from '@app/shared/utils/shadcn.utils'

/**
 * Filters container.
 */
export const FiltersContainer = (): JSX.Element => {
  const [date, setDate] = useState<Date>()

  const [rangeDate, setRangeDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined
  })

  return (
    <div className="flex flex-col gap-6">
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

      <Separator className="my-4" />

      <h3 className="font-semibold text-primary">Filtros de búsqueda</h3>

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
        <Label htmlFor="date">Rango de fecha</Label>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              className={cn(
                'justify-start border bg-white text-sm shadow-sm outline-none transition-colors hover:bg-white data-[state=open]:border-primary text-black',
                !rangeDate?.from && !rangeDate?.to && 'text-disabled-foreground'
              )}
            >
              <CalendarIcon />
              {rangeDate?.from ? (
                rangeDate.to ? (
                  <>
                    {format(rangeDate.from, 'dd/MM/yyyy')} - {format(rangeDate.to, 'dd/MM/yyyy')}
                  </>
                ) : (
                  format(rangeDate.from, 'dd/MM/yyyy')
                )
              ) : (
                <span>Ingresa la fecha</span>
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent align="start" className="w-auto p-0">
            <Calendar
              defaultMonth={rangeDate?.from}
              initialFocus
              mode="range"
              numberOfMonths={2}
              onSelect={setRangeDate}
              selected={rangeDate}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="totalAmount">Aporte</Label>
        <Input id="totalAmount" placeholder="Ingresa el valor" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="responsible">Responsable</Label>
        <Input id="responsible" placeholder="Ingresa el responsable" />
      </div>

      <div className="flex items-center gap-2">
        <Switch id="showOnlyUnreviewed" />
        <Label htmlFor="showOnlyUnreviewed">Mostrar solo no revisadas</Label>
      </div>
    </div>
  )
}
