import { JSX } from 'react'
import { Link } from 'react-router-dom'
import { LogIn } from 'lucide-react'

import { Button, Input, Label } from '@app/shared/components'

/**
 * Login auth container.
 */
export const LoginAuth = (): JSX.Element => {
  return (
    <div className="w-full max-w-[500px] rounded-lg bg-white shadow-xl">
      <div className="flex items-center justify-center border-b border-border px-8 py-6 text-center md:px-12">
        <h1 className="text-xl font-bold md:text-2xl">Sistema de gestión de rebates</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 px-8 py-6 text-center md:px-12">
        <p className="text-lg text-primary md:text-xl">¡Te damos la bienvenida!</p>
        <p className="text-xs md:text-sm">Ingresa tu usuario y contraseña para iniciar sesión</p>
      </div>

      <form className="flex flex-col gap-4 px-8 py-2 md:px-12">
        <div className="flex flex-col gap-1">
          <Label htmlFor="user">Usuario</Label>
          <Input className="max-md:h-10 max-md:px-4" id="user" placeholder="Ingresa tu usuario" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="password">Contraseña</Label>

          <Input
            className="max-md:h-10 max-md:px-4"
            id="password"
            placeholder="Ingresa tu contraseña"
            type="password"
          />
        </div>
      </form>

      <div className="flex flex-col items-center gap-2 px-8 pb-6 pt-12 text-center md:px-12">
        <Button asChild className="min-w-[140px] max-md:h-10 max-md:px-4 md:min-w-[200px]">
          <Link to="">
            <LogIn />
            Iniciar sesión
          </Link>
        </Button>

        <Button asChild size="sm" variant="link">
          <Link to="">Recuperar contraseña</Link>
        </Button>
      </div>
    </div>
  )
}
