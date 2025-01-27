import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import { ProtectedRoute } from './core/guards/protected-route.guard'
import { ROUTE_PATHS } from './shared/constants/routes.constant'
import { withSuspense } from './shared/hoc/with-suspense.hoc'

const AuthenticationLayout = lazy(() =>
  import('./layouts/authentication.layout').then(module => ({ default: module.Authentication }))
)

const BrandLayout = lazy(() => import('./layouts/brand.layout').then(module => ({ default: module.Brand })))
const DashboardPage = lazy(() => import('./features/dashboard').then(module => ({ default: module.Dashboard })))
const LoginPage = lazy(() => import('./features/login').then(module => ({ default: module.Login })))
const NotFoundPage = lazy(() => import('./features/not-found').then(module => ({ default: module.NotFound })))

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
      },
      {
        element: <div>create new rebate</div>,
        index: true,
        path: ROUTE_PATHS.createNewRebate
      },
      {
        element: <div>current</div>,
        index: true,
        path: ROUTE_PATHS.current
      },
      {
        element: <div>pending approval</div>,
        index: true,
        path: ROUTE_PATHS.pendingApproval
      },
      {
        element: <div>pending payment</div>,
        index: true,
        path: ROUTE_PATHS.pendingPayment
      },
      {
        element: <div>pending review</div>,
        index: true,
        path: ROUTE_PATHS.pendingReview
      },
      {
        element: <div>paid</div>,
        index: true,
        path: ROUTE_PATHS.paid
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
