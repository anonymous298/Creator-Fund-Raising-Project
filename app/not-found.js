import Link from 'next/link'
import React from 'react'


const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='border-2 bg-gray-900 rounded-2xl mx-auto p-6 h-[30vh] flex flex-col justify-between items-center shadow-purple-600 hover:shadow-lg cursor-pointer transition-all border-none'>
            <h3 className='text-white font-bold text-[30px]'>404 - Page Not Found</h3>
            
            <Link href={'/'}>
                <button className='text-purple-600 font-semibold text-[20px] cursor-pointer'>Return To Home Page</button>
            </Link>
        </div>
    </div>
  )
}

export default NotFound
