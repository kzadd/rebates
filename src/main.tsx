import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { initializeMockServiceWorker } from './__mocks__/initialize'
import { App } from './App'

const element = document.getElementById('root')!
const root = createRoot(element)

const tree = (
  <StrictMode>
    <App />
  </StrictMode>
)

/**
 * Initializes the mock service worker.
 * The mock service is only enabled when VITE_IS_MOCKING_ENABLED environment variable is true.
 */
initializeMockServiceWorker()

/**
 * Main entry point of the application.
 */
root.render(tree)
