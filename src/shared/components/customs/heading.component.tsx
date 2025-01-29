import { FC, JSX } from 'react'

import { Separator } from '@app/shared/components'
import { HeadingOptions } from '@app/shared/types/components/heading.types'

/**
 * Heading component.
 */
export const Heading: FC<HeadingOptions> = ({ title, description }): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
      <Separator className="my-4" />
    </div>
  )
}
