import { JSX, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Bottombar } from './ui/containers/bottombar.container'
import { Sidebar } from './ui/containers/sidebar.container'
import { Topbar } from './ui/containers/topbar.container'

/**
 * Brand layout.
 */
export const Brand = (): JSX.Element => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const handleCloseSidebar = (): void => setIsOpenSidebar(false)

  return (
    <div className="flex min-h-screen flex-col pt-[var(--topbar-height)]">
      <Topbar variant="default" />

      <div className="relative flex flex-1">
        {isOpenSidebar && <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={handleCloseSidebar} />}
        <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />

        <div className="flex flex-1 pl-[var(--sidebar-icon-width)]">
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>

          <Bottombar variant="default" />
        </div>
      </div>
    </div>
  )
}
