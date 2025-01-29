import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@app/shared/utils/shadcn.utils'

interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableHeaderVariants> {}

const tableHeaderVariants = cva('[&_tr]:border-b')

export const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => {
    return <thead className={cn(tableHeaderVariants(), className)} ref={ref} {...props} />
  }
)

TableHeader.displayName = 'TableHeader'
