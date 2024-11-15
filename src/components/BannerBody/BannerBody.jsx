import React from 'react'
import robot from '../../assets/robot.png'
const BannerBody = () => {
  return (
    <div className='' >
        <div className='grid lg:grid-cols-2  h-[100vh]  sm:grid-rows-2 xs:mt-[2px] lg:mt-[30px]'>
            <div className='   p-[10px]'>
            <p className='text-[40px] poppins-bold'>First AI job Application and support platform</p>
            <p className='poppins-regular mt-[20px]'>Learn your dream Job  with personalised preparation and expert 
                guidance aided with our AI-powered job processing platform</p>

                <button className='bg-blue-900 hover:bg-blue-800 mt-[20px] text-white rounded lg:w-[10vw] xs:w-[40vw] h-[6vh] text-sm poppins-regular'>Get Started</button>
            </div>
            <div className=' flex justify-center items-center   lg:h-[80vh] xs:h-[40vh] '>
                <img src={robot} alt='robot' className=' lg:object-contain xs:object-cotain' />
            </div>
          

        </div>
            
    </div>
  )
}

export default BannerBody