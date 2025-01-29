import { PageWrapper } from '@app/shared/components/customs/page-wrapper.component'
import { FiltersContainer } from './ui/containers/filters.container'
import { HeadingContainer } from './ui/containers/heading.container'
import { SummaryContainer } from './ui/containers/summary.container'
import { TableContainer } from './ui/containers/table.container'

/**
 * Dashboard page.
 */
const Dashboard = () => {
  return (
    <PageWrapper>
      <HeadingContainer />
      <FiltersContainer />
      <SummaryContainer />
      <TableContainer />
    </PageWrapper>
  )
}

export default Dashboard
