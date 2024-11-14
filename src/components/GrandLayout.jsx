import React from 'react'
import Navbar from './Navbar/Navbar'
const GrandLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        
        <div className=' p-[20px] w-[100%] pt-[60px]'>
        {children}
        </div>
       
       
      
    </div>
  )
}

export default GrandLayout