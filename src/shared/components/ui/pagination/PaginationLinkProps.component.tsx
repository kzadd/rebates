import * as React from 'react'

import { cn } from '@app/shared/utils/shadcn.utils'
import { ButtonProps, buttonVariants } from '../button.component'

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>

export const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        size,
        variant: isActive ? 'contained' : 'text'
      }),
      className
    )}
    {...props}
  />
)

PaginationLink.displayName = 'PaginationLink'
