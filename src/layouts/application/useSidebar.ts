import { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'

interface SidebarControls {
  isMenuActive: (path: string) => boolean
  isOpenSidebar: boolean
  onCloseSidebar: () => void
  onOpenSidebar: () => void
  onToggleSidebar: () => void
}

/**
 * Hook to manage the state and functionalities of the sidebar.
 */
export const useSidebar = (): SidebarControls => {
  const location = useLocation()

  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  const isMenuActive = useCallback(
    (path: string): boolean => {
      if (path === FULL_ROUTE_PATHS.dashboard.root) {
        return location.pathname === path
      }

      return location.pathname.startsWith(path)
    },
    [location.pathname]
  )

  const handleCloseSidebar = useCallback(() => {
    setIsOpenSidebar(false)
  }, [])

  const handleOpenSidebar = useCallback(() => {
    setIsOpenSidebar(true)
  }, [])

  const handleToggleSidebar = useCallback(() => {
    setIsOpenSidebar(prev => !prev)
  }, [])

  return {
    isMenuActive,
    isOpenSidebar,
    onCloseSidebar: handleCloseSidebar,
    onOpenSidebar: handleOpenSidebar,
    onToggleSidebar: handleToggleSidebar
  }
}
