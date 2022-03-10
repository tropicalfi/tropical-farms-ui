import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, Link, LinkExternal } from '@pancakeswap-libs/uikit'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpTokenPriceFormated?: string
  lpLabel?: string
  addLiquidityUrl?: string
  isTokenOnly: boolean
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  removed,
  totalValueFormated,
  lpTokenPriceFormated,
  lpLabel,
  addLiquidityUrl,
  isTokenOnly,
}) => {
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{TranslateString(316, 'Stake')}:</Text>
        <StyledLinkExternal href={addLiquidityUrl} external>
          {lpLabel}
        </StyledLinkExternal>
      </Flex>
      {!removed && (
        <Flex justifyContent="space-between">
          <Text>{TranslateString(23, 'Total Liquidity')}:</Text>
          <Text>{totalValueFormated}</Text>
        </Flex>
      )}
      {!isTokenOnly && (
        <Flex justifyContent="space-between">
          <Text>{TranslateString(999, 'LP Price')}:</Text>
          <Text>{lpTokenPriceFormated}</Text>
        </Flex>
      )}
      <Flex justifyContent="flex-start">
        <StyledLinkExternal href={bscScanAddress} bold={false}>
          {TranslateString(356, 'View Contract')}
        </StyledLinkExternal>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
