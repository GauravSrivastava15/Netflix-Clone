import React, { useState } from 'react'
import SignInScreen from './SignInScreen'

const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false)


  return (
    
    <div className='h-full relative '>
        
        <div>
            <img 
                className='fixed left-0 w-[170px] object-contain pl-5'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                alt='img'
            />
            
            <button onClick={() => setSignIn(true)}
                    className='fixed right-5 top-4 px-5 py-2 bg-red-600 text-white font-semibold cursor-pointer border-none rounded-md'>Sign In</button>
        </div>
        <div className='bg-gradient-to-tr from-black to-slate-800'>
            <img 
                className='w-full h-screen bg-cover bg-center  '
                src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" 
                alt="" 
            />

        </div>

        <div >
            {signIn ? (<SignInScreen />) : 
                (<>
                    <div className='bg-gradient-to-br from-black rounded-xl border-none z-1 text-gray-100 p-5 absolute top-[30%]  text-center'>
                        <h1 className='text-5xl font-semibold mb-5 shadow-sm  '>Unlimited films, TV programmes and more.</h1>  
                        <h2 className='text-2xl font-medium'>Watch anywhere. Cancle at any time</h2>
                        <h3 className='text-xl font-normal'>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='m-5'>
                        <form>
                            <input className='p-2 outline-none text-black h-8 w-1/3 border-none max-w-[600px]' type='email' placeholder='email address'/>
                            <button onClick={() => setSignIn(true)} className='px-2 md:px-4 font-semibold cursor-pointer  py-1 text-base bg-red-600 border-none'>GET STARTED</button>
                        </form>
                        </div>

                    </div>
                  </>)
            }
            
        </div>
    </div>
  )
}

export default LoginScreen