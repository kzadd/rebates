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
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="flex max-w-lg flex-col items-center gap-6 text-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary shadow-sm">
          <span className="text-5xl font-semibold text-white">404</span>
        </div>

        <h2 className="text-xl font-semibold">¡Página no encontrada!</h2>

        <p className="text-sm text-muted">
          Lo sentimos, la página que estás buscando no existe o ha sido movida. Por favor, verifica
          la URL o regresa al inicio.
        </p>

        <Button asChild className="w-full max-w-[150px]">
          <Link to={FULL_ROUTE_PATHS.dashboard.root}>
            <Home />
            Ir al inicio
          </Link>
        </Button>
      </div>
    </div>
  )
}
