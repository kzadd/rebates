import { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'

/**
 * Hook to manage the state and functionalities of the sidebar.
 */
export const useSidebar = () => {
  const location = useLocation()

  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const isMenuActive = useCallback(
    (path: string): boolean => {
      if (path === FULL_ROUTE_PATHS.dashboard.root) {
        return location.pathname === path
      }

      return location.pathname.startsWith(path)
    },
    [location.pathname]
  )

  const handleCloseSidebar = useCallback((): void => {
    setIsOpenSidebar(false)
  }, [])

  const handleOpenSidebar = useCallback((): void => {
    setIsOpenSidebar(true)
  }, [])

  const handleToggleSidebar = useCallback((): void => {
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
