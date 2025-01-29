import * as React from 'react'

import { cn } from '@app/shared/utils/shadcn.utils'

export const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul className={cn('flex flex-row items-center gap-1', className)} ref={ref} {...props} />
  )
)

PaginationContent.displayName = 'PaginationContent'
