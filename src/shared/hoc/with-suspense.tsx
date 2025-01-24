import { JSX, ReactNode, Suspense } from 'react'

import { Spinner } from '../components'

/**
 * HOC to wrap a component with a suspense fallback.
 */
export const withSuspense = (component: ReactNode): JSX.Element => {
  return <Suspense fallback={<Spinner />}>{component}</Suspense>
}
