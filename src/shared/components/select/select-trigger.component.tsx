import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cva, VariantProps } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'

import { cn } from '../../utils/shadcn.utils'

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {}

const selectTriggerVariants = cva(
  'flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-white text-sm shadow-sm outline-none transition-colors placeholder:text-disabled-foreground disabled:cursor-not-allowed disabled:bg-disabled data-[state=open]:border-primary [&>span]:line-clamp-1',
  {
    defaultVariants: {
      size: 'lg'
    },
    variants: {
      size: {
        lg: 'h-12 px-5 file:h-12',
        md: 'h-10 px-4 file:h-10',
        sm: 'h-8 px-3 text-xs file:h-8'
      }
    }
  }
)

export const SelectTrigger = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
  ({ children, className, size, ...props }, ref) => {
    const selectTriggerClass = selectTriggerVariants({
      size
    })

    return (
      <SelectPrimitive.Trigger className={cn(selectTriggerClass, className)} ref={ref} {...props}>
        {children}

        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    )
  }
)

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName
