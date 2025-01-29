const errorMessages = {
  email: 'Ingrese un correo electrónico válido.',
  maxLength: (length: number) => `Este campo no puede exceder los ${length} caracteres.`,
  minLength: (length: number) => `Este campo debe tener al menos ${length} caracteres.`,
  number: 'Este campo solo acepta números.',
  required: 'Este campo es obligatorio.'
}

/**
 * Custom validator to check if input value is a valid email address.
 */
export const isEmail = (value: string): string | null => {
  if (!value) return null

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  return emailRegex.test(value.trim()) ? null : errorMessages.email
}

/**
 * Custom validator to check if input value contains only numeric characters.
 */
export const isNumber = (value: string): string | null => {
  if (!value) return null

  const numericRegex = /^[0-9]+$/

  return numericRegex.test(value.trim()) ? null : errorMessages.number
}

/**
 * Custom validator to check if input field has a non-empty value.
 */
export const isRequired = (value: string): string | null => {
  return value.trim().length > 0 ? null : errorMessages.required
}

/**
 * Custom validator factory that creates a validator to check maximum length.
 */
export const maxLength = (length: number): ((value: string) => string | null) => {
  return (value: string): string | null => {
    if (!value) return null

    return value.trim().length <= length ? null : errorMessages.maxLength(length)
  }
}

/**
 * Custom validator factory that creates a validator to check minimum length.
 */
export const minLength = (length: number): ((value: string) => string | null) => {
  return (value: string): string | null => {
    if (!value) return null

    return value.trim().length >= length ? null : errorMessages.minLength(length)
  }
}
