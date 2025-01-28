import { JSX } from 'react'

import { FiltersContainer } from './ui/containers/filters.container'
import { HeadingContainer } from './ui/containers/heading.container'
import { SummaryContainer } from './ui/containers/summary.container'
import { TableContainer } from './ui/containers/table.container'

/**
 * Dashboard page.
 */
export const Dashboard = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col gap-6 p-4 sm:p-8  2xl:w-3/5">
      <HeadingContainer />
      <FiltersContainer />
      <SummaryContainer />
      <TableContainer />
    </div>
  )
}
