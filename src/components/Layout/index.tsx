import { LayoutProps } from '@/@types/global'
import Loading from '@/pages/loading'
import { Flex } from '@chakra-ui/react'
import { Suspense } from 'react'

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      maxW="1120"
      h="100vh"
      mx="auto"
      px="6"
    >
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </Flex>
  )
}
