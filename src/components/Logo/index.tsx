import { Text } from '@chakra-ui/react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/">
      <Text
        fontSize={{
          base: '4xl',
          lg: '5xl',
        }}
        fontWeight="bold"
        letterSpacing="tight"
      >
        m
        <Text as="span" ml="1" color="whatsapp.500">
          .
        </Text>
      </Text>
    </Link>
  )
}
