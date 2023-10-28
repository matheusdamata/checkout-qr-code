import Layout from '@/components/Layout'
import { CircularProgress } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Layout>
      <CircularProgress isIndeterminate color="orange.500" />
    </Layout>
  )
}
