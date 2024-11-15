import React from 'react'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";
import logo from "../../assets/logo.png"
const Navbar = () => {
    const [show, setShow] = useState(false)
  return ( 
    <div >
        <div  className='bg-white shadow-sm  w-full h-[10vh] sm:hidden xs:hidden lg:flex p-[20px] items-center justify-between  '>
        <div className='border h-[50px] w-[100px]'>
            <img src={logo} alt='logo' className='size-full object-cover' />
        </div>
        <div className='flex gap-[20px]  '>
            <p className='text-blue-900 hover:text-blue-800 cursor-pointer poppins-regular text-sm'>For Mentorship</p>
            <p className='text-blue-900 hover:text-blue-800  cursor-pointer poppins-regular text-sm'>For job Seekers</p>
        </div>
        <div>
            <button className='bg-blue-900 hover:bg-blue-800 text-white rounded w-[10vw] h-[6vh] text-sm poppins-regular'>Get Started</button>
        </div>
        </div>

        <div className='lg:hidden flex justify-between  items-center h-[10vh] p-[10px] shadow-sm bg-white  '>
            <div className=' w-[30%]'>
                <img src='https://www.enforcatech.com/_nuxt/transparent2.C2Cshd8-.png' alt='logo' className=' w-[100%]' />
            </div>
            <div>
                <button onClick={()=>setShow(!show)} className='text-blue-900 font-bold justify-center items-center flex w-[20vw] h-[5vh] text-2xl'>{show ?  <HiMiniXMark /> : <RxHamburgerMenu /> }</button>
            </div>
            {
            show && <div className='absolute shadow-sm bg-white top-[10vh] left-0 w-screen h-[30vh]  flex flex-col items-center gap-[30px] justify-center'>
                <p className='text-blue-900 hover:text-blue-800 cursor-pointer'>For Mentorship</p>
                <p className='text-blue-900 hover:text-blue-800  cursor-pointer'>For job Seekers</p>
                <button className='bg-blue-900 hover:bg-blue-800 text-white rounded w-[50vw] h-[5vh] text-sm'>Get Started</button>
            </div>
            }

        </div>
    
    </div>
  )
}

export default Navbar