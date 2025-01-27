import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '../utils/shadcn.utils'

interface SeparatorProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, 'orientation'>,
    VariantProps<typeof separatorVariants> {
  orientation?: 'horizontal' | 'vertical'
}

const separatorVariants = cva('shrink-0 bg-border', {
  defaultVariants: {
    orientation: 'horizontal'
  },
  variants: {
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]'
    }
  }
})

export const Separator = React.forwardRef<React.ComponentRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => {
    const separatorClass = separatorVariants({
      orientation
    })

    return (
      <SeparatorPrimitive.Root
        className={cn(separatorClass, className)}
        decorative={decorative}
        orientation={orientation}
        ref={ref}
        {...props}
      />
    )
  }
)

SeparatorPrimitive.Separator.displayName = SeparatorPrimitive.Root.displayName
