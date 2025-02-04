'use client'

import Script from 'next/script'
import { CredentialResponse } from 'google-one-tap'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { createSupabaseClient } from '~/server/supabase-client'
import { cookies } from 'next/headers'

const client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!

const OneTapComponent = () => {
  const supabase = createSupabaseClient()
  const router = useRouter()

  // generate nonce to use for google id token sign-in
  const generateNonce = async (): Promise<string[]> => {
    const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))
    const encoder = new TextEncoder()
    const encodedNonce = encoder.encode(nonce)
    const hashBuffer = await crypto.subtle.digest('SHA-256', encodedNonce)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')

    return [nonce, hashedNonce]
  }

  // useEffect(() => {
    
  //   return () => {
  //       window.removeEventListener('load', initializeGoogleOneTap)
  //       console.log('Google One Tap removed')
  //   }
  // }, [])

  const initializeGoogleOneTap = useCallback(async () => {
    const [nonce, hashedNonce] = await generateNonce()

    // check if there's already an existing session before initializing the one-tap UI
    // const { data, error } = await supabase.auth.getSession()
    // if (error) {
    //   console.error('Error getting session', error)
    // }
    // if (data.session) {
    //   console.log('Already signed in, redirecting to /supabase/signin-onetap-nextjs-google')
    //   router.push('/supabase/signin-onetap-nextjs-google')
    //   return
    // }

    /* global google */
    globalThis.google.accounts.id.initialize({
      client_id,
      callback: async (response: CredentialResponse) => {
        try {
          console.log('Google One Tap response: ', response)
          // send id token returned in response.credential to supabase
          const { data, error } = await supabase.auth.signInWithIdToken({
            provider: 'google',
            token: response.credential,
            nonce,
          })

          if (error) throw error
          console.log('Session data: ', data)
          console.log('Successfully logged in with Google One Tap')

          // redirect to protected page
          // router.push('/')
        } catch (error) {
          console.error('Error logging in with Google One Tap', error)
        }
      },
      nonce: hashedNonce,
      // with chrome's removal of third-party cookiesm, we need to use FedCM instead (https://developers.google.com/identity/gsi/web/guides/fedcm-migration)
      use_fedcm_for_prompt: true,
      log_level: 'debug',
    })
    // const parent = document.getElementById('oneTap')!;
    // globalThis.google.accounts.id.renderButton(parent, {theme: "filled_blue"});
    globalThis.google.accounts.id.prompt() // Display the One Tap UI
  }, [])

  const test = useCallback(() => {
    console.log('a')
  }, [])

  useEffect(() => {
    globalThis.handleSignInWithGoogle = async (response: CredentialResponse) => {
      console.log('Google One Tap response2: ', response)
      // send id token returned in response.credential to supabase
    }
  }, [])

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" onReady={() => void initializeGoogleOneTap()}/>
      <div
        id="g_id_onload"
        data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleSignInWithGoogle"
        data-nonce=""
        data-auto_select="true"
        data-itp_support="true"
        data-use_fedcm_for_prompt="true"
        data-login_uri="/supabase/signin-onetap-nextjs-google"
      ></div>
    </>
  )
}

export default OneTapComponent
