import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@app/shared/utils/shadcn.utils'

interface DropdownMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>,
    VariantProps<typeof dropdownMenuLabelVariants> {}

const dropdownMenuLabelVariants = cva('px-2 text-sm font-medium', {
  defaultVariants: {
    inset: false
  },
  variants: {
    inset: {
      false: '',
      true: 'pl-6'
    }
  }
})

export const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuLabelProps
>(({ className, inset, ...props }, ref) => {
  const dropdownMenuLabelClass = dropdownMenuLabelVariants({
    inset
  })

  return (
    <DropdownMenuPrimitive.Label
      className={cn(dropdownMenuLabelClass, className)}
      ref={ref}
      {...props}
    />
  )
})

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName
