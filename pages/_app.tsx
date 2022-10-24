import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-7 pt-6">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}

export default MyApp
