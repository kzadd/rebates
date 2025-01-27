import { ROUTE_PATHS } from './routes.constant'

export const FULL_ROUTE_PATHS = {
  auth: {
    login: `/${ROUTE_PATHS.auth}/${ROUTE_PATHS.login}`
  },
  dashboard: {
    createNewRebate: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.createNewRebate}`,
    current: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.current}`,
    paid: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.paid}`,
    pendingApproval: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.pendingApproval}`,
    pendingPayment: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.pendingPayment}`,
    pendingReview: `/${ROUTE_PATHS.dashboard}/${ROUTE_PATHS.pendingReview}`,
    root: `/${ROUTE_PATHS.dashboard}`
  }
}

export const TOKEN_KEYS = {
  accessToken: 'access_token'
}
