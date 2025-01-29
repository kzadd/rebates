import { JSX } from 'react'

import { FiltersContainer } from './ui/containers/filters.container'
import { HeadingContainer } from './ui/containers/heading.container'
import { SummaryContainer } from './ui/containers/summary.container'
import { TableContainer } from './ui/containers/table.container'

/**
 * Dashboard page.
 */
const Dashboard = (): JSX.Element => {
  return (
    <div className="flex w-full max-w-screen-xl flex-col gap-8 p-4 sm:p-8">
      <HeadingContainer />
      <FiltersContainer />
      <SummaryContainer />
      <TableContainer />
    </div>
  )
}

export default Dashboard
