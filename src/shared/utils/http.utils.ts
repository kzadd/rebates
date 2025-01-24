import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios'

import { HttpMethod, NetworkResponse, RequestHeadersOptions, RequestOptions } from '../types/http.types'
import { getCookie } from './cookie.utils'

/**
 * Creates and configures HTTP headers.
 */
const createHeaders = ({
  contentType = 'application/json',
  customHeaders = {},
  isPublic = false,
  token
}: RequestHeadersOptions): AxiosHeaders => {
  const headers = new AxiosHeaders(customHeaders)

  if (contentType) {
    headers.set('Content-Type', contentType)
  }

  if (!isPublic) {
    const accessToken = token ?? getCookie('access_token') ?? ''

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
  }

  return headers
}

/**
 * Makes an HTTP request to the specified endpoint and transforms the response.
 */
const createRequest = async <T>({ data, headers, method, url }: RequestOptions): Promise<NetworkResponse<T>> => {
  try {
    const config: AxiosRequestConfig = {
      data,
      headers,
      method,
      url
    }

    const response = await axios.request<T>(config)

    return {
      data: response.data
    }
  } catch (error) {
    console.error(`Request to ${url} failed`, error)
    throw error
  }
}

/**
 * Factory function that creates a request to an API endpoint.
 */
const factoryRequest = <T>(
  method: HttpMethod,
  url: string,
  options: RequestHeadersOptions = {}
): Promise<NetworkResponse<T>> => {
  const { body, ...restOptions } = options

  const headers = createHeaders(restOptions)
  const data = body ? JSON.stringify(body) : undefined

  const requestOptions: RequestOptions = {
    data,
    headers,
    method,
    url
  }

  return createRequest<T>(requestOptions)
}

/**
 * Provides HTTP methods (DELETE, GET, PATCH, POST, PUT) for making API requests.
 * Each method uses the factory to ensure consistent request handling.
 */
export const deleteRequest = <T>(url: string, options?: RequestHeadersOptions): Promise<NetworkResponse<T>> =>
  request<T>('DELETE', url, options)

export const getRequest = <T>(url: string, options?: RequestHeadersOptions): Promise<NetworkResponse<T>> =>
  request<T>('GET', url, options)

export const patchRequest = <T>(url: string, options?: RequestHeadersOptions): Promise<NetworkResponse<T>> =>
  request<T>('PATCH', url, options)

export const postRequest = <T>(url: string, options?: RequestHeadersOptions): Promise<NetworkResponse<T>> =>
  request<T>('POST', url, options)

export const putRequest = <T>(url: string, options?: RequestHeadersOptions): Promise<NetworkResponse<T>> =>
  request<T>('PUT', url, options)

/**
 * Creates and configures HTTP requests with proper headers and body formatting.
 * Acts as a central factory for all HTTP methods.
 */
export const request = <T>(
  method: HttpMethod,
  url: string,
  options?: RequestHeadersOptions
): Promise<NetworkResponse<T>> => factoryRequest<T>(method, url, options)
