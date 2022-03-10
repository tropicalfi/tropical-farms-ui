import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Image, Heading, RowType, Toggle, Text, HelpIcon, Link } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import PastLotteryDataContext from 'contexts/PastLotteryDataContext'
import { getLotteryIssueIndex } from 'utils/lotteryUtils'
import useI18n from 'hooks/useI18n'
import { useLottery } from 'hooks/useContract'
import Page from 'components/layout/Page'
import Divider from './components/Divider'
import NextDrawPage from './NextDrawPage'
import PastDrawsPage from './PastDrawsPage'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`

const Hero = styled.div`
  align-items: center;
  color: #FFF;
  text-shadow: 1px 1px 3px #000;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

const Lottery: React.FC = () => {
  const lotteryContract = useLottery()
  const { account } = useWeb3React()
  const TranslateString = useI18n()
  const [activeIndex, setActiveIndex] = useState(0)
  const [historyData, setHistoryData] = useState([])
  const [historyError, setHistoryError] = useState(false)
  const [currentLotteryNumber, setCurrentLotteryNumber] = useState(0)
  const [mostRecentLotteryNumber, setMostRecentLotteryNumber] = useState(1)


  useEffect(() => {
    const getInitialLotteryIndex = async () => {
      const index = await getLotteryIssueIndex(lotteryContract)
      const previousLotteryNumber = index - 1

      setCurrentLotteryNumber(index)
      setMostRecentLotteryNumber(previousLotteryNumber)
    }

    if (account && lotteryContract) {
      getInitialLotteryIndex()
    }
  }, [account, lotteryContract])

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <>
      <Page>
      <Hero>
      <div>
        <Heading as="h1" size="xxl" mb="16px">
          {TranslateString(282, 'Hawaii Tickets')}
        </Heading>
        <ul>
          <li>{TranslateString(580, 'Stake tokens to earn DAIQUIRI.')}</li>
          <li>{TranslateString(404, 'You can unstake at any time.')}</li>
          <li>{TranslateString(406, 'Rewards are calculated per block.')}</li>
        </ul>
      </div>
      <img src="/images/lotterytickets.png" alt="SYRUP POOL icon" width={410} height={191} />
    </Hero>
        <Divider />
        <PastLotteryDataContext.Provider
          value={{ historyError, historyData, mostRecentLotteryNumber, currentLotteryNumber }}
        >
          {activeIndex === 0 ? <NextDrawPage /> : <PastDrawsPage />}
        </PastLotteryDataContext.Provider>
      </Page>
    </>
  )
}

export default Lottery
