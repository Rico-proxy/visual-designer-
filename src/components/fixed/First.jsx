import React from 'react'
import Slide from '../animation/Slide'
import Link from 'next/link'
const First = () => {
  return (
    <div className='flex items-center justify-center space-x-[70px]'>
      
        <div>
        <Slide/>
        </div>
        <div className='flex flex-col text-start man space-y-3 pt-[140px] '>
            <p className="text-blue-200 text-[30px] ">Hello Im Agetha</p>
            <p className='text-blue-200 text-[40px] boy font-[20px]'>Visual Designer</p>
           <div className='text-gray-200 text-xl '>
           <p>I'm your friendly neighborhood visual virtuoso!<br/> I turn wild ideas into visual adventures that pop off the screen.</p>
           </div>
           <div >
              <button className='bg-blue-400 text-white text-[10px] px-5 py-2 man '>
                    <Link href="/">ABOUT ME</Link>
                </button>
           </div>
            
        </div>
        
    </div>
  )
}

export default First