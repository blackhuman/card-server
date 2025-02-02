'use client'
import { useCallback, useState } from "react"
import { useSignin, useUser } from "./action"

export default function Page() {
    const [user, setUser] = useState<any>(null)

    const renderUser = useCallback(async () => {
        setUser(null)
        const user = await useUser()
        if (user) {
            setUser(JSON.stringify(user, null, 2))
        } else {
            setUser(null)
        }
    }, [])

    const renderUserWithFetch = useCallback(async () => {
        setUser(null)
        const response = await fetch('/supabase/signin-pkce-google/api/user')
        const json = await response.json()
        setUser(JSON.stringify(json, null, 2))
    }, [])
    
    return (
        <div className="p-5 flex flex-col gap-3">
            <button className="btn" onClick={() => void useSignin()}>Sign in with Google</button>
            <button className="btn" onClick={() => void renderUser()}>Render user</button>
            <button className="btn" onClick={() => void renderUserWithFetch()}>Render user with fetch</button>
            <p>{user}</p>
        </div>
    )
}