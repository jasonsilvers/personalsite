import nodePath from 'path';
import { Octokit as createOctokit } from '@octokit/rest';
import { throttling } from '@octokit/plugin-throttling';

const Octokit = createOctokit.plugin(throttling);

type ThrottleOptions = {
  method: string;
  url: string;
  request: { retryCount: number };
};
const octokit = new Octokit({
  auth: process.env.BOT_GITHUB_TOKEN,
  throttle: {
    onRateLimit: (retryAfter: number, options: ThrottleOptions) => {
      console.warn(
        `Request quota exhausted for request ${options.method} ${options.url}. Retrying after ${retryAfter} seconds.`
      );

      return true;
    },
    onAbuseLimit: (options: ThrottleOptions) => {
      octokit.log.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      );
    },
  },
});

async function downloadDirList(path: string) {
  const resp = await octokit.repos.getContent({
    owner: 'jasoncsilvers',
    repo: 'personalsite',
    path,
  });
  const data = resp.data;

  if (!Array.isArray(data)) {
    throw new Error(
      `Tried to download content from ${path}. GitHub did not return an array of files. This should never happen...`
    );
  }

  return data;
}

export { downloadDirList };
