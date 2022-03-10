import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    provider: '',
    isTokenOnly: true,
    lpSymbol: QuoteToken.CAKE,
    lpAddresses: {
      10000: '0xd32997C70F0acb852780D1fA7D3743ce76182658',
      10001: '', 
    },
    tokenSymbol: QuoteToken.CAKE,
    tokenAddresses: {
      10000: contracts.cake[10000],
      10001: contracts.cake[10001],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    provider: '',
lpSymbol: 'DAIQUIRI-FLEXUSD LP',
    lpAddresses: {
      10000: '0xd32997C70F0acb852780D1fA7D3743ce76182658',
      10001: '', 
    },
    tokenSymbol: QuoteToken.CAKE,
    tokenAddresses: {
      10000: contracts.cake[10000],
      10001: contracts.busd[10001],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    provider: '',
    lpSymbol: 'DAIQUIRI-BPAD LP',
    lpAddresses: {
      10000: '0x5E01F471913f6926a35C5281FB4a6440B2E92b75',
      10001: '', 
    },
    tokenSymbol: QuoteToken.USDT,
    tokenAddresses: {
      10000: contracts.usdt[10000],
      10001: contracts.usdt[10001],
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },  
  {
    pid: 3,
    provider: '',
lpSymbol: 'DAIQUIRI-BCH LP',
    lpAddresses: {
      10000: '0xF1Ac59acb449C8e2BA9D222cA1275b3f4f9a455C',
      10001: '', 
    },
    tokenSymbol: 'DAIQUIRI',
    tokenAddresses: {
      10000: contracts.cake[10000],
      10001: contracts.cake[10001],
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    provider: '',
    lpSymbol: 'BCH-FLEXUSD LP',
    lpAddresses: {
      10000: '0xbC6ade4d6b3aEFe107C37C5C028De1E247de4533',
      10001: '', 
    },
    tokenSymbol: 'WBCH',
    tokenAddresses: {
      10000: contracts.wbnb[10000],
      10001: contracts.cake[10001],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    provider: '',
    lpSymbol: 'WBCH',
    isTokenOnly: true,
    lpAddresses: {
      10000: '0xF1Ac59acb449C8e2BA9D222cA1275b3f4f9a455C',
      10001: '', 
    },
    tokenSymbol: 'WBCH',
    tokenAddresses: {
      10000: contracts.wbnb[10000],
      10001: contracts.cake[10001],
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
  {
    pid: 6,
    provider: '',
    lpSymbol: QuoteToken.BUSD,
    isTokenOnly: true,
    lpAddresses: {
      10000: '0xF1Ac59acb449C8e2BA9D222cA1275b3f4f9a455C',
      10001: '', 
    },
    tokenSymbol: QuoteToken.BUSD,
    tokenAddresses: {
      10000: contracts.busd[10000],
      10001: contracts.cake[10001],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    provider: '',
    lpSymbol: "LAW",
    isTokenOnly: true,
    lpAddresses: {
      10000: '0x5d3d6f111d839F6A642467CE21ff32A3d80dc274',
      10001: '', 
    },
    tokenSymbol: "LAW",
    tokenAddresses: {
      10000: '0x0b00366fBF7037E9d75E4A569ab27dAB84759302',
      10001: '0x0b00366fBF7037E9d75E4A569ab27dAB84759302',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    provider: '',
    lpSymbol: "DAIQUIRI-FATCAT",
    lpAddresses: {
      10000: '0x19F53c2a10Cbc957748F5A036072D58792A231c4',
      10001: '', 
    },
    tokenSymbol: QuoteToken.CAKE,
    tokenAddresses: {
      10000: contracts.fatcat[10000],
      10001: '0x19F53c2a10Cbc957748F5A036072D58792A231c4',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 9,
    provider: '',
    lpSymbol: "CELERY",
    isTokenOnly: true,
    lpAddresses: {
      10000: '0x5775D98022590dc60E9c4Ae0a1c56bF1fD8fcaDC',
      10001: '', 
    },
    tokenSymbol: QuoteToken.CELERY,
    tokenAddresses: {
      10000: '0x7642Df81b5BEAeEb331cc5A104bd13Ba68c34B91',
      10001: '0x7642Df81b5BEAeEb331cc5A104bd13Ba68c34B91',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
  {
    pid: 10,
    provider: '',
    lpSymbol: "LAW-BCH",
    lpAddresses: {
      10000: '0x5d3d6f111d839F6A642467CE21ff32A3d80dc274',
      10001: '', 
    },
    tokenSymbol: QuoteToken.LAW,
    tokenAddresses: {
      10000: contracts.law[10000],
      10001: contracts.law[10001],
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    provider: '',
    lpSymbol: "DAIQUIRI-DAO",
    lpAddresses: {
      10000: '0x441cb589C8BB9213470cfacB54FAA9B180B6e3e4',
      10001: '0x441cb589C8BB9213470cfacB54FAA9B180B6e3e4', 
    },
    tokenSymbol: QuoteToken.DAO,
    tokenAddresses: {
      10000: contracts.dao[10000],
      10001: contracts.cake[10001],
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  }, 
  {
    pid: 12,
    provider: '',
    lpSymbol: "CELERY-BCH",
    lpAddresses: {
      10000: '0xCCc063E3d2a43670091EB9F9BAdE03B66aB61d1f',
      10001: '0xCCc063E3d2a43670091EB9F9BAdE03B66aB61d1f', 
    },
    tokenSymbol: QuoteToken.CELERY,
    tokenAddresses: {
      10000: contracts.celery[10000],
      10001: contracts.celery[10001],
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
