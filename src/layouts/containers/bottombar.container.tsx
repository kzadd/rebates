import { JSX } from 'react'

/**
 * Bottombar Container.
 */
export const Bottombar = (): JSX.Element => {
  return (
    <footer className="flex min-h-bottombar items-center justify-center gap-4 bg-black p-4 text-center md:px-8">
      <div className="text-xs text-white">
        Comercial ECCSA S.A., Rut N° 83.382.700-6. Todos los derechos reservados. 2025
      </div>
    </footer>
  )
}
