const urls = require('./urls.json');

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  const path = new URL(request.url).pathname.substring(1);
  console.log(request.headers['user-agent'], new Date(), path);
  if (path in urls) return new Response(null, {status: 308, headers: {location: urls[path]}});
  else return new Response('404 not found?', {status: 404});
}
