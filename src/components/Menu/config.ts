import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.tropical.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.tropical.finance#/pool',
      },
    ],
  },
  {
    label: 'Islands (Farms)',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
   /* {
     label: 'Hawaii Tickets (Lottery)',
     icon: 'TicketIcon',
     href: '/lottery',
   }, */
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com/smartbch/0x24d8d5Cbc14FA6A740c3375733f0287188F8dF3b',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/tropical-finance'
      }
    ],
  },
  {
    label: 'Audits & Reviews',
    icon: 'ShieldIcon',
    items: [
      {
        label: 'TechRate FULL Audit',
        href: 'https://tropical.finance/audit.pdf',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Tropical Finance Website',
        href: 'https://tropical.finance',
      },
      {
        label: 'Docs',
        href: 'https://tropicalfinance.gitbook.io',
      },
      {
        label: 'Github',
        href: 'https://github.com/tropicalfi/',
      },
      {
        label: 'Contracts',
        href: 'https://tropicalfinance.gitbook.io/tropical-finance/tropical-finance-contracts/contracts',
      },
      {
        label: 'Roadmap',
        href: 'https://tropical.finance/#roadmap',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@tropicalfinance',
      },
    ],
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
]

export default config
