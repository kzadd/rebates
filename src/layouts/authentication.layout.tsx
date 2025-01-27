import { JSX } from 'react'
import { Outlet } from 'react-router-dom'

import { Bottombar } from './containers/bottombar.container'
import { Topbar } from './containers/topbar.container'

/**
 * Authentication layout.
 */
export const Authentication = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col">
      <Topbar variant="auth" />

      <main className="flex flex-1 items-center justify-center p-4">
        <Outlet />
      </main>

      <Bottombar variant="auth" />
    </div>
  )
}
