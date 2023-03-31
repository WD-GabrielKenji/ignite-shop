import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import logoImg from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'
import Head from 'next/head'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <title>Ignite Shop App</title>
      </Head>

      <Header>
        <img src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
