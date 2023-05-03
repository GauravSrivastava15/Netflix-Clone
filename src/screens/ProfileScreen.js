import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const ProfileScreen = () => {
    const user = useSelector(selectUser)

    const logout = async () => {
        try{
            await signOut(auth) 
        }catch (err) {
            console.log(err)
        }
    }


  return (
      <div className='h-screen bg-black text-white'>
        <Navbar />
        <div className='flex flex-col w-1/2 ml-auto mr-auto pt-[8%] max-w-[800px]'>
            <h1 className='text-6xl font-medium border-b-black mb-5'>Edit Profile</h1>
            <div className='flex '>
                <img className='h-24' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='img'/>
                <div className='flex-1 ml-6'>
                    <h2 className='bg-gray-500 text-base p-4 pl-5'>{user.email}</h2>
                    <div className='mt-5'>
                        <h3 className='pb-3 border-s-zinc-800'>Plans</h3>
                        <button onClick={logout} className='bg-red-600 px-5 py-2 mt-[5%] w-full text-base border-none font-semibold'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen