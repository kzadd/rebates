import { z } from 'zod'

/**
 * Environment schema.
 * Defines the expected environment variables and their types.
 */
const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_IS_MOCKING_ENABLED: z.enum(['false', 'true']).default('false'),
  VITE_MODE: z.enum(['development', 'local', 'production', 'staging']).default('development'),
  VITE_ROOT_URL: z.string().min(1).default('/')
})

const environment = envSchema.parse(import.meta.env)

/**
 * Environment configuration.
 * Stores the API base URL and the current environment mode (e.g., development, production).
 */
export const env = {
  API_URL: environment.VITE_API_URL,
  IS_MOCKING_ENABLED: environment.VITE_IS_MOCKING_ENABLED === 'true',
  MODE: environment.VITE_MODE,
  ROOT_URL: environment.VITE_ROOT_URL
}
