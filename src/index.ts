/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		console.log(`Hello ${navigator.userAgent} at path ${url.pathname}!`);

		// Build new request
		const accessToken = 'ACCESS_TOKEN_HERE';
		const newHeaders = new Headers(request.headers);
		newHeaders.set('Authorization', `Bearer ${accessToken}`);
		const newUrl = request.url.replace('WORKER_URL_HERE', 'https://api.openai.com');
		const response = await fetch(newUrl, {
			method: request.method,
			headers: newHeaders,
			body: request.body
		});

		return new Response(await response.text(), {
			status: response.status,
			headers: response.headers
		});
	},
};
