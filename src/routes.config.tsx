import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import { ProtectedRoute } from './core/guards/protected-route.guard'
import { ROUTE_PATHS } from './shared/constants/routes.constant'
import { withSuspense } from './shared/hoc/with-suspense.hoc'

const AuthenticationLayout = lazy(() =>
  import('./layouts/auth/authentication-layout').then(m => ({ default: m.Authentication }))
)

const BrandLayout = lazy(() => import('./layouts/brand/brand-layout').then(m => ({ default: m.Brand })))
const DashboardPage = lazy(() => import('./features/dashboard').then(m => ({ default: m.Dashboard })))
const LoginPage = lazy(() => import('./features/login').then(m => ({ default: m.Login })))
const NotFoundPage = lazy(() => import('./features/not-found').then(m => ({ default: m.NotFound })))

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
