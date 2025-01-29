import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@app/shared/utils/shadcn.utils'

interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableHeadVariants> {}

const tableHeadVariants = cva(
  'h-14 bg-disabled-foreground/30 px-6 py-3 text-left align-middle font-semibold'
)

export const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => {
    return <th className={cn(tableHeadVariants(), className)} ref={ref} {...props} />
  }
)

TableHead.displayName = 'TableHead'
