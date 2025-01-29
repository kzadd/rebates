import * as React from 'react'
import { MoreHorizontal } from 'lucide-react'

import { cn } from '@app/shared/utils/shadcn.utils'

export const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-10 w-10 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)

PaginationEllipsis.displayName = 'PaginationEllipsis'
