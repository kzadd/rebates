import { JSX } from 'react'
import { Outlet } from 'react-router-dom'

import { useSidebar } from './application/useSidebar'
import { Bottombar } from './ui/containers/bottombar.container'
import { Sidebar } from './ui/containers/sidebar.container'
import { Topbar } from './ui/containers/topbar.container'

/**
 * Brand layout.
 */
const Brand = (): JSX.Element => {
  const { isMenuActive, isOpenSidebar, onCloseSidebar, onToggleSidebar } = useSidebar()

  return (
    <div className="flex min-h-screen flex-col pt-[var(--topbar-height)]">
      <Topbar variant="default" />

      <div className="relative flex flex-1">
        {isOpenSidebar && (
          <div
            className="fixed inset-0 z-40 bg-black opacity-50 transition-opacity"
            onClick={onCloseSidebar}
          />
        )}

        <Sidebar
          isMenuActive={isMenuActive}
          isOpenSidebar={isOpenSidebar}
          onCloseSidebar={onCloseSidebar}
          onToggleSidebar={onToggleSidebar}
        />

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

export default Brand
