import { Chain } from '@starknet-react/chains'

export const getContracts = (chain: Chain) =>
  ({
    mainnet: {
      owls: '0x4b23f0702da1597e1abdaf517d769640bf516e6b2f04a6e726b0b87eb99fc61'
    },
    goerli: {
      owls: '0x205e0db084d2c99fae56a59a24653b8e5a52bc46046fd07e6baf2024ab74e71'
    }
  })[chain.network]
