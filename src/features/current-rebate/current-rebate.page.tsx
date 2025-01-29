import { JSX } from 'react'

import { PageWrapper } from '@app/shared/components/customs/page-wrapper.component'
import { FiltersContainer } from './ui/containers/filters.container'
import { HeadingContainer } from './ui/containers/heading.container'
import { SummaryContainer } from './ui/containers/summary.container'
import { TableContainer } from './ui/containers/table.container'

/**
 * Current rebate page.
 */
const CurrentRebate = (): JSX.Element => {
  return (
    <PageWrapper>
      <HeadingContainer />
      <FiltersContainer />

      <div className="flex flex-col gap-8 lg:flex-row">
        <TableContainer />
        <SummaryContainer />
      </div>
    </PageWrapper>
  )
}

export default CurrentRebate
