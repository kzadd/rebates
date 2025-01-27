import { JSX } from 'react'
import { Outlet } from 'react-router-dom'

import { Bottombar } from './containers/bottombar.container'
import { Sidebar } from './containers/sidebar.container'
import { Topbar } from './containers/topbar.container'

/**
 * Brand layout.
 */
export const Brand = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col">
      <Topbar variant="default" />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <main className="flex flex-1 flex-col p-4">
            <Outlet />
          </main>

          <Bottombar variant="default" />
        </div>
      </div>
    </div>
  )
}
