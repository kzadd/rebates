import { JSX } from 'react'

import { cn } from '@app/shared/utils/shadcn.utils'

interface BottombarProps {
  variant: 'auth' | 'default'
}

/**
 * Bottombar container.
 */
export const Bottombar = ({ variant }: BottombarProps): JSX.Element => {
  return (
    <footer
      className={cn(
        variant === 'auth' &&
          'flex min-h-bottombar items-center justify-center bg-black p-4 text-center',
        variant === 'default' &&
          'min-h-[calc(var(--bottombar-height)-16px)] bg-disabled-foreground/30'
      )}
    >
      {variant === 'auth' && (
        <div className="text-xs text-white">
          Comercial ECCSA S.A., Rut N° 83.382.700-6. Todos los derechos reservados. 2025
        </div>
      )}
    </footer>
  )
}
