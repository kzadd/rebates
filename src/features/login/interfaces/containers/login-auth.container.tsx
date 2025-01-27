import { JSX, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, LogIn } from 'lucide-react'

import { Button, Input, Label } from '@app/shared/components'
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
    <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
      <div className="flex items-center justify-center border-b border-border px-8 py-6 text-center md:px-12">
        <h1 className="text-xl font-bold">Sistema de gestión de rebates</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 px-8 py-6 text-center md:px-12">
        <p className="text-lg text-primary md:text-xl">¡Te damos la bienvenida!</p>
        <p className="text-xs md:text-sm">Ingresa tu usuario y contraseña para iniciar sesión</p>
      </div>

      <form className="flex flex-col gap-4 px-8 py-2 md:px-12">
        <div className="flex flex-col gap-1">
          <Label htmlFor="user">Usuario</Label>

          <Input
            autoComplete="username"
            className="max-md:h-10 max-md:px-4"
            id="user"
            placeholder="Ingresa tu usuario"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="password">Contraseña</Label>

          <div className="relative">
            <Input
              autoComplete="current-password"
              className="max-md:h-10 max-md:px-4"
              id="password"
              placeholder="Ingresa tu contraseña"
              type={showPassword ? 'text' : 'password'}
            />

            <Button
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
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

      <div className="flex flex-col items-center gap-2 px-8 py-6 text-center md:px-12">
        <Button className="min-w-[140px] max-md:h-10 max-md:px-4 md:min-w-[200px]" onClick={handleSingIn}>
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
