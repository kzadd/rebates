import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { Size } from '@app/shared/types/theme.types'
import { cn } from '@app/shared/utils/shadcn.utils'

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  size?: Exclude<Size, 'icon'>
}

const inputVariants = cva(
  'flex w-full items-center justify-between truncate rounded-lg border border-border bg-white text-sm shadow-sm outline-none transition-colors file:rounded-lg file:border-0 file:bg-transparent file:pl-0 file:pr-2 file:text-primary placeholder:text-disabled-foreground focus-visible:border-primary disabled:cursor-not-allowed disabled:bg-disabled [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
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

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, ...props }, ref) => {
    const inputClass = inputVariants({
      size
    })

    return <input className={cn(inputClass, className)} ref={ref} {...props} />
  }
)

Input.displayName = 'Input'
