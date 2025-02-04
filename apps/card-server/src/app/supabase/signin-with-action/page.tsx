'use client'

import { useState, useEffect, useCallback, FormEvent} from 'react'
import { signin } from './signin'


function SignIn() {
  const [session, setSession] = useState(null)

  const signIn = useCallback(async (form: FormEvent) => {
    form.preventDefault()
    const target = form.target as typeof form.target & {
      email: { value: string };
      password: { value: string };
    };
    console.log('form', form)
    const response = await signin(
      {
        email: target.email.value,
        password: target.password.value,
      }
    )
    const { data: { user }, error } = response
    console.log('user', user)
  }, [])

  const signOut = useCallback(() => {
  }, [])

  const renderUser = useCallback(() => {
    fetch('/supabase/api/user')
  }, [])

  if (!session) {
    return (
      <div className='flex flex-col gap-5 center'>
        Logged in!
        <form className='flex flex-row gap-5' onSubmit={signIn}>
          <input className=' border-black border-2' type="email" name="email" />
          <input className=' border-black border-2' type="password" name="password" />
          <button type="submit">signIn</button>
          <button onClick={signOut}>signOut</button>
        </form>
        <button onClick={renderUser}>renderUser</button>
      </div>
    )
  }
  else {
    return (
      <div>
        Logged in!
      </div>
    )
  }
}

export default () => {
  return (
    <div className='p-5'>
      <SignIn/>
    </div>
  )
}