import { JSX } from 'react'
import { Eye, EyeOff, LogIn } from 'lucide-react'

import { Button, Input, Label, Separator } from '@app/shared/components'
import { useLoginAuth } from '../../application/useLoginAuth'

/**
 * Login auth container.
 */
export const LoginAuth = (): JSX.Element => {
  const { isShowPassword, onSingIn, onTogglePasswordVisibility } = useLoginAuth()

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
              type={isShowPassword ? 'text' : 'password'}
            />

            <Button
              className="absolute right-0 top-0 h-full hover:bg-transparent hover:shadow-none"
              onClick={onTogglePasswordVisibility}
              size="icon"
              type="button"
              variant="text"
            >
              {isShowPassword ? <EyeOff /> : <Eye />}
            </Button>
          </div>
        </div>
      </form>

      <div className="flex flex-col items-center gap-2">
        <Button className="w-full max-w-[200px]" onClick={onSingIn}>
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
