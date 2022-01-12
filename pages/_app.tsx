import '../styles/globals.css'
import type { AppProps } from 'next/app'
import withTwindApp from '../utils/twind.app'
import twindConfig from '../twind.config'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withTwindApp(twindConfig, MyApp)
