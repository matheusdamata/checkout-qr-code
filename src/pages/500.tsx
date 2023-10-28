import Layout from '@/components/Layout'
import { Logo } from '@/components/Logo'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { PiArrowRight } from 'react-icons/pi'

export default function Page500() {
  const router = useRouter()

  return (
    <Layout>
      <Flex h="100%" direction="column" align="center" justify="center">
        <Logo />

        <Text
          fontSize={{
            base: 'lg',
            lg: '2xl',
          }}
          color="white"
          mt="4"
        >
          Ops! Página não encontrada
        </Text>
        <Text
          as="p"
          fontSize={{
            base: 'sm',
            lg: 'md',
          }}
          color="whiteAlpha.700"
          textAlign="center"
        >
          A página que você procura não está disponível ou foi removido.
        </Text>

        <Button
          colorScheme="blackAlpha"
          fontWeight="normal"
          color="whatsapp.500"
          variant="link"
          leftIcon={<PiArrowRight size={20} />}
          onClick={() => router.push('/')}
          mt="4"
        >
          Ir para página principal
        </Button>
      </Flex>
    </Layout>
  )
}
