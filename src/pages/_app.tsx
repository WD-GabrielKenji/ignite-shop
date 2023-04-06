import type { AppProps } from 'next/app'

import Head from 'next/head'
import { Header } from '@/Components/Header'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <title>Ignite Shop App</title>
      </Head>

      <Header />
      <Component {...pageProps} />
    </Container>
  )
}
