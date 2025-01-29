import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@app/shared/utils/shadcn.utils'

interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {}

const tableRowVariants = cva('border-b transition-colors')

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => {
    return <tr className={cn(tableRowVariants(), className)} ref={ref} {...props} />
  }
)
TableRow.displayName = 'TableRow'
