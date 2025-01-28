import { JSX, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, LogIn } from 'lucide-react'

import { Button, Input, Label, Separator } from '@app/shared/components'
import { FULL_ROUTE_PATHS, TOKEN_KEYS } from '@app/shared/constants/app.constant'
import { putCookie } from '@app/shared/utils/cookie.utils'

/**
 * Login auth container.
 */
export const LoginAuth = (): JSX.Element => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const handleSingIn = (): void => {
    putCookie(TOKEN_KEYS.accessToken, 'testing')
    navigate(FULL_ROUTE_PATHS.dashboard.root)
  }

  const handleTogglePasswordVisibility = (): void => setShowPassword(!showPassword)

  return (
    <div className="flex w-full max-w-md flex-col gap-8 rounded-lg bg-white p-8 text-center shadow-xl">
      <h1 className="text-xl font-bold">Sistema de gestión de rebates</h1>

      <Separator className="-mx-8 w-[calc(100%+64px)]" />

      <div className="flex flex-col items-center gap-2">
        <p className="text-xl text-primary">¡Te damos la bienvenida!</p>
        <p className="text-xs">Ingresa tu usuario y contraseña para iniciar sesión</p>
      </div>

      <form className="flex flex-col gap-4 text-left">
        <div className="flex flex-col gap-2">
          <Label htmlFor="user">Usuario</Label>
          <Input autoComplete="username" id="user" placeholder="Ingresa tu usuario" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Contraseña</Label>

          <div className="relative">
            <Input
              autoComplete="current-password"
              id="password"
              placeholder="Ingresa tu contraseña"
              type={showPassword ? 'text' : 'password'}
            />

            <Button
              className="absolute right-0 top-0 h-full hover:bg-transparent hover:shadow-none"
              onClick={handleTogglePasswordVisibility}
              size="icon"
              type="button"
              variant="text"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </Button>
          </div>
        </div>
      </form>

      <div className="flex flex-col items-center gap-2">
        <Button className="w-full max-w-[200px]" onClick={handleSingIn}>
          <LogIn />
          Iniciar sesión
        </Button>

        <Button size="sm" variant="link">
          Recuperar contraseña
        </Button>
      </div>
    </div>
  )
}
