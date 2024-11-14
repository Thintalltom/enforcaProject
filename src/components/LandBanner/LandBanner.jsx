import React from 'react'

const LandBanner = () => {
  return (
    <div className='bg-blue-50 mt-[40px] xs:h-[50vh] lg:h-[80vh] flex justify-center items- flex-col  rounded-[15px] shadow-sm shadow-slate-200'>
        <div className='flex justify-center items-center'>
        <p className='text-center poppins-semibold xs:text-xl  lg:text-4xl xs:w-[80%] lg:w-[70%]'><span className='bg-blue-900 text-white poppins-regular-italic p-[2px]'>Land your dream job faster</span> with
        personalized support every step of the way.</p>
        </div>
        
        <div className='text-center flex justify-center items-center mt-[10px]'>
        <p className='poppins-regular xs:w-[80%] lg:w-[50%] '>Never face the job search alone. Our app connects you with a dedicated mentor, 
            personalizes your CV for success, and equips you with interview skills through 
            realistic simulations and expert feedback.
             Land your dream job faster with all-in-one support.</p>
        </div>
   
    </div>
  )
}

export default LandBanner