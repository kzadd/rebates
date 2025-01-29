import { JSX, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { FULL_ROUTE_PATHS } from '@app/shared/constants/app.constant'
import { getCookie } from '@app/shared/utils/cookie.utils'

interface ProtectedRouteProps {
  children: ReactNode
}

/**
 * Guard that checks if user is authenticated via access token.
 * Redirects to login page if not authenticated.
 */
export const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const accessToken = getCookie('access_token')

  if (!accessToken) {
    return <Navigate to={FULL_ROUTE_PATHS.auth.login} />
  }

  return <>{children}</>
}
