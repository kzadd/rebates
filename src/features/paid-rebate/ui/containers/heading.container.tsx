import { JSX } from 'react'

import { Heading } from '@app/shared/components'

/**
 * Heading container.
 */
export const HeadingContainer = (): JSX.Element => {
  return (
    <Heading
      description="Visualiza todos los rebates disponibles que figuren pagados en el sistema. Revisa el histórico de los rebates."
      title="Rebates pagados"
    />
  )
}
