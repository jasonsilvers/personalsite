// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { bundleMDX } from 'mdx-bundler';
import type { NextApiRequest, NextApiResponse } from 'next';
import { mdxSource } from '../../components/bundler';
import { downloadDirList } from '../../utils/github.server';
import { createClient } from '../../utils/redis.server';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const redisClient = createClient();

  redisClient.set('test', 'yourface');

  const result = await redisClient.get('test');

  const directories = await downloadDirList(`content/posts`);
  console.log(directories);

  res.status(200).json({ result });
}
