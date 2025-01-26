import { JSX } from 'react'
import { Link } from 'react-router-dom'

import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'

/**
 * Topbar Container.
 */
export const Topbar = (): JSX.Element => {
  return (
    <header className="flex min-h-topbar items-center justify-between gap-4 bg-black px-4">
      <Link to={FULL_ROUTE_PATHS.dashboard.root}>
        <img alt="logo-ripley" className="w-40 md:w-48" src="/images/logo.png" />
      </Link>
    </header>
  )
}
