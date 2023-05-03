import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const [show, handleShow] = useState(false);
    const navigate  = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        } else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])
  return (
    <div className={`fixed top-0 p-5 w-full h-20 z-1 ease-in duration-500 ${show && "bg-black"}`}>
        <div className='flex justify-between'>
            <img 
                onClick={() => navigate('/')}
                className='fixed left-0 w-[7rem] object-contain pl-5 cursor-pointer'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                alt='img'
            />

            <img 
                onClick={() => navigate('/profile')}
                className='right-5 cursor-pointer w-7 pt-3 absolute bg-opacity-20 '
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='img'
            />
        </div>
    </div>

  )
}

export default Navbar