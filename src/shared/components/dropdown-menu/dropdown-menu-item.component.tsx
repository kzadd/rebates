import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/shadcn.utils'

interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof dropdownMenuItemVariants> {
  inset?: boolean
}

const dropdownMenuItemVariants = cva(
  'relative flex cursor-default select-none items-center gap-2 rounded-sm p-2 text-sm outline-none transition-colors focus:bg-primary/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    defaultVariants: {
      inset: false
    },
    variants: {
      inset: {
        false: '',
        true: 'pl-4'
      }
    }
  }
)

export const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, inset, ...props }, ref) => {
  const dropdownMenuItemClass = dropdownMenuItemVariants({
    inset
  })

  return <DropdownMenuPrimitive.Item className={cn(dropdownMenuItemClass, className)} ref={ref} {...props} />
})

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
