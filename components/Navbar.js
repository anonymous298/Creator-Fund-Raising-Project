"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { searchCreator } from '@/actions/useractions'
import { notFound, useRouter } from 'next/navigation'
// import { notFound } from 'next/navigation'
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { searchCreator } from '@/actions/useractions'
// import { ToastContainer } from 'react-toastify'
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  // const [searchCreator, setSearchCreator] = useState('')
  const router = useRouter();
  // console.log(session)
  // console.log(searchCreator)

  const handleSubmit = async (data) => {

    if (data.searchusername !== '') {

      const username = await searchCreator(data);
      console.log(username)

      if (username) {
        router.push(`/user/${username.username}`)
        // toast.success('Profile Updated...')
      }

      else {
        return router.push('/notfounduser')
      }

    }


    // !username && <NotFound />
  }

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <div className=' bg-gray-900 p-3'>
      <div className='flex justify-between w-[85%] mx-auto items-center max-[400px]:w-[95%]'>
        <Link href={'/'} className='logo text-2xl font-bold text-white cursor-pointer'>Patreon</Link>

        <div className='flex justify-center items-center gap-x-9 relative max-[450px]:gap-x-3'>
          {/* <div className='flex gap-x-4 justify-center items-center'> */}

          <Link href={'/'} className='max-[740px]:hidden text-purple-500 underline text-[17px] font-semibold hover:text-purple-200 transition-all'>Home</Link>

          <img src="/search.png" alt="search" className='min-[740px]:hidden' onClick={toggleSearch} />

          {showSearch && <form action={handleSubmit} className='h-[100%] absolute top-16 right-10 flex min-[740]:hidden justify-center items-center '>
            <input name='searchusername' type="text" className='border-none bg-white rounded-tl-2xl rounded-bl-2xl p-1 outline-none placeholder:text-gray-500 pl-3 ' placeholder='Search creators' />
            <button className='bg-purple-600 h-[100%] p-1 text-white font-bold rounded-tr-2xl rounded-br-2xl px-2 hover:bg-purple-800 cursor-pointer'>search</button>
          </form>}

          <form action={handleSubmit} className='h-[100%] flex justify-center items-center max-[740px]:hidden'>
            <input name='searchusername' type="text" className='border-none bg-white rounded-tl-2xl rounded-bl-2xl p-1 outline-none placeholder:text-gray-500 pl-3 ' placeholder='Search creators' />
            <button className='bg-purple-600 h-[100%] p-1 text-white font-bold rounded-tr-2xl rounded-br-2xl px-2 hover:bg-purple-800 cursor-pointer'>search</button>
          </form>

          {session && <>
            <button onClick={() => setShowDropdown(!showDropdown)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 hover:bg-purple-700 focus:outline-none font-medium rounded-[12px] cursor-pointer text-sm px-2 py-2 text-center inline-flex items-center dark:bg-purple-600  " type="button">Account<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            <div id="dropdown" className={`z-10 ${showDropdown ? "" : "hidden"} absolute max-[740px]:left-[15px] right-0 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href="/dashboard" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/user/${session.user.name}`} onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                </li>
                <li>
                  <button onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-[100%] text-start cursor-pointer">Sign out</button>
                </li>
              </ul>
            </div></>}

          {/* </div> */}

          {/* {session && <button className='p-2 px-5 bg-purple-600 rounded-2xl text-white font-semibold hover:bg-purple-650 cursor-pointer shadow-purple-800 hover:shadow-lg transition-all' onClick={() => signOut()}>Log Out</button>} */}

          {!session && <Link href={'/login'} className='p-1 px-5 bg-purple-600 rounded-2xl text-white font-semibold hover:bg-purple-650 cursor-pointer shadow-purple-800 hover:shadow-lg transition-all'>Log In</Link>}

        </div>
      </div>
    </div>
  )
}

export default Navbar
