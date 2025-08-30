// "use client"
import React from 'react'
// import { useRouter } from 'next/navigation'
// import { useSession } from 'next-auth/react'
// import { useEffect } from 'react'
import UserPage from '@/components/UserPage'

const page = async ({params}) => {
    const {username} = await params
    // const {data : session} = useSession();
    // const router = useRouter()
        
    // useEffect(() => {

    //     if (!session) {
    //         router.push('/')
    //     }

    // }, [session, router])

    return (
        <UserPage username={username} />
    )

  
}

export default page
