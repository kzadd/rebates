import { JSX } from 'react'
import { useState } from 'react'

import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@app/shared/components'

interface Department {
  label: string
  value: string
}

interface Filter {
  label: string
  value: string
}

const departments: Department[] = [
  { label: 'Todos los departamentos', value: 'all' },
  { label: 'Ventas', value: 'sales' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Operaciones', value: 'operations' }
]

const filters: Filter[] = [
  { label: 'Últimos 13 meses', value: 'last-13-months' },
  { label: 'Últimos 6 meses', value: 'last-6-months' },
  { label: 'Últimos 3 meses', value: 'last-3-months' },
  { label: 'Mes actual', value: 'current-month' }
]

/**
 * Filters container.
 */
export const FiltersContainer = (): JSX.Element => {
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedFilter, setSelectedFilter] = useState('current-month')

  const handleDepartmentChange = (value: string): void => setSelectedDepartment(value)
  const handleFilterChange = (value: string): void => setSelectedFilter(value)

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col gap-2">
        <Label htmlFor="department">Filtrar por departamento</Label>

        <Select onValueChange={handleDepartmentChange} value={selectedDepartment}>
          <SelectTrigger id="department">
            <SelectValue placeholder="Seleccione un departamento" />
          </SelectTrigger>

          <SelectContent>
            {departments.map(department => (
              <SelectItem key={department.value} value={department.value}>
                {department.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="filter">Filtrar por mes</Label>

        <Select onValueChange={handleFilterChange} value={selectedFilter}>
          <SelectTrigger id="filter">
            <SelectValue placeholder="Seleccione un filtro" />
          </SelectTrigger>

          <SelectContent>
            {filters.map(filter => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
