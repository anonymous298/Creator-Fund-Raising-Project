"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'
import { fetchUser } from '@/actions/useractions'

const UserPage = ({username}) => {
    const {data : session} = useSession();
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState({});

    // console.log(currentUser.profilepic)

    useEffect(() => {
        // if (!session) {
        //     router.push('/');
        // }

        // else {
        //     getData()
        // }

        getData()

    }, [session, router])

    const getData = async () => {
        let curUser = await fetchUser(username);
        setCurrentUser(curUser);
        // console.log(currentUser)
    }

  return (
    <div>
      <div className='relative'>

        <img className='w-full object-cover h-[40vh] max-[400px]:h-[30vh]' src={currentUser.coverpic} alt="pic" />

        <div className=' absolute top-[73%] left-[45%] max-[700px]:left-[39%] max-[400px]:left-[35%]'>
            <img className='size-33 max-[400px]:size-28 rounded-full outline-4 outline-gray-200' src={currentUser.profilepic} alt="pic" />
        </div>
      </div>

      <div className="info flex justify-center items-center mt-20 flex-col max-[450px]:mt-15">
        <h3 className='text-white text-[25px] '>@{currentUser.username}</h3>
        <p className='text-gray-300'>Creating Animated art for VTT's</p>
        <p className='text-gray-300'>19,973 members . 101 posts . $21,410/release</p>
      </div>

      <div className="displaySection flex justify-center items-center py-16">
        <div className="container w-[90%] h-[100%] flex gap-x-2  justify-center items-center max-[620px]:flex-col max-[620px]:gap-y-5">

            <div className="innercontainer1 h-[100%] w-[50%] bg-gray-900 rounded-[5px] p-10 max-[620px]:w-[97%]">
                <h3 className='text-white text-[21px] font-bold'>Top 10 Supporters</h3>

                <div className='mt-5'>
                    <ul className='flex flex-col gap-y-4'>
                        <li className='flex items-center font-semibold flex-wrap'><img src="/avatar.gif" alt="gif" className='size-8'/>talha donated <span className='font-bold ml-1 mr-1'>$100</span> with a message "Love you bro ❤️</li>
                        <li className='flex items-center font-semibold flex-wrap'><img src="/avatar.gif" alt="gif" className='size-8'/>talha donated <span className='font-bold ml-1 mr-1'>$100</span> with a message "Love you bro ❤️</li>
                        <li className='flex items-center font-semibold flex-wrap'><img src="/avatar.gif" alt="gif" className='size-8'/>talha donated <span className='font-bold ml-1 mr-1'>$100</span> with a message "Love you bro ❤️</li>
                        <li className='flex items-center font-semibold flex-wrap'><img src="/avatar.gif" alt="gif" className='size-8'/>talha donated <span className='font-bold ml-1 mr-1'>$100</span> with a message "Love you bro ❤️</li>
                        <li className='flex items-center font-semibold flex-wrap'><img src="/avatar.gif" alt="gif" className='size-8'/>talha donated <span className='font-bold ml-1 mr-1'>$100</span> with a message "Love you bro ❤️</li>
                        <li className='flex items-center font-semibold flex-wrap'><img src="/avatar.gif" alt="gif" className='size-8'/>talha donated <span className='font-bold ml-1 mr-1'>$100</span> with a message "Love you bro ❤️</li>
                        <li className='flex items-center font-semibold flex-wrap'><img src="/avatar.gif" alt="gif" className='size-8'/>talha donated <span className='font-bold ml-1 mr-1'>$100</span> with a message "Love you bro ❤️</li>
                    </ul>
                </div>
            </div>

            <div className="innercontainer2 h-[100%] w-[50%] bg-gray-900 rounded-[5px] p-10 max-[620px]:w-[95%]">
                <h3 className='text-white text-[21px] font-bold mb-5'>Make a Payment</h3>

                <form action="/" className=''>
                    <input type="text" placeholder='Enter Name' className='p-3 bg-gray-800 mt-1.5 rounded-[8px] w-[100%]' required={true}/>
                    <input type="text" placeholder='Enter Message'  className='p-3 bg-gray-800 mt-1.5 rounded-[8px] w-[100%]' required={true}/>
                    <input type="text" placeholder='Enter Amount' className='p-3 bg-gray-800 mt-1.5 rounded-[8px] w-[100%]' required={true}/>

                    <button  className="cursor-pointer w-[100%] text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-1">Pay</button>

                    <div className='flex gap-x-2 mt-2 text-start'>
                        <button className='p-3 bg-gray-800 text-white rounded-[7px] hover:bg-gray-500 cursor-pointer'>Pay 10$</button>
                        <button className='p-3 bg-gray-800 text-white rounded-[7px] hover:bg-gray-500 cursor-pointer'>Pay 50$</button>
                        <button className='p-3 bg-gray-800 text-white rounded-[7px] hover:bg-gray-500 cursor-pointer'>Pay 100$</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage