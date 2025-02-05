import { NextRequest, NextResponse } from "next/server";
import { createClient } from "~/server/supabase-server";

export async function GET(request: NextRequest) {
  console.log('cookie', request.cookies)
  const supabase = await createClient()
  const {data: {session}} = await supabase.auth.getSession()
  console.log('session', session)
  const user = await supabase.auth.getUser()
  console.log('user', user)
  return NextResponse.json({session})

}