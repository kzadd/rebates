import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import { ProtectedRoute } from './core/guards/protected-route.guard'
import { ROUTE_PATHS } from './shared/constants/routes.constant'
import { withSuspense } from './shared/hoc/with-suspense.hoc'

/**
 * Helper function to create lazy loaded components
 */
const createLazyComponent = (path: string, moduleName: string) => {
  return lazy(() => {
    // @vite-ignore
    return import(path).then(module => ({ default: module[moduleName] }))
  })
}

const AuthenticationLayout = createLazyComponent('./layouts/authentication.layout', 'Authentication')
const BrandLayout = createLazyComponent('./layouts/brand.layout', 'Brand')
const CreateNewRebatePage = createLazyComponent('./features/create-new-rebate', 'CreateNewRebate')
const CurrentRebatePage = createLazyComponent('./features/current-rebate', 'CurrentRebate')
const DashboardPage = createLazyComponent('./features/dashboard', 'Dashboard')
const LoginPage = createLazyComponent('./features/login', 'Login')
const NotFoundPage = createLazyComponent('./features/not-found', 'NotFound')
const PaidRebatePage = createLazyComponent('./features/paid-rebate', 'PaidRebate')
const PendingApprovalRebatePage = createLazyComponent('./features/pending-approval-rebate', 'PendingApprovalRebate')
const PendingPaymentRebatePage = createLazyComponent('./features/pending-payment-rebate', 'PendingPaymentRebate')
const PendingReviewRebatePage = createLazyComponent('./features/pending-review-rebate', 'PendingReviewRebate')

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
        element: <CreateNewRebatePage />,
        index: true,
        path: ROUTE_PATHS.createNewRebate
      },
      {
        element: <CurrentRebatePage />,
        index: true,
        path: ROUTE_PATHS.currentRebate
      },
      {
        element: <PendingApprovalRebatePage />,
        index: true,
        path: ROUTE_PATHS.pendingApprovalRebate
      },
      {
        element: <PendingPaymentRebatePage />,
        index: true,
        path: ROUTE_PATHS.pendingPaymentRebate
      },
      {
        element: <PendingReviewRebatePage />,
        index: true,
        path: ROUTE_PATHS.pendingReviewRebate
      },
      {
        element: <PaidRebatePage />,
        index: true,
        path: ROUTE_PATHS.paidRebate
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
