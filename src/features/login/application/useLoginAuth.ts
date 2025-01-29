import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FULL_ROUTE_PATHS, TOKEN_KEYS } from '@app/shared/constants/app.constant'
import { putCookie } from '@app/shared/utils/cookie.utils'

interface LoginAuthControls {
  isShowPassword: boolean
  onSingIn: () => void
  onTogglePasswordVisibility: () => void
}

/**
 * Hook to manage the state and functionalities of the login auth.
 */
export const useLoginAuth = (): LoginAuthControls => {
  const navigate = useNavigate()

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const handleSingIn = useCallback(() => {
    putCookie(TOKEN_KEYS.accessToken, 'testing')
    navigate(FULL_ROUTE_PATHS.dashboard.root)
  }, [navigate])

  const handleTogglePasswordVisibility = useCallback(() => {
    setIsShowPassword(prev => !prev)
  }, [])

  return {
    isShowPassword,
    onSingIn: handleSingIn,
    onTogglePasswordVisibility: handleTogglePasswordVisibility
  }
}
