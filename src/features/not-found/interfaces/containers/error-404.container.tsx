import { JSX } from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

import { Button } from '@app/shared/components'
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'

/**
 * Error 404 container.
 */
export const Error404 = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex max-w-sm flex-col items-center justify-center gap-6 text-center sm:max-w-lg">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary shadow-sm sm:h-32 sm:w-32">
          <span className="text-4xl text-white sm:text-5xl">404</span>
        </div>

        <h2 className="text-lg font-semibold sm:text-xl">¡Página no encontrada!</h2>

        <p className="text-xs text-muted sm:text-sm">
          Lo sentimos, la página que estás buscando no existe o ha sido movida. Por favor, verifica la URL o regresa al
          inicio.
        </p>

        <Button asChild className="max-sm:h-8 max-sm:px-3 max-sm:text-xs">
          <Link to={FULL_ROUTE_PATHS.dashboard.root}>
            <Home />
            Ir al inicio
          </Link>
        </Button>
      </div>
    </div>
  )
}
