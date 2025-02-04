'use server'

import { SignInWithPasswordCredentials } from "@supabase/supabase-js";
import { createClient } from "~/server/supabase-server";

export async function signin(credentials: SignInWithPasswordCredentials) {
    console.log('credentials', credentials)
    const supabase = createClient()
    return await supabase.auth.signInWithPassword(credentials)

}