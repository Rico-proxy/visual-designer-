import Link from 'next/link';
import React from 'react'
import { BiBookContent,BiNews,BiMobileLandscape,BiRightArrowAlt } from "react-icons/bi";
import { TfiRulerPencil } from "react-icons/tfi";
const Card = () => {
  return (
         <div className='pt-[40px]'>
           <div className='grid grid-cols-3  mx-[300px] text-black  absolute  '>
                 <div className='flex flex-col space-y-[100px]'>
                   <div className='p-4 bg-black border text-start  shadow-lg text-blue-200 py-8 mx-2'>
                    <div className='text-blue-200'>
                        <BiMobileLandscape  className='text-[50px] '/>
                    </div>
                    <div className='pt-5 space-y-4'>
                        <p className='boy text-2xl font'>UI DESIGN</p>
                        <p className='text-sm man'>Lorem ipsum is simply text <br/>of the printing type.</p>
                        <div className='flex items-center text-blue-200'>
                         <p><Link href="/">KNOW MORE </Link></p>
                         <BiRightArrowAlt/>
                        </div>
                    </div>
                     </div>
                     <div className='grid grid-rows-2 man gap-3 pr-3 pb-4'>
                        <div className='bg-black border shadow-lg space-y-1  py-2 '>
                            <p className='text-[30px] font-extrabold text-blue-200'>60+</p>
                            <p className='text-white'>Clients</p>
                        </div>
                        <div className='bg-black border shadow-lg space-y-1  py-2'>
                            <p className='text-[30px] font-extrabold text-blue-200'>122+</p>
                            <p className='text-white'>Completed Projects</p>
                        </div>
              
              
                    </div>
                  </div>
                 <div className='flex flex-col space-y-[100px]'>
                  
                   <div className='p-4 bg-blue-200 border text-start text-black shadow-lg py-8 mx-2'>
                        <div className=''>
                            <BiBookContent className='text-[50px] '/>
                        </div>
                        <div className='pt-5 space-y-4'>
                            <p className='boy text-2xl'>PRODUCT</p>
                            <p className='text-sm man'>Lorem ipsum is simply text <br/>of the printing type.</p>
                            <div className='flex items-center text-black'>
                            <p><Link href="/">KNOW MORE </Link></p>
                            <BiRightArrowAlt/>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 man gap-3'>
                        <div className='bg-black border shadow-lg space-y-1  py-2 '>
                            <p className='text-[30px] font-extrabold text-blue-200'>08</p>
                            <p className='text-white'>Years Experience</p>
                        </div>
                        <div className='bg-black border shadow-lg space-y-1  py-2'>
                            <p className='text-[30px] font-extrabold text-blue-200'>10</p>
                            <p className='text-white'>Achievements</p>
                        </div>
              
              
                    </div>
                </div>
              <div className='flex flex-col space-y-[100px]'>
                   <div className='p-4 bg-black border text-start  shadow-lg py-8 mx-2 text-blue-200'>
                    <div className='text-blue-200'>
                        <TfiRulerPencil className='text-[50px] '/>
                    </div>
                    <div className='pt-5 space-y-4'>
                        <p className='boy text-xl'>BRANDING</p>
                        <p className='text-sm man'>Lorem ipsum is simply text<br/> of the printing type.</p>
                        <div className='flex items-center '>
                         <p><Link href="/">KNOW MORE </Link></p>
                         <BiRightArrowAlt/>
                        </div>
                    </div>
                    </div>
                    <div className='text-blue-200 man leading-none pt-8 pl-6'>
                        <div>
                            <p className='text-[80px] font-extrabold'>12</p>
                            <p className='text-white font-bold text-[20px]'>Years Experience</p>
                        </div>
                     </div>
            </div>
    </div>
  
    
    </div>  
  )
}

export default Card