import { NextResponse } from 'next/server'
 
export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.url))
  //return NextResponse.json({ message: 'Redirecting to home' })
  //return NextResponse.rewrite(new URL('/', request.url))
}
 
export const config = {
  matcher: '/About/:path*',
}