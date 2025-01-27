import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../utils/shadcn.utils'

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

const labelVariants = cva('text-[10px] font-semibold uppercase tracking-wider', {
  defaultVariants: {},
  variants: {}
})

export const Label = React.forwardRef<React.ComponentRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, ...props }, ref) => {
    const labelClass = labelVariants()

    return <LabelPrimitive.Root className={cn(labelClass, className)} ref={ref} {...props} />
  }
)

LabelPrimitive.Label.displayName = LabelPrimitive.Root.displayName
