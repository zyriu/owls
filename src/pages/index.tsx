import { Box, Container } from '@/components/Layout'
import { getContracts, toast } from '@/misc'
import { TransactionType } from '@/types'
import { useAccount, useContractWrite, useNetwork } from '@starknet-react/core'
import { useCallback, useMemo } from 'react'
import { Call } from 'starknet'

export default function Index() {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()

  const calls = useMemo(() => {
    if (address) {
      const contracts = getContracts(chain)!

      try {
        const mint: Call = {
          contractAddress: contracts.owls,
          entrypoint: 'mint',
          calldata: []
        }

        return [mint]
      } catch (error) {
        console.error('Failed to generate call data', error)
      }
    }
  }, [address, chain])

  const { writeAsync } = useContractWrite({ calls })

  const handleCTA = useCallback(async () => {
    try {
      const { transaction_hash: hash } = await writeAsync()
      toast({ action: TransactionType.Mint, chain, transactionHash: hash, type: 'info' })
    } catch (e) {}
  }, [chain, writeAsync])

  return (
    <Container className='h-[100%] max-w-[1400px]'>
      <Box center className='min-h-[70vh]'>
        <Box col className='max-w-[50vw]'>
          {isConnected && <button onClick={handleCTA}>Mint</button>}
        </Box>
      </Box>
    </Container>
  )
}
