# World's Simplest URL Shortener using Cloudflare Workers
A URL Shortener is a very common proof-of-concept app to build when learning web development, and this one is nothing new.
I wanted to try out Cloudflare's Workers, a super-simple Serverless platform built on their Edge Network.

If you're familiar with JavaScript Service Workers, you'll be able to write a Worker.

Here's step-by-step instructions for setting it up, also available [on my blog](https://www.pxeger.com/2020-08-06-world's-simplest-url-shortener-using-cloudflare-workers)

1. Get a [Cloudflare account](https://cloudflare.com) and enable Workers
2. Install [`wrangler`](https://github.com/cloudflare/wrangler), Cloudflare's CLI tool for working with Workers, and set it up using your Cloudflare API token
3. Copy the [Workers JavaScript template repository](https://github.com/cloudflare/worker-template)
4. Write your code - you can see mine in [`index.js`](./index.js) (don't worry, it's very simple)
4. Create your own `urls.json` for mapping paths( e.g. `foo` for `https://your-domain.com/foo`) to redirect URLs.
5. Set `type` to `webpack` in `wrangler.toml` (see the [docs](https://developers.cloudflare.com/workers/tooling/wrangler/webpack/))
6. Set your Account ID in `wrangler.toml` then run `wrangler publish` to deploy your app to a default subdomain of `workers.dev`
7. To get it on your custom domain, set `workers_dev` to `false`, and `zone_id` in `wrangler.toml` to the Zone ID of your domain in Cloudflare, and `route` to `your-domain.com/*`.

This URL shortener can only have new URLs added by modifying `urls.json` and re-deploying. That may not be what you want, but it's perfect for me because I want mine to be private. You could look in to Cloudflare Workers KV to create a dynamic system, but for me the $5/month was a little too steep for something this mundane.

Mine's deployed at `pxeger.net`.
