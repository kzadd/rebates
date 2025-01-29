import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FULL_ROUTE_PATHS, TOKEN_KEYS } from '@app/shared/constants/app.constant'
import { putCookie } from '@app/shared/utils/cookie.utils'

/**
 * Hook to manage the state and functionalities of the login.
 */
export const useLogin = () => {
  const navigate = useNavigate()

  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleSingIn = useCallback((): void => {
    putCookie(TOKEN_KEYS.accessToken, 'testing')
    navigate(FULL_ROUTE_PATHS.dashboard.root)
  }, [navigate])

  const handleTogglePasswordVisibility = useCallback((): void => {
    setIsShowPassword(prev => !prev)
  }, [])

  return {
    isShowPassword,
    onSingIn: handleSingIn,
    onTogglePasswordVisibility: handleTogglePasswordVisibility
  }
}
