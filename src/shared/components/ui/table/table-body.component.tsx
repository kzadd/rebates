import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@app/shared/utils/shadcn.utils'

interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableBodyVariants> {}

const tableBodyVariants = cva('[&_tr:last-child]:border-0')

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => {
    return <tbody className={cn(tableBodyVariants(), className)} ref={ref} {...props} />
  }
)

TableBody.displayName = 'TableBody'
