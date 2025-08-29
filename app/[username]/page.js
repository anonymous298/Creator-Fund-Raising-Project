// "use client"
import React from 'react'
// import { useRouter } from 'next/navigation'
// import { useSession } from 'next-auth/react'
// import { useEffect } from 'react'

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
    <div>
      This is user {params.username}
    </div>
  )
}

export default page
