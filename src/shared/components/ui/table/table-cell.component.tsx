import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@app/shared/utils/shadcn.utils'

interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableCellVariants> {}

const tableCellVariants = cva('px-6 py-3 align-middle ')

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => {
    return <td className={cn(tableCellVariants(), className)} ref={ref} {...props} />
  }
)

TableCell.displayName = 'TableCell'
