import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { farmsSlice } from 'state/farms'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/hooks'
import styled from 'styled-components'
import useStake from '../../../../hooks/useStake'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
  depositFeeBP?: number
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)
  const cakePriceUsd = usePriceCakeBusd()

  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString('en-US')

  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="center">
      <Heading textAlign="left" color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'}>{displayBalance}<br/>
      <Text color="textSubtle" fontSize="10pt">(${new BigNumber(rawEarningsBalance*cakePriceUsd.toNumber()).toFixed(2)})</Text></Heading>
      <BalanceAndCompound>
        {pid === 0 ? (
          <Button
            disabled={rawEarningsBalance === 0 || pendingTx}
            marginBottom="15px"
            onClick={async () => {
              setPendingTx(true)
              await onStake(rawEarningsBalance.toString())
              setPendingTx(false)
            }}
          >
            {TranslateString(704, 'Compound')}
          </Button>
        ) : null}
        <Button
          disabled={rawEarningsBalance === 0 || pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
        >
          {TranslateString(562, 'Harvest')}
        </Button>
      </BalanceAndCompound>
    </Flex>
  )
}

export default HarvestAction
