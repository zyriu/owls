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
