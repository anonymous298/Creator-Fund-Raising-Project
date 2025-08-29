"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false)
  // const router = useRouter();

  return (
    <div className=' bg-gray-900 p-3'>
      <div className='flex justify-between w-[85%] mx-auto items-center'>
        <Link href={'/'} className='logo text-2xl font-bold text-white cursor-pointer'>Patreon</Link>

        <div className='flex justify-center items-center gap-x-9 relative'>
          {/* <div className='flex gap-x-4 justify-center items-center'> */}

            <Link href={'/'} className='text-purple-500 underline text-[17px] font-semibold hover:text-purple-200 transition-all'>Home</Link>

            {session && <>
              <button onClick={() => setShowDropdown(!showDropdown)}  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 hover:bg-purple-700 focus:outline-none font-medium rounded-[12px] cursor-pointer text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-purple-600  " type="button">Account<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div id="dropdown" className={`z-10 ${showDropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link href="/dashboard" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                    <Link href={`/${session.user.name}`} onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                  </li>
                  <li>
                    <button onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-[100%] text-start cursor-pointer">Sign out</button>
                  </li>
                </ul>
              </div></>}

          {/* </div> */}

          {/* {session && <button className='p-2 px-5 bg-purple-600 rounded-2xl text-white font-semibold hover:bg-purple-650 cursor-pointer shadow-purple-800 hover:shadow-lg transition-all' onClick={() => signOut()}>Log Out</button>} */}

          {!session && <Link href={'/login'} className='p-2 px-5 bg-purple-600 rounded-2xl text-white font-semibold hover:bg-purple-650 cursor-pointer shadow-purple-800 hover:shadow-lg transition-all'>Log In</Link>}

        </div>
      </div>
    </div>
  )
}

export default Navbar
