import Header from '@/components/Header'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import StarknetConfigWrapper from '@/components/StarknetConfigWrapper'
import { ToastContainer } from 'react-toastify'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>owls</title>
      </Head>
      <main className='text-foreground dark'>
        <StarknetConfigWrapper>
          <ToastContainer
            position='bottom-right'
            autoClose={3000}
            newestOnTop
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
          />
          <Header />
          <Component {...pageProps} />
        </StarknetConfigWrapper>
      </main>
    </>
  )
}
