import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@app/shared/utils/shadcn.utils'

interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableHeadVariants> {}

const tableHeadVariants = cva(
  'h-10 px-2 text-left align-middle font-medium text-muted [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]'
)

export const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => {
    return <th className={cn(tableHeadVariants(), className)} ref={ref} {...props} />
  }
)

TableHead.displayName = 'TableHead'
