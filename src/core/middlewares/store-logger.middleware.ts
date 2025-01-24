import { Action, Middleware } from '@reduxjs/toolkit'

import { env } from '@app/shared/configs/environment.config'

/**
 * Middleware that logs the state changes and actions to the console.
 */
export const storeLogger: Middleware = store => next => action => {
  if (env.MODE !== 'production') {
    console.group(`Redux Action: ${(action as Action).type}`)
    console.log('%c Previous State:', 'color: #FF0000; font-weight: bold', store.getState())
    console.log('%c Action:', 'color: #03A9F4; font-weight: bold', action)

    const result = next(action)

    console.log('%c Next State:', 'color: #4CAF50; font-weight: bold', store.getState())
    console.groupEnd()

    return result
  }

  return next(action)
}
