import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { useRouter } from 'next/router'
import { FormEvent} from 'react'
import { createClient } from '~/server/supabase-server'

export default async function SignIn() {
  const supabase = await createClient()
  const cookieStore = await cookies()
  const signIn = async (form: FormData) => {
    'use server'
    console.log('form', form)
    const { data: {session} } = await supabase.auth.getSession()
    if (!session) {
      const response = await supabase.auth.signInWithPassword(
        {
          email: form.get('email') as string,
          password: form.get('password') as string,
        }
      )
      const { data: { user, session }, error } = response
      console.log('user', user)

      // const cookieStore = cookies()
      // cookieStore.set('supabase-auth-token2', session?.access_token || '')
    } else {
      console.log('already signed in, cookies ', cookieStore.getAll())
    }
    revalidatePath('/')
  }

  const { data: {session}, error } = await supabase.auth.getSession()

  function renderUser() {
    fetch('/supabase/api/user')
  }

  console.log('session', !session)
  console.log('already signed in2, cookies', cookieStore.getAll())

  if (session === null) {
    console.log('no session')
    return (
      <div className='flex flex-col gap-5 center p-5'>
        Logged in!
        <form className='flex flex-row gap-5' action={signIn}>
          <input className=' border-black border-2' type="email" name="email" />
          <input className=' border-black border-2' type="password" name="password" />
          <button type="submit">signIn</button>
        </form>
      </div>
    )
  }
  else {
    console.log('has session', session)
    return (
      <div className='p-5'>
        Logged in!
        <p>{JSON.stringify(session)}</p>
      </div>
    )
  }
}