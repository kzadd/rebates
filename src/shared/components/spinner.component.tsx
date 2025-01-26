import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'

import { PaletteColor } from '../types/palette.types'
import { cn } from '../utils/shadcn.utils'

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spinnerVariants> {
  color?: PaletteColor
}

const spinnerVariants = cva('flex animate-spin items-center justify-center', {
  defaultVariants: {
    color: 'primary',
    size: 'md'
  },
  variants: {
    color: {
      default: 'text-black',
      error: 'text-error',
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      warning: 'text-warning'
    },
    size: {
      lg: 'h-10 w-10',
      md: 'h-8 w-8',
      sm: 'h-6 w-6'
    }
  }
})

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(({ className, color, size, ...props }, ref) => {
  const spinnerClass = spinnerVariants({
    color,
    size
  })

  return (
    <div className={cn(spinnerClass, className)} ref={ref} {...props}>
      <LoaderCircle className="h-full w-full" />
    </div>
  )
})

Spinner.displayName = 'Spinner'
