import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mt-[10%] bg-blue-900'>
        <div className='bg-blue-900 h-[10vh] xs:flex-col lg:flex-row flex justify-around items-center text-white'>
            <p className='poppins-semibold cursor-pointer'>Enforca</p>
            <div className='flex xs:gap-[5px] lg:gap-[30px] xs:flex-col lg:flex-row text-xs poppins-light'>
            <p className='cursor-pointer'>Terms and Condition</p>
            <p className='cursor-pointer'>Privacy Policy</p>
            <p className='cursor-pointer'>Cookie </p>
            </div>
           
            <p className='poppins-regular text-xs cursor-pointer'>© 2021 Enforca. All rights reserved.</p>
        </div>
        <div className='bg-blue-900 h-[10vh] xs:mt-[30px] flex gap-[30px] justify-center items-center text-white'>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaWhatsapp />
        </div>
    </div>
  )
}

export default Footer