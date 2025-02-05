'use server'

import { redirect } from "next/navigation"
import { createClient } from "~/server/supabase-server"
import { headers } from "next/headers"

export async function useSignin() {
    const supabase = await createClient()
    console.log('useSignin server action')
    const response = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `http://localhost:3009/supabase/signin-pkce-google/api/auth/callback`,
        },
    })
    const { data: { url }, error } = response
    if (url) {
        redirect(url)
    }
}

export async function useUser() {
    headers() // This opts into dynamic rendering and prevents caching
    const supabase = await createClient()
    const { data: { session } } = await supabase.auth.getSession()
    return session ? session.user : null
}