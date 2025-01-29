import { JSX } from 'react'

import { PageWrapper } from '@app/shared/components/customs/page-wrapper.component'
import { FiltersContainer } from './ui/containers/filters.container'
import { HeadingContainer } from './ui/containers/heading.container'
import { SummaryContainer } from './ui/containers/summary.container'
import { TableContainer } from './ui/containers/table.container'

/**
 * Pending approval rebate page.
 */
const PendingApprovalRebate = (): JSX.Element => {
  return (
    <PageWrapper>
      <HeadingContainer />

      <div className="flex flex-col gap-8 lg:flex-row">
        <FiltersContainer />

        <div className="flex flex-1 flex-col gap-8 overflow-hidden">
          <SummaryContainer />
          <TableContainer />
        </div>
      </div>
    </PageWrapper>
  )
}

export default PendingApprovalRebate
