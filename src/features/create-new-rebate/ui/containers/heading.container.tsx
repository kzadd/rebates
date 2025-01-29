import { JSX } from 'react'

import { Heading } from '@app/shared/components'

/**
 * Heading container.
 */
export const HeadingContainer = (): JSX.Element => {
  return (
    <Heading
      description="Elige una modalidad para crear el rebate y consulta los más recientes."
      title="Crear nuevo rebate"
    />
  )
}
