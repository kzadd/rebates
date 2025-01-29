import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@app/shared/utils/shadcn.utils'

interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {}

const tableVariants = cva('w-full caption-bottom text-sm')

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative w-full overflow-auto">
        <table className={cn(tableVariants(), className)} ref={ref} {...props} />
      </div>
    )
  }
)

Table.displayName = 'Table'
