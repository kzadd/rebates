import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright configuration.
 */
export default defineConfig({
  expect: {
    timeout: 5000
  },
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      }
    }
  ],
  reporter: 'html',
  retries: process.env.CI ? 2 : 0,
  testDir: './src/__tests__/e2e',
  timeout: 30 * 1000,
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry'
  },
  webServer: {
    command: 'npm run start:local',
    port: 5173,
    reuseExistingServer: !process.env.CI
  },
  workers: process.env.CI ? 1 : undefined
})
