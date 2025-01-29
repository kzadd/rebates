import * as React from 'react'
import { ChevronsLeft } from 'lucide-react'

import { cn } from '@app/shared/utils/shadcn.utils'
import { PaginationLink } from './PaginationLinkProps.component'

export const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink className={cn('', className)} size="icon" {...props}>
    <ChevronsLeft className="h-4 w-4" />
  </PaginationLink>
)

PaginationPrevious.displayName = 'PaginationPrevious'
