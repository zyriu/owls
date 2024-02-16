import { Box } from '@/components/Layout'
import { shortenAddress } from '@/misc'
import { Navbar, NavbarContent } from '@nextui-org/react'
import { useAccount } from '@starknet-react/core'
import WalletModal from '@/components/WalletModal'

export default function Header() {
  const { address } = useAccount()

  return (
    <Navbar className='z-50 mb-10 bg-transparent' maxWidth='2xl'>
      <NavbarContent justify='end' className='w-[20%]'>
        {address ? <Box>{shortenAddress(address)}</Box> : <WalletModal />}
      </NavbarContent>
    </Navbar>
  )
}
