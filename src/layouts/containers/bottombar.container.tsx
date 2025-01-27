import { JSX } from 'react'

import { LayoutOptions } from '@app/shared/types/layout.types'
import { cn } from '@app/shared/utils/shadcn.utils'

/**
 * Bottombar Container.
 */
export const Bottombar = ({ variant }: LayoutOptions): JSX.Element => {
  return (
    <footer
      className={cn(
        variant === 'auth' && 'flex min-h-bottombar items-center justify-center gap-4 bg-black p-4 text-center md:px-8',
        variant === 'default' && 'min-h-[calc(var(--bottombar-height)-16px)] bg-disabled-foreground/40'
      )}
    >
      {variant === 'auth' && (
        <div className="text-[10px] text-white md:text-xs">
          Comercial ECCSA S.A., Rut N° 83.382.700-6. Todos los derechos reservados. 2025
        </div>
      )}
    </footer>
  )
}
