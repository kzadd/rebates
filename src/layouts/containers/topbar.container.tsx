import { JSX } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'

import { Button, Separator } from '@app/shared/components'
import { FULL_ROUTE_PATHS, TOKEN_KEYS } from '@app/shared/constants/app.constant'
import { LayoutOptions } from '@app/shared/types/layout.types'
import { deleteCookie } from '@app/shared/utils/cookie.utils'

/**
 * Topbar Container.
 */
export const Topbar = ({ variant }: LayoutOptions): JSX.Element => {
  const navigate = useNavigate()

  const handleSignOut = (): void => {
    deleteCookie(TOKEN_KEYS.accessToken)
    navigate(FULL_ROUTE_PATHS.auth.login)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex min-h-topbar items-center justify-between gap-4 bg-black px-4 md:px-8">
      <Link to={FULL_ROUTE_PATHS.dashboard.root}>
        <img alt="logo-ripley" className="w-36 md:w-44" src="/images/logo.png" />
      </Link>

      {variant === 'default' && (
        <div className="flex items-center gap-2">
          <span className="px-3 text-xs text-white md:text-sm">Mateo López Fernández</span>
          <Separator className="h-6 bg-white/20" orientation="vertical" />

          <Button className="text-xs text-white md:text-sm" onClick={handleSignOut} size="sm" variant="text">
            <LogOut className="text-error" />
            Cerrar sesión
          </Button>
        </div>
      )}
    </header>
  )
}
