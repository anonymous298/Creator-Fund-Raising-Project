// "use client"
import React from 'react'
// import { useRouter } from 'next/navigation'
// import { useSession } from 'next-auth/react'
// import { useEffect } from 'react'
import UserPage from '@/components/UserPage'
import connectDb from '@/db/connectDB'
import { notFound } from 'next/navigation'
import User from '@/models/User'
// connectDb

const Page = async ({params}) => {
    const {username} = await params
    // const {data : session} = useSession();
    // const router = useRouter()
        
    // useEffect(() => {

    //     if (!session) {
    //         router.push('/')
    //     }

    // }, [session, router])
    // If the username is not present in the database, show a 404 page
    const checkUser = async () => {
        await connectDb()
        let u = await User.findOne({ username: params.username })
        if (!u) {
            return notFound()
        }
    }

    await checkUser()


    return (
        <UserPage username={username} />
    )

  
}

export default Page
