import { JSX } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Separator
} from '@app/shared/components'
import { FULL_ROUTE_PATHS, TOKEN_KEYS } from '@app/shared/constants/app.constant'
import { LayoutOptions } from '@app/shared/types/layout.types'
import { deleteCookie } from '@app/shared/utils/cookie.utils'

/**
 * Topbar container.
 */
export const Topbar = ({ variant }: LayoutOptions): JSX.Element => {
  const navigate = useNavigate()

  const handleSignOut = (): void => {
    deleteCookie(TOKEN_KEYS.accessToken)
    navigate(FULL_ROUTE_PATHS.auth.login)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex min-h-topbar items-center justify-between gap-4 bg-black px-4">
      <Link to={FULL_ROUTE_PATHS.dashboard.root}>
        <img alt="logo-ripley" className="w-44" src="/images/logo.png" />
      </Link>

      {variant === 'default' && (
        <>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="px-3 text-sm text-white">Mateo López Fernández</span>
            <Separator className="h-6 bg-white/20" orientation="vertical" />

            <Button className="text-sm text-white" onClick={handleSignOut} size="sm" variant="text">
              <LogOut className="text-error" />
              Cerrar sesión
            </Button>
          </div>

          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-white" size="icon" variant="text">
                  <User />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mateo López Fernández</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Button
                    className="w-full cursor-pointer justify-start text-sm text-black"
                    onClick={handleSignOut}
                    size="sm"
                    variant="text"
                  >
                    <LogOut className="text-error" />
                    Cerrar sesión
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )}
    </header>
  )
}
