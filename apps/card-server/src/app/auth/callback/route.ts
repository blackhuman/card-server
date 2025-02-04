import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createClient } from '~/server/supabase-server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = createClient();
    
    // Exchange the code for a session
    await supabase.auth.exchangeCodeForSession(code);
    
    // Redirect to the home page after successful authentication
    return NextResponse.redirect(new URL('/', requestUrl.origin));
  }

  // If no code is present, redirect to signin page
  return NextResponse.redirect(new URL('/signin', requestUrl.origin));
}
