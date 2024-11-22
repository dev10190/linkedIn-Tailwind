import React from 'react'
import logo from '../../assets/linkedin.png'

const Right = () => {
  return (
    <div>
      <div>
      <div className='px-4 py-4 flex flex-wrap gap-2 items-center justify-center rounded-xl'>
      <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>About</p>
      <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Accessibilty</p>
      <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Accessibilty</p>
      <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Help Center</p>
      <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Privacy & Terms</p>
      <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Ad Choice</p>
      <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Advertising</p>
      <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900 '>Business Service</p>
      <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Get the linkedIn app</p>
      <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>More</p>
    </div>
    <div className='px-4 rounded-xl flex items-center gap-2'>
      <img className='w-20' src={logo} alt="" />
      <p className='text-[12px] font-semibold text-gray-600'>LinkedIn Corporation @ 2024</p>
    </div>
      </div>
    </div>
  )
}

export default Right
