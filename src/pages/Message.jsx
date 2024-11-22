import React from 'react'
import Right from '../components/Message/Right'
import Left from '../components/Message/Left'

const Message = () => {
  return (
    <div className='w-full pt-[50px]'>
      <div className="z-10 flex gap-5 md:px-4 py-6">
          <div className=" w-full   z-10 ">
            <Left />
          </div>
      <div className="md:w-[350px] w-full z-10">
            <Right />
          </div>
      </div>
    </div>
  )
}

export default Message