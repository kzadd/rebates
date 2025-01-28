import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cva, VariantProps } from 'class-variance-authority'
import { ChevronRight } from 'lucide-react'

import { cn } from '../../utils/shadcn.utils'

interface DropdownMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>,
    VariantProps<typeof dropdownMenuSubTriggerVariants> {
  inset?: boolean
}

const dropdownMenuSubTriggerVariants = cva(
  'flex cursor-default select-none items-center gap-2 rounded-sm p-2 text-sm outline-none focus:bg-primary/10 data-[state=open]:bg-primary/20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
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

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ children, className, inset, ...props }, ref) => {
  const dropdownMenuSubTriggerClass = dropdownMenuSubTriggerVariants({
    inset
  })

  return (
    <DropdownMenuPrimitive.SubTrigger className={cn(dropdownMenuSubTriggerClass, className)} ref={ref} {...props}>
      {children}
      <ChevronRight className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  )
})

DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName
