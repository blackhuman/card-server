import { NextResponse, type NextRequest } from 'next/server';
import * as jose from 'jose'
import { } from 'next-auth'

export async function GET(request: NextRequest) {
  const tokenResult = request.cookies.get('chrome-token')
  const token = tokenResult?.value
  console.log('token', token)
  if (!token) return
  const JWKS = jose.createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'))
  console.log('JWKS', JWKS)

  try {
    const { payload, protectedHeader, } = await jose.jwtVerify(token, JWKS, {
      audience: 'authenticated',
    })
    console.log('protectedHeader2', protectedHeader)
    console.log('payload2', payload)
    const unsafePayload = payload as unknown as Record<string, unknown>
  } catch (e) {
    console.log('error', e)
  }

  try {
    // const { payload, protectedHeader, } = await jose.jwtVerify(token, JWKS, {
    //   audience: 'authenticated',
    // })
    const protectedHeader = jose.decodeProtectedHeader(token)
    const payload = jose.decodeJwt(token)
    console.log('protectedHeader', protectedHeader)
    console.log('payload', payload)
    const unsafePayload = payload as unknown as Record<string, unknown>
    return new NextResponse(unsafePayload.email as string)
  } catch (e) {
    console.log('error', e)
  }

  return new NextResponse('error')
}