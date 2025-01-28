import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/shadcn.utils'

interface DropdownMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>,
    VariantProps<typeof dropdownMenuSeparatorVariants> {}

const dropdownMenuSeparatorVariants = cva('-mx-2 my-2 h-px bg-black/20')

export const DropdownMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Separator className={cn(dropdownMenuSeparatorVariants(), className)} ref={ref} {...props} />
  )
})

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
