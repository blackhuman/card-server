import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { createClient } from '~/server/supabase-server'
import { unstable_cache } from 'next/cache'
import { revalidateTag } from 'next/cache'

export async function GET(request: Request) {
    const getCachedData = unstable_cache(
        async () => {
            console.log('GET', 'request') // This will only log when cache is invalid
            return { timestamp: new Date().toISOString() }
        },
        ['user-data'], // cache key
        {
            revalidate: 10, // cache for 10 seconds
            tags: ['user-data']
        }
    )

    const data = await getCachedData()
    return NextResponse.json(data)
}

// Add a POST method to manually invalidate cache
export async function POST() {
    revalidateTag('user-data')
    return NextResponse.json({ revalidated: true })
}