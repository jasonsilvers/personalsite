import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import * as React from 'react'

import { setup, asyncVirtualSheet, hash, getStyleTagProperties } from 'twind/server'
import { twindConfig } from '../utils/twind.config'

export type Constructor<T = object, S = object> = (new (...input: any[]) => T) & S

function withTwindDocument<
  P = {},
  Base extends Constructor<Document<P>, typeof Document> = typeof Document
>(BaseDocument?: Base): Base {
  const sheet = asyncVirtualSheet()

  setup({ ...twindConfig, sheet })

  // @ts-ignore
  return class extends (BaseDocument || Document) {
    static getInitialProps(ctx: DocumentContext) {
      sheet.reset()

      const originalRenderPage = ctx.renderPage

      ctx.renderPage = async (options) => {
        const { html, head = [] } = await originalRenderPage(options)

        const { id, textContent } = getStyleTagProperties(sheet)

        return {
          html,
          head: [
            ...head,
            React.createElement('style', {
              id: '__' + hash(textContent),
              key: id,
              dangerouslySetInnerHTML: {
                __html: textContent
              }
            })
          ]
        }
      }

      return super.getInitialProps(ctx)
    }

    render() {
      return (
        <Html>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin" />
            <link
              href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&display=swap"
              rel="stylesheet"
              crossOrigin="crossorigin"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
}

export default withTwindDocument(MyDocument)
