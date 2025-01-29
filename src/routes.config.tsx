import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import { ProtectedRoute } from './core/guards/protected-route.guard'
import { ROUTE_PATHS } from './shared/constants/routes.constant'
import { withSuspense } from './shared/hoc/with-suspense.hoc'

const AuthenticationLayout = lazy(() => import('./layouts/authentication.layout'))
const BrandLayout = lazy(() => import('./layouts/brand.layout'))
const CreateNewRebatePage = lazy(() => import('./features/create-new-rebate/create-new-rebate.page'))
const CurrentRebatePage = lazy(() => import('./features/current-rebate/current-rebate.page'))
const DashboardPage = lazy(() => import('./features/dashboard/dashboard.page'))
const LoginPage = lazy(() => import('./features/login/login.page'))
const NotFoundPage = lazy(() => import('./features/not-found/not-found.page'))
const PaidRebatePage = lazy(() => import('./features/paid-rebate/paid-rebate.page'))
const PendingApprovalRebatePage = lazy(() => import('./features/pending-approval-rebate/pending-approval-rebate.page'))
const PendingPaymentRebatePage = lazy(() => import('./features/pending-payment-rebate/pending-payment-rebate.page'))
const PendingReviewRebatePage = lazy(() => import('./features/pending-review-rebate/pending-review-rebate.page'))

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
        element: <LoginPage />,
        path: ROUTE_PATHS.login
      },
      {
        element: <Navigate to={ROUTE_PATHS.login} />,
        index: true
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
        path: ROUTE_PATHS.createNewRebate
      },
      {
        element: <CurrentRebatePage />,
        path: ROUTE_PATHS.currentRebate
      },
      {
        element: <PendingApprovalRebatePage />,
        path: ROUTE_PATHS.pendingApprovalRebate
      },
      {
        element: <PendingPaymentRebatePage />,
        path: ROUTE_PATHS.pendingPaymentRebate
      },
      {
        element: <PendingReviewRebatePage />,
        path: ROUTE_PATHS.pendingReviewRebate
      },
      {
        element: <PaidRebatePage />,
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
