# OpenAI proxy

## Requirements

Open `src/index.ts` and replace
* `ACCESS_TOKEN_HERE` with your OpenAI access token, e.g. `sk-prod-3298z32498za98nz3w`
* `WORKER_URL_HERE` with the URL you deploy your worker to, e.g. `https://openaiproxy.blabla.workers.dev`

## Development

To run the project locally, run `npx wrangler dev`

## Deploy

To deploy the project to Cloudflare, run `npx wrangler deploy`
