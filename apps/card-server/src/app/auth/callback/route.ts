import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createClient } from '~/server/supabase-server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const redirectUrl = requestUrl.searchParams.get('redirectUrl');

  if (code) {
    const supabase = await createClient();

    const cookieStore = await cookies()
    const allCookies1 = cookieStore.getAll()
    console.log('allCookies before', allCookies1)
    
    // Exchange the code for a session
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    console.log('redirectUrl data', data)
    console.log('redirectUrl error', error)
    const allCookies = cookieStore.getAll()
    console.log('allCookies', allCookies)
    
    if (redirectUrl) {
      console.log('redirectUrl', redirectUrl)
      const response = new NextResponse();
      if (request.method === 'OPTIONS') {
        response.headers.set('Access-Control-Allow-Credentials', 'true');
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', '*');
      } else {
        allCookies.forEach(({ name, value }) => {
          response.cookies.set(name, value)
        })
      }
      return response
    } else {
      // Redirect to the home page after successful authentication
      return NextResponse.redirect(new URL('/', requestUrl.origin));
    }
  }

  // If no code is present, redirect to signin page
  return NextResponse.redirect(new URL('/signin', requestUrl.origin));
}
