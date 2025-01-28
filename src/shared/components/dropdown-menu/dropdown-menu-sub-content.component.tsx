import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/shadcn.utils'

interface DropdownMenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>,
    VariantProps<typeof dropdownMenuSubContentVariants> {}

const dropdownMenuSubContentVariants = cva(
  'z-50 min-w-[10rem] overflow-hidden rounded-lg border bg-popover p-2 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  {
    defaultVariants: {},
    variants: {}
  }
)

export const DropdownMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownMenuSubContentProps
>(({ className, sideOffset = 4, ...props }, ref) => {
  const dropdownMenuSubContentClass = dropdownMenuSubContentVariants({})

  return (
    <DropdownMenuPrimitive.SubContent
      className={cn(dropdownMenuSubContentClass, className)}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  )
})

DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName
