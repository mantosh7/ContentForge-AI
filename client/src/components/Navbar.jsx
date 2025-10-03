import { assets } from '@/assets/assets'
import { useUser, UserButton, useClerk } from '@clerk/clerk-react';
import { ArrowRight } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className='fixed z-5 w-full h-20 backdrop-blur-2xl  flex justify-around items-center py-8 px-4'>
      <img src={assets.mylogo} alt='logo' className='h-12 w-auto cursor-pointer' onClick={() => navigate("/")} />

      {user ? <UserButton /> : (
        <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer text-white px-10 py-2.5 bg-gradient-to-r from-purple-500 to-purple-900'>Get Started <ArrowRight className='w-4 h-4' /> </button>
      )
      }

    </div>
  )
}

export default Navbar
