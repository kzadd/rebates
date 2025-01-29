import React from 'react'

import { cn } from '@app/shared/utils/shadcn.utils'

export const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => (
    <li
      className={cn(
        'bg-white hover:has-[>a]:bg-transparent rounded-lg [&>span]:bg-transparent has-[>span]:bg-transparent',
        className
      )}
      ref={ref}
      {...props}
    />
  )
)

PaginationItem.displayName = 'PaginationItem'
