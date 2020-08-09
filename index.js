const urls = {
  foo: 'https://www.example.com',
  '': 'https://www.pxeger.com/2020-08-06-world\'-simplest-url-shortener-using-cloudflare-workers/',
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const path = new URL(request.url).pathname.substring(1);
  console.log(request.headers['user-agent'], new Date(), path);
  if (path in urls) return new Response(null, {status: 308, headers: {location: urls[path]}});
  else return new Response('404 not found?', {status: 404});
}
