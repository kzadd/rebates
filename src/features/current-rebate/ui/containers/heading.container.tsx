import { JSX } from 'react'

import { Heading } from '@app/shared/components'

/**
 * Heading container.
 */
export const HeadingContainer = (): JSX.Element => {
  return (
    <Heading
      description="Gestiona los rebates disponibles revisando su información, modificándolos o eliminándolos del sistema."
      title="Rebates vigentes del mes"
    />
  )
}
