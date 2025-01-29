import { FC, JSX } from 'react'
import { Link } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'

import { useTopbar } from '@app/layouts/application/useTopbar'
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
import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { LayoutOptions } from '@app/shared/types/layout.types'

/**
 * Topbar container.
 */
export const Topbar: FC<LayoutOptions> = ({ variant }): JSX.Element => {
  const { onSignOut } = useTopbar()

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

            <Button className="text-sm text-white" onClick={onSignOut} size="sm" variant="text">
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

                <DropdownMenuItem className="cursor-pointer text-sm text-black" onClick={onSignOut}>
                  <LogOut className="text-error" />
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )}
    </header>
  )
}
