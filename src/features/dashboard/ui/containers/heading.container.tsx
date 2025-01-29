import { JSX } from 'react'

import { Separator } from '@app/shared/components'

/**
 * Heading container.
 */
export const HeadingContainer = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">¡Hola!</h1>

      <h2 className="text-2xl font-bold">
        Te damos la bienvenida al sistema para gestión de rebates
      </h2>

      <Separator className="my-4" />

      <div className="flex flex-col gap-2">
        <h3 className="text-xl text-primary">Resumen de indicadores</h3>
        <p>Consulta la información general para analizar los indicadores clave.</p>
      </div>
    </div>
  )
}
