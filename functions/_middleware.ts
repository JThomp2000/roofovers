// functions/_middleware.ts

// This middleware handles the SPA fallback for all paths that don't match an asset.
// We use this because Cloudflare's _redirects validator was flagging infinite loops [code: 10021].
export const onRequest: PagesFunction = async (context) => {
  const { request, next, env } = context;
  const url = new URL(request.url);

  // 1. Let the request proceed to assets or more specific functions (like /api/)
  const response = await next();
  
  // 2. If it's a 404 and NOT an API call, we return index.html as the SPA fallback
  if (response.status === 404 && !url.pathname.startsWith('/api/')) {
    // env.ASSETS.fetch is the standard way to serve static assets from a Function.
    // This fetch does NOT trigger the middleware again, preventing any loop.
    return env.ASSETS.fetch(new URL('/index.html', request.url));
  }

  return response;
};
