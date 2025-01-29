import { PageWrapper } from '@app/shared/components/customs/page-wrapper.component'
import { ActionsContainer } from './ui/containers/actions.container'
import { FiltersContainer } from './ui/containers/filters.container'
import { HeadingContainer } from './ui/containers/heading.container'
import { TableContainer } from './ui/containers/table.container'

/**
 * Create new rebate page.
 */
const CreateNewRebate = () => {
  return (
    <PageWrapper>
      <HeadingContainer />
      <ActionsContainer />
      <FiltersContainer />
      <TableContainer />
    </PageWrapper>
  )
}

export default CreateNewRebate
