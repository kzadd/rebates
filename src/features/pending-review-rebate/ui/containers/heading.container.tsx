import { JSX } from 'react'

import { Heading } from '@app/shared/components'

/**
 * Heading container.
 */
export const HeadingContainer = (): JSX.Element => {
  return (
    <Heading
      description="Visualiza todos los rebates ingresados al sistema que requieran revisar sus notas de crédito. Puedes marcarlas como revisadas."
      title="Rebates pendientes de revisión"
    />
  )
}
