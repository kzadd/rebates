import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { FULL_ROUTE_PATHS, TOKEN_KEYS } from '@app/shared/constants/app.constant'
import { deleteCookie } from '@app/shared/utils/cookie.utils'

interface TopbarControls {
  onSignOut: () => void
}

/**
 * Hook to manage the state and functionalities of the topbar.
 */
export const useTopbar = (): TopbarControls => {
  const navigate = useNavigate()

  const handleSignOut = useCallback((): void => {
    deleteCookie(TOKEN_KEYS.accessToken)
    navigate(FULL_ROUTE_PATHS.auth.login)
  }, [navigate])

  return {
    onSignOut: handleSignOut
  }
}
