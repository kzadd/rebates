import { useLocation } from 'react-router-dom'

/**
 * Hook to retrieve the query parameters from the current URL.
 */
export const useQuery = (): URLSearchParams => {
  const { search } = useLocation()

  return new URLSearchParams(search)
}
