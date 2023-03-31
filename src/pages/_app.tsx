import type { AppProps } from 'next/app'

import Image from 'next/image'
import Head from 'next/head'

import { globalStyles } from '@/styles/global'
import logoImg from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <title>Ignite Shop App</title>
      </Head>

      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
