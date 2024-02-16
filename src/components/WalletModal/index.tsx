import { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react'
import { useAccount, useConnect } from '@starknet-react/core'

const CONNECTOR_METADATA: {
  [id: string]: { name: string; logo: string }
} = {
  argentX: {
    name: 'ArgentX',
    logo: '/wallets/argent.svg'
  },
  argentMobile: {
    name: 'Argent Mobile',
    logo: '/wallets/argent-mobile.svg'
  },
  braavos: {
    name: 'Braavos',
    logo: '/wallets/braavos.svg'
  }
}

export default function WalletModal() {
  const { isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 1500)
    }
  }, [copied])

  return (
    <>
      <button onClick={onOpen}>connect wallet</button>
      <Modal backdrop='blur' hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              {!isConnected &&
                connectors.map((connector, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      connect({ connector })
                      onClose()
                    }}
                  >
                    connect with {CONNECTOR_METADATA[connector.id].name}
                  </button>
                ))}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
