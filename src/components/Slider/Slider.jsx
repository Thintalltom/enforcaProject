import React from 'react'
import { motion } from 'framer-motion';
import { SiBinance } from "react-icons/si";
import { SiCoinbase } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa6";
import { SiShopify } from "react-icons/si";

// Define the array of slides with numbers
const slides = [
    { number: <SiBinance /> },
    { number: <SiCoinbase /> },
    { number: <FaCcPaypal /> },
    { number: <SiShopify /> },
    
];

const Slider = () => {
    const duplicatedSlides = [...slides, ...slides];
  return (
    <div className='xs:mt-[70px] lg:mt-[0px]'>
        <p className='poppins-semibold text-center'>We are trusted by professionals from</p>
    <div className=" w-full overflow-hidden lg:mt-[30px] xs:mt-[50px] bg-white ">
    {/* Wrapping div for seamless looping */}
    <motion.div
        className="flex "
        animate={{
            x: ['-100%', '0%'],
            transition: {
                ease: 'linear',
                duration: 15,
                repeat: Infinity,
            }
        }}
    >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, index) => (
            <div key={index} className="flex-shrink-0  cursor-pointer" style={{ width: `${100 / slides.length}%` }}>
                <div className="flex flex-col items-center justify-center h-full text-5xl text-blue-800">
                    {slide.number}
                </div>
            </div>
        ))}
    </motion.div>
</div>
</div>
  )
}

export default Slider