import { AxiosError } from 'axios'

export interface AppError {
  code: number | null
  originalError: Error | AxiosError | null
  reason: string | null
}

export interface ErrorOptions {
  code?: number | null
  originalError?: Error | AxiosError | null
  reason?: string | null
}

export interface ErrorResponse extends AppError {
  toJSON: () => string
  toObject: () => AppError
}
