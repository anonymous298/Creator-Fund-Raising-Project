import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-gray-800 p-3'>
      <div className='flex justify-between w-[80%] mx-auto items-center'>
        <div className="logo text-2xl font-bold text-white">Patreon</div>

        <button className='p-2 px-5 bg-purple-600 rounded-2xl text-white font-semibold hover:bg-purple-700 cursor-pointer'>Log In</button>
      </div>
    </div>
  )
}

export default Navbar
