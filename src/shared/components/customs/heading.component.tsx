import { JSX } from 'react'

import { Separator } from '@app/shared/components'

interface HeadingProps {
  description: string
  title: string
}

/**
 * Heading component.
 */
export const Heading = ({ title, description }: HeadingProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
      <Separator className="my-4" />
    </div>
  )
}
