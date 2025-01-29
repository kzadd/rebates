import { JSX } from 'react'

import { Heading } from '@app/shared/components'

/**
 * Heading container.
 */
export const HeadingContainer = (): JSX.Element => {
  return (
    <Heading
      description="Visualiza todos los rebates ingresados al sistema que se encuentren pendientes de pago. Puedes consultar el departamento responsable"
      title="Rebates pendientes de pago"
    />
  )
}
