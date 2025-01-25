import { lazy, LazyExoticComponent, ReactElement } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import { ProtectedRoute } from './core/guards/protected-route.guard'
import { ROUTE_PATHS } from './shared/constants/routes.constant'
import { withSuspense } from './shared/hoc/with-suspense.hoc'

const createLazyComponent = (path: string, componentName: string): LazyExoticComponent<() => ReactElement> => {
  return lazy(() => {
    return import(path).then(module => ({
      default: module[componentName]
    }))
  })
}

const AuthenticationLayout = createLazyComponent('./layouts/auth/authentication-layout', 'Authentication')
const BrandLayout = createLazyComponent('./layouts/brand/brand-layout', 'Brand')
const DashboardPage = createLazyComponent('./features/dashboard', 'Dashboard')
const LoginPage = createLazyComponent('./features/login', 'Login')
const NotFoundPage = createLazyComponent('./features/not-found', 'NotFound')

/**
 * Routes configuration.
 * This defines the routes and their associated components.
 */
export const routes: RouteObject[] = [
  {
    element: <Navigate to={ROUTE_PATHS.dashboard} />,
    index: true,
    path: ROUTE_PATHS.root
  },
  {
    children: [
      {
        element: <Navigate to={ROUTE_PATHS.login} />,
        index: true
      },
      {
        element: <LoginPage />,
        path: ROUTE_PATHS.login
      }
    ],
    element: withSuspense(<AuthenticationLayout />),
    path: ROUTE_PATHS.auth
  },
  {
    children: [
      {
        element: <DashboardPage />,
        index: true,
        path: ROUTE_PATHS.root
      }
    ],
    element: withSuspense(
      <ProtectedRoute>
        <BrandLayout />
      </ProtectedRoute>
    ),
    path: ROUTE_PATHS.dashboard
  },
  {
    element: withSuspense(<NotFoundPage />),
    path: ROUTE_PATHS.notFound
  }
]
