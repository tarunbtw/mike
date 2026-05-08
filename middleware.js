export const config = {
  matcher: '/e1.txt',
};

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  // If it's curl, just return (this lets the request pass to the file)
  if (userAgent.toLowerCase().includes('curl')) {
    return; 
  }

  // If it's anything else (Browser), show a 404 error
  return new Response('404 Not Found', {
    status: 404,
    headers: { 'content-type': 'text/plain' },
  });
}