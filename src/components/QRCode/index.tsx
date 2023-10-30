import { QRCodeProps } from '@/@types/global'
import {
  Button,
  CircularProgress,
  Flex,
  Input,
  Tooltip,
} from '@chakra-ui/react'

import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'

export default function QRCode({ isLoading, code }: QRCodeProps) {
  const [qrCodeCopied, setQRCodeCopied] = useState(false)

  const handleQrCodeCopy = () => {
    navigator.clipboard.writeText(code)
    setQRCodeCopied(true)

    const timerTooltip = setTimeout(() => setQRCodeCopied(false), 1500)
    return () => clearTimeout(timerTooltip)
  }

  if (isLoading) {
    return <CircularProgress size={10} color="whatsapp.500" isIndeterminate />
  }

  return (
    <Flex direction="column" align="center" justify="center" h="100%" gap="4">
      <QRCodeSVG value={code} width={250} height={250} />

      <Flex direction="column" gap="2" mb="2">
        <Input
          value={code}
          isDisabled={true}
          border="2px"
          borderColor="whatsapp.500"
        />

        <Tooltip label="QR Code copiado 🥳" isOpen={qrCodeCopied} hasArrow>
          <Button
            colorScheme="whatsapp"
            bg="whatsapp.500"
            color="blackAlpha.900"
            onClick={handleQrCodeCopy}
          >
            Copiar QR Code
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  )
}
