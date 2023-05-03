import React, { useRef } from 'react'
import { auth } from '../firebase'
import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

const SignInScreen = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = async (e) =>{
        try{
            e.preventDefault()
            await createUserWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
            
        }catch (err){
            console.log(err)
            alert(err)
        }

    }

    const signIn =  (e) =>{
        
            e.preventDefault();
            signInWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => alert(error.message))
            console.log("Hello")
        
    }

  return (
    <div className='bg-gradient-to-br from-black rounded-xl absolute top-[30%] ml-[15%] md:ml-[40%] text-white max-w-[300px] p-[70px]  '>
        <form className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl pb-8 font-bold'>Sign In</h1>
            <input ref={emailRef} className=' h-8 outline-none rounded-sm w-56 text-black' placeholder='email' type='email' />
            <input ref={passwordRef} className='my-4 h-8 outline-none rounded-sm w-56 text-black' placeholder='password' type='password' />
            <button className='px-5 py-2 font-semibold bg-red-600 rounded-sm border-none mt-5 w-56' onClick={signIn} type='submit'>Sign In</button>
            <h4 className='text-xs pt-1 font-semibold text-left'>
                <span className='text-gray-300 '>New to Netflix? </span>
                <span className='hover:underline cursor-pointer hover:font-bold ' onClick={register}>Sign Up now</span>
            </h4>
        </form>
    </div>
  )
}

export default SignInScreen