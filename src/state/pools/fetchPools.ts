import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import cakeABI from 'config/abi/cake.json'
import bushABIV1 from 'config/abi/bushV1.json'
import wbnbABI from 'config/abi/weth.json'
import { QuoteToken } from 'config/constants/types'
import multicall from 'utils/multicall'
import { getAddress, getWbnbAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig.filter((p) => p.sousId !== 0)

  return poolsWithEnd
}

export const fetchPoolsTotalStatking = async () => {
  const nonBnbPools = poolsConfig.filter((p) => p.stakingTokenName !== QuoteToken.BNB)
  const bnbPool = poolsConfig.filter((p) => p.stakingTokenName === QuoteToken.BNB)
  const v1Bushs = poolsConfig.filter((p) => p.bushVersion === 1)

  const callsNonBnbPools = nonBnbPools.map((poolConfig) => {
    return {
    }
  })
  const callsBnbPools = bnbPool.map((poolConfig) => {
    return {
    }
  })

  const callsV1Bushs = v1Bushs.map((poolConfig) => {
    return {
    }
  })



  const bushDepositFees = {}
  v1Bushs.forEach((poolConfig, index) => {
    bushDepositFees[poolConfig.sousId] = 0
  })

  return [
    ...nonBnbPools.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(0).toJSON(),
      depositFee: bushDepositFees[p.sousId] ?? 0,
    })),
    ...bnbPool.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(0).toJSON(),
      depositFee: bushDepositFees[p.sousId] ?? 0,
    })),
  ]
}
