import { NextResponse, type NextRequest } from 'next/server'
import { getIronSession } from 'iron-session'
import { SessionData } from './session'
import { obterSessionOptions } from './action/auth.action'

export async function middleware(req: NextRequest) {
  const resp = NextResponse.next()
  const sessionOptions = await obterSessionOptions()
  const s = await getIronSession<SessionData>(req, resp, sessionOptions)
  if(s.token){
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL('/auth', req.url))
}


export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|auth|favicon.ico).*)',
  ],
}
