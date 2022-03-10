import React, { useMemo } from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { Tag, LinkExternal, Text, Link, HelpIcon, VerifiedIcon } from '@pancakeswap-libs/uikit'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { communityFarms } from 'config/constants'
import { CommunityTag, CoreTag, DualTag } from 'components/Tags'
import BigNumber from 'bignumber.js'
import { usePriceBnbBusd, usePriceCakeBusd, usePriceEthBusd } from 'state/hooks'
import HarvestAction from './HarvestAction'
import StakedAction from './StakedAction'
import Apr, { AprProps } from '../Apr'
import Multiplier, { MultiplierProps } from '../Multiplier'
import Liquidity, { LiquidityProps } from '../Liquidity'
import Fee, { FeeProps } from '../Fee'
import { QuoteToken } from '../../../../../config/constants/types'
import Tooltip from '../../Tooltip/Tooltip'

export interface ActionPanelProps {
  apr: AprProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  fee: FeeProps
  details: FarmWithStakedValue
}

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.xl} {
    flex-direction: row;
    padding: 16px 32px;
  }
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const StyledLink = styled(Link)`
  font-weight: 400;
`

const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`

const LpPriceContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;
  line-height: 1.5;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }

  span {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const TagsContainer = styled.div`
  display: block;
  align-items: center;
  margin-top: 25px;
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 16px;
  }

  > div {
    height: 24px;
    padding: 0 6px;
    font-size: 14px;
    margin-right: 4px;

    svg {
      width: 14px;
    }
  }
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
  }
`

const InfoContainer = styled.div`
  min-width: 200px;
`

const ValueContainer = styled.div`
  display: block;

  ${({ theme }) => theme.mediaQueries.xl} {
    display: none;
  }
`

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;
`

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({ details, apr, multiplier, liquidity, fee }) => {
  const farm = details

  const TranslateString = useI18n()
  const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses, tokenSymbol, dual } = farm
  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const bsc = `https://smartscan.cash/address/${lpAddress}`
  const info = `https://pancakeswap.info/pair/${lpAddress}`
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const ethPrice = usePriceEthBusd()
  let earnings = new BigNumber(0)
  if(farm.userData) {earnings = farm.userData.earnings;}

  const totalValue: BigNumber = useMemo(() => {
    if (!farm.lpTotalInQuoteToken) {
      return null
    }
    if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      return bnbPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
      return cakePrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.ETH) {
      return ethPrice.times(farm.lpTotalInQuoteToken)
    }
    return farm.lpTotalInQuoteToken
  }, [bnbPrice, cakePrice, ethPrice, farm.lpTotalInQuoteToken, farm.quoteTokenSymbol])

  const lpPrice = useMemo(() => {
    if (farm.isTokenOnly) {
       return null
     }

     let price = Number(totalValue) / Number(farm.lpTokenBalanceMC);

     if(farm.tokenSymbol === QuoteToken.DAO) price *= 1e11;

     return price;
   }, [farm, totalValue])

  const lpTokenPriceFormated = lpPrice
    ? `~$${Number(lpPrice).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
    : '-'

  return (
    <Container>
      <InfoContainer>
        <StyledLinkExternal href={farm.isTokenOnly ?
            `https://exchange.tropical.finance/#/swap/?outputCurrency=${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
            :
          `https://exchange.tropical.finance/#/add/${liquidityUrlPathParts}`
        } external>
          Get {lpLabel}
        </StyledLinkExternal>
        <StyledLinkExternal href={bsc}>
          {TranslateString(999, 'View Contract')}
        </StyledLinkExternal>
        <StyledLinkExternal href={info} external>
          {TranslateString(999, 'See Pair Info')}
        </StyledLinkExternal>
        {!farm.isTokenOnly && (
          <LpPriceContainer>
            LP Price:&nbsp;
            <span>{lpTokenPriceFormated}</span>
          </LpPriceContainer>
        )}
        <TagsContainer>
        {farm.provider ?
          <Tag variant="textSubtle" outline>
            {farm.provider}
          </Tag> : null }
          {farm.isCommunity ? <CommunityTag /> : <CoreTag />}
          {dual ? <DualTag /> : null}
        </TagsContainer>
        <TagsContainer>{dual ? <DualTag /> : null}</TagsContainer>
      </InfoContainer>
      <ValueContainer>
        <ValueWrapper>
          <Text>APR</Text>
          <Apr {...apr} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{TranslateString(999, 'Multiplier')}</Text>
          <Multiplier {...multiplier} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{TranslateString(999, 'Liquidity')}</Text>
          <Liquidity {...liquidity} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{TranslateString(999, 'Deposit fee')}</Text>
          <Fee {...fee} />
        </ValueWrapper>
      </ValueContainer>
      <ActionContainer>
        <HarvestAction {...farm} />
        <StakedAction {...farm} />
      </ActionContainer>
    </Container>
  )
}

export default ActionPanel
