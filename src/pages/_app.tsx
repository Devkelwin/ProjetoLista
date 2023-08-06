import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/">
          <ArrowLeft size={42} color="white" />
        </Link>
        <h1>Lista de Produtos</h1>
        <Link href="/store2">
          <ArrowRight size={42} color="white" />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
