import { FC, JSX } from 'react'

import { LayoutOptions } from '@app/shared/types/layout.types'
import { cn } from '@app/shared/utils/shadcn.utils'

/**
 * Bottombar container.
 */
export const Bottombar: FC<LayoutOptions> = ({ variant }): JSX.Element => {
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
