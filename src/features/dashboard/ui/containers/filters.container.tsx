import { JSX } from 'react'

import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@app/shared/components'

/**
 * Filters container.
 */
export const FiltersContainer = (): JSX.Element => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[repeat(2,300px)]">
      <div className="flex flex-col gap-2">
        <Label htmlFor="department">Filtrar por departamento</Label>

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
        <Label htmlFor="filter">Filtrar por mes</Label>

        <Select>
          <SelectTrigger id="filter">
            <SelectValue placeholder="Seleccione un filtro" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="option-1">Option 1</SelectItem>
            <SelectItem value="option-2">Option 2</SelectItem>
            <SelectItem value="option-3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
