import React from 'react'
import { AutoRenewIcon, Flex, Heading } from '@pancakeswap-libs/uikit'
import orderBy from 'lodash/orderBy'
import { useTeams } from 'state/hooks'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'
import TeamListCard from './components/TeamListCard'
import TeamHeader from './components/TeamHeader'

const Teams = () => {
  const TranslateString = useI18n()
  const { teams, isLoading } = useTeams()
  const teamList = Object.values(teams)
  const topTeams = orderBy(teamList, ['points', 'id', 'name'], ['desc', 'asc', 'asc'])

  return (
    <Page>
      <TeamHeader />
      <Flex alignItems="center" justifyContent="space-between" mb="32px">
        <Heading size="xl">{TranslateString(1040, 'Teams')}</Heading>
        {isLoading && <AutoRenewIcon spin />}
      </Flex>
    </Page>
  )
}

export default Teams
