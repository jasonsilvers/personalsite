// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as Sentry from '@sentry/nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

import { createClient } from '../../utils/redis.server'

type Data = {
  name: string
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const redisClient = createClient()

  redisClient.set('test', 'yourface')

  const result = await redisClient.get('test')

  const test = process.env.TEST

  Sentry.captureMessage(`test environment variable ---- ${test}`)

  res.status(200).json({ result, test, hello: 'hello' })
}

export default Sentry.withSentry(handler)
