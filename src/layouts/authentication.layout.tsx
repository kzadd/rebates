import { JSX } from 'react'
import { Outlet } from 'react-router-dom'

import { Bottombar } from './ui/containers/bottombar.container'
import { Topbar } from './ui/containers/topbar.container'

/**
 * Authentication layout.
 */
const Authentication = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col pt-[var(--topbar-height)]">
      <Topbar variant="auth" />

      <main className="flex flex-1 items-center justify-center p-4">
        <Outlet />
      </main>

      <Bottombar variant="auth" />
    </div>
  )
}

export default Authentication
