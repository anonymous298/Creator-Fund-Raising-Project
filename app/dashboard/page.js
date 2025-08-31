"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'
import { fetchUser, updateProfile } from '@/actions/useractions'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const { data: session, status, update } = useSession()
    const router = useRouter()
    const [formValues, setFormValues] = useState({})
    console.log(formValues)

    useEffect(() => {
        if (status === "loading") return; // wait until NextAuth resolves
        if (!session) router.push("/login");
        else getData();
    }, [session, status, router]);

    const getData = async () => {
        let user = await fetchUser(session.user.name)
        setFormValues(user)
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (data) => {
        update()
        await updateProfile(data, session.user.name)
        // console.log(value)

        toast.success('Profile Updated...')
    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hautoClose={1000}      // 3 seconds
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
                theme='light'
            />

            <div className="container w-[55%] flex flex-col justify-center items-center mx-auto pt-10 pb-20 max-[500px]:w-[90%]">
                <h3 className='text-white text-[26px] font-bold'>Welcome to your Dashboard</h3>

                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(formValues); }} className='flex flex-col w-[100%] gap-y-2'>
                    <div >
                        <p>Name</p>
                        <input value={formValues.name ? formValues.name : ''} onChange={handleChange} className='p-1.5 bg-gray-800 mt-1.5 rounded-[8px] w-[100%]' required={true} type="text" id='name' name='name' />
                    </div>


                    <div >
                        <p>Email</p>
                        <input value={formValues.email ? formValues.email : ''} onChange={handleChange} className='p-1.5 bg-gray-800 mt-1.5 rounded-[8px] w-[100%]' required={true} type="email" id='email' name='email' />
                    </div>


                    <div >
                        <p>Username</p>
                        <input value={formValues.username ? formValues.username : ''} onChange={handleChange} className='p-1.5 bg-gray-800 mt-1.5 rounded-[8px] w-[100%]' required={true} type="text" id='username' name='username' />
                    </div>

                    <div >
                        <p>Profile Picture</p>
                        <input value={formValues.profilepic ? formValues.profilepic : ''} onChange={handleChange} className='p-1.5 bg-gray-800 mt-1.5 rounded-[8px] w-[100%]' required={true} type="text" id='profilePic' name='profilepic' />
                    </div>

                    <div >
                        <p>Cover Picture</p>
                        <input value={formValues.coverpic ? formValues.coverpic : ''} onChange={handleChange} className='p-1.5 bg-gray-800 mt-1.5 rounded-[8px] w-[100%]' required={true} type="text" id='coverpic' name='coverpic' />
                    </div>

                    <button className="cursor-pointer w-[100%] text-black  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold rounded-lg text-[18px] px-5 py-2.5 text-center mt-1">Save</button>
                </form>
            </div>
        </div>
    )
}

export default Page