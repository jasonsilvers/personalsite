import type { AppProps } from 'next/app'
import withTwindApp from '../utils/twind.app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withTwindApp(MyApp)
