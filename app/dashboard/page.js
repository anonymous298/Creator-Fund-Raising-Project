"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'

const page = () => {
    const {data : session} = useSession()
    const router = useRouter()
    
    useEffect(() => {

        if (!session) {
            router.push('/login')
        }

    }, [session, router])

  return (
    <div>
    
    </div>
  )
}

export default page
