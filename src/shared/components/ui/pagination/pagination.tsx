import * as React from 'react'

import { cn } from '@app/shared/utils/shadcn.utils'

export const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-end', className)}
    role="navigation"
    {...props}
  />
)

Pagination.displayName = 'Pagination'
