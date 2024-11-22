import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import { IoChevronUp } from "react-icons/io5";

const Container = ({ children }) => {
  return (
    <div className='w-full max-w-[1200px] m-auto md:px-5'>
      {children}
      <div className='fixed bottom-0 right-0 z-30'>
        <div className='bg-white px-4 py-2 flex items-center justify-between w-[320px] border border-gray-400 rounded-lg'>
          <div className='flex items-center gap-3'>
            <div className='bg-green-600 rounded-full w-9 h-9  flex items-center justify-center'><p className='text-white'>D</p></div>
            <p className='font-semibold'>Messaging</p>
          </div>
          <div className='flex items-center gap-3'>
          <BsThreeDots className='text-xl'/>
          <PiNotePencilBold className='text-xl'/>
          <IoChevronUp className='text-xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container
