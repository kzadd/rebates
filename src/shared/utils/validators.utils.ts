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
export const isEmail = (value: string): string => {
  if (!value) return ''

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const isValid = emailRegex.test(value.trim())

  return isValid ? '' : errorMessages.email
}

/**
 * Custom validator to check if input value contains only numeric characters.
 */
export const isNumber = (value: string): string => {
  if (!value) return ''

  const numericRegex = /^[0-9]+$/
  const isValid = numericRegex.test(value.trim())

  return isValid ? '' : errorMessages.number
}

/**
 * Custom validator to check if input field has a non-empty value.
 */
export const isRequired = (value: string): string => {
  const isValid = value && value.trim().length

  return isValid ? '' : errorMessages.required
}

/**
 * Custom validator factory that creates a validator to check maximum length.
 */
export const maxLength = (length: number) => {
  return (value: string): string => {
    if (!value) return ''

    const isValid = value.trim().length <= length

    return isValid ? '' : errorMessages.maxLength(length)
  }
}

/**
 * Custom validator factory that creates a validator to check minimum length.
 */
export const minLength = (length: number) => {
  return (value: string): string => {
    if (!value) return ''

    const isValid = value.trim().length >= length

    return isValid ? '' : errorMessages.minLength(length)
  }
}
