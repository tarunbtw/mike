import { NextResponse } from 'next/server';

export const config = {
  matcher: '/e1.txt', // This ensures the code only runs for e1.txt
};

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  if (userAgent.toLowerCase().includes('curl')) {
    return NextResponse.next(); // Let curl through
  }

  // Block everyone else
  return new NextResponse('Access Denied. Terminal access only.', { status: 403 });
}