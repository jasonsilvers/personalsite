import App from 'next/app'

import { setup } from 'twind'
import { twindConfig } from './twind.config'

export default function withTwindApp<Base = typeof App>(BaseApp?: Base): Base

export default function withTwindApp<Base = typeof App>(BaseApp?: Base): Base

export default function withTwindApp<Base = typeof App>(BaseApp?: Base): Base {
  // If this run on the server _document.js has already done the setup
  if (typeof window !== 'undefined') {
    setup(twindConfig)
  }

  // @ts-ignore
  return BaseApp || App
}
