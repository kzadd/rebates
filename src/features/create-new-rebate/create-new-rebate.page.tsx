import { JSX } from 'react'

import { PageWrapper } from '@app/shared/components/customs/page-wrapper.component'
import { CreateActionsContainer } from './ui/containers/create-actions.container'
import { FiltersContainer } from './ui/containers/filters.container'
import { HeadingContainer } from './ui/containers/heading.container'
import { TableContainer } from './ui/containers/table.container'

/**
 * Create new rebate page.
 */
const CreateNewRebate = (): JSX.Element => {
  return (
    <PageWrapper>
      <HeadingContainer />
      <CreateActionsContainer />
      <FiltersContainer />
      <TableContainer />
    </PageWrapper>
  )
}

export default CreateNewRebate
