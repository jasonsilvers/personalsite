import Redis from 'ioredis'
import { config } from './misc'

const REDIS_URL = config.redisUrl

export function createClient(): Redis.Redis {
  return new Redis(REDIS_URL)
}


