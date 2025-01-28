import { ROUTE_PATHS } from './routes.constant'

export const FULL_ROUTE_PATHS = {
  auth: {
    login: `/${ROUTE_PATHS.auth}/${ROUTE_PATHS.login}`
  },
  dashboard: {
    createNewRebate: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.createNewRebate}`,
    currentRebate: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.currentRebate}`,
    paidRebate: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.paidRebate}`,
    pendingApprovalRebate: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.pendingApprovalRebate}`,
    pendingPaymentRebate: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.pendingPaymentRebate}`,
    pendingReviewRebate: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.pendingReviewRebate}`,
    root: `/${ROUTE_PATHS.dashboard}`
  }
}

export const TOKEN_KEYS = {
  accessToken: 'access_token'
}
