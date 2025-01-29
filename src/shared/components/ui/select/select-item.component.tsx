import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cva, VariantProps } from 'class-variance-authority'
import { Check } from 'lucide-react'

import { cn } from '../../../utils/shadcn.utils'

interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
    VariantProps<typeof selectItemVariants> {}

const selectItemVariants = cva(
  'data-[state=checked]:text-primary-foreground relative flex w-full cursor-pointer select-none items-center rounded-sm p-2 text-sm outline-none focus:bg-popover-foreground data-[disabled]:pointer-events-none data-[state=checked]:bg-primary/20 data-[state=checked]:font-medium data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
)

export const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ children, className, ...props }, ref) => {
  return (
    <SelectPrimitive.Item className={cn(selectItemVariants(), className)} ref={ref} {...props}>
      <span className="absolute right-4 flex items-center justify-center text-primary">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})

SelectItem.displayName = SelectPrimitive.Item.displayName
