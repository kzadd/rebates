import { JSX, ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
}

/**
 * Page wrapper component.
 */
export const PageWrapper = ({ children }: PageWrapperProps): JSX.Element => {
  return <div className="flex w-full max-w-screen-xl flex-col gap-8 p-4 sm:p-8">{children}</div>
}
