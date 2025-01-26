import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { PaletteColor } from '../types/palette.types'
import { cn } from '../utils/shadcn.utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  color?: PaletteColor
}

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:text-disabled-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    compoundVariants: [
      { class: 'bg-black hover:bg-black/90', color: 'default', variant: 'contained' },
      { class: 'bg-error hover:bg-error/90', color: 'error', variant: 'contained' },
      { class: 'bg-primary hover:bg-primary/90', color: 'primary', variant: 'contained' },
      { class: 'bg-secondary hover:bg-secondary/90', color: 'secondary', variant: 'contained' },
      { class: 'bg-success hover:bg-success/90', color: 'success', variant: 'contained' },
      { class: 'bg-warning hover:bg-warning/90', color: 'warning', variant: 'contained' },

      { class: 'border-black text-black hover:bg-black/10', color: 'default', variant: 'outlined' },
      { class: 'border-error text-error hover:bg-error/10', color: 'error', variant: 'outlined' },
      { class: 'border-primary text-primary hover:bg-primary/10', color: 'primary', variant: 'outlined' },
      { class: 'border-secondary text-secondary hover:bg-secondary/10', color: 'secondary', variant: 'outlined' },
      { class: 'border-success text-success hover:bg-success/10', color: 'success', variant: 'outlined' },
      { class: 'border-warning text-warning hover:bg-warning/10', color: 'warning', variant: 'outlined' },

      { class: 'text-black hover:bg-black/10', color: 'default', variant: 'text' },
      { class: 'text-error hover:bg-error/10', color: 'error', variant: 'text' },
      { class: 'text-primary hover:bg-primary/10', color: 'primary', variant: 'text' },
      { class: 'text-success hover:bg-success/10', color: 'success', variant: 'text' },
      { class: 'text-warning hover:bg-warning/10', color: 'warning', variant: 'text' },
      { class: 'text-secondary hover:bg-secondary/10', color: 'secondary', variant: 'text' }
    ],
    defaultVariants: {
      color: 'primary',
      size: 'md',
      variant: 'contained'
    },
    variants: {
      color: {
        default: '',
        error: '',
        primary: '',
        secondary: '',
        success: '',
        warning: ''
      },
      size: {
        icon: 'h-10 w-10',
        lg: 'h-12 px-5',
        md: 'h-10 px-4',
        sm: 'h-8 px-3 text-xs'
      },
      variant: {
        contained: 'text-white shadow-sm disabled:border disabled:border-border disabled:bg-disabled',
        link: 'text-link underline-offset-4 hover:underline hover:disabled:no-underline',
        outlined: 'border shadow-sm disabled:border disabled:border-border disabled:bg-disabled',
        text: 'hover:shadow-sm disabled:border disabled:border-border disabled:bg-disabled'
      }
    }
  }
)

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, color, size, variant, ...props }, ref) => {
    const buttonClass = buttonVariants({
      className,
      color,
      size,
      variant
    })

    const Component = asChild ? Slot : 'button'

    return <Component className={cn(buttonClass)} ref={ref} {...props} />
  }
)

Button.displayName = 'Button'
