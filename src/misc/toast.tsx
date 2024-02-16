import { explorerTransactionURL, shortenTxHash } from '@/misc'
import { TransactionType } from '@/types'
import { Chain } from '@starknet-react/chains'
import Link from 'next/link'
import { toast as toastify } from 'react-toastify'
import { Box } from '@/components/Layout'

const toastContent = (transactionType: TransactionType, type: 'info' | 'success' | 'error') =>
  ({
    [TransactionType.Mint]: {
      error: 'error minting',
      info: 'minting...',
      success: 'mint successful!'
    }
  })[transactionType][type]

interface ToastProps {
  action: TransactionType
  chain: Chain
  transactionHash?: string
  type?: 'info' | 'success' | 'error'
}

export const toast = ({ action, chain, transactionHash, type = 'info' }: ToastProps) => {
  toastify[type](
    <Box col className='ml-4 items-start'>
      {toastContent(action, type)}
      {transactionHash && (
        <Link href={explorerTransactionURL(transactionHash, chain)} target='_blank' rel='noopener noreferrer'>
          tx hash: {shortenTxHash(transactionHash)}
        </Link>
      )}
    </Box>
  )
}
