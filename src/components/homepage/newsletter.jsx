import React, { useRef } from 'react'
import { useScrollVisibility } from '../../hooks/useScrollHook';

export const Newsletter = () => {
    const headerContentRef = useRef(null);
      const { isVisible: headerContentContainer } =
        useScrollVisibility(headerContentRef);
  return (
    <div className="px-5 bg-gray-50">
    <div className="grid px-8 mx-auto mt-8 text-lg md:px-0 bg-gray-50 font-instrument max-w-7xl py-11 md:grid-cols-2 ">
        <div className="">
            <h2 className="text-xl font-semibold text-gray-900">Join our newsletter</h2>
            <p className='text-gray-600'>Banking technology that has your back.</p>
        </div>
       <div className="flex flex-col gap-4 mt-6 sm:items-center sm:flex-row md:mt-0 md:justify-end">
          <div className="">  <input type="text" className='max-w-[273px] h-11   border-gray-300 border rounded-lg px-3.5 py-2.5 bg-white ' placeholder='Enter your email'/></div>
            <button className="px-4 h-11 py-2 w-fit text-white bg-[#7F56D9] rounded-lg font-medium hover:bg-[#7F56D9]/70">Subscribe</button>
        </div>
    </div>
    </div>
  )
}
