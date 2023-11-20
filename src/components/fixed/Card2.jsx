import React from 'react'
import { BiBookContent,BiNews,BiMobileLandscape,BiRightArrowAlt } from "react-icons/bi";
import { TfiRulerPencil } from "react-icons/tfi";
import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';
const Card2 = () => {
  return (
    <div className=' pt-10 '> 
            <div className='grid grid-cols-2 gap-5 text-white pb-36 mx-[300px] '>
                    <div>
                            <div className='text-start'>
                                  <p className='text-[25px] boy'>FEATURED PROJECTS</p>
                                  <p className='man'>Lorem ipsum dolor sit amet,consectetur</p>
                            </div>
                            <div className='pt-6' >
                                   <div className='bg-black border  border-blue-200 shadow-lg py-[40px]  '>
                                    <Image src="/assets/craft.png" alt='' height={250} width={250} className='mx-auto rounded-2xl '/>  
                                  </div>
                            </div>
                            <div className='text-start text-blue-200 '>
                                  <p className='boy text-[30px] text-white'>Crypto </p>
                                  <div className='flex justify-start items-center'>
                                     <p className='text-[12px] man font-bold'><Link href="/" >KNOW MORE </Link></p>
                                     <BiRightArrowAlt/>
                                  </div>
                                      
                             </div>
                             
                            
                    </div>
                    <div>
                            <div className='text-end'>
                                  <button className='bg-blue-400 text-white text-[10px] px-5 py-2 man'>
                                     <Link href="/">VIEW ALL</Link>
                                  </button>
                            </div>
                            <div className='pt-14'>
                                  <div className='bg-black border  border-blue-200 shadow-lg py-[40px]  '>
                                    <Image src="/assets/craft2.png" alt='' height={250} width={250} className='mx-auto rounded-2xl '/>  
                                  </div>
                            </div>
                            <div className='text-start text-blue-200 '>
                                  <p className='boy text-[30px] text-white'>App Interface </p>
                                  <div className='flex justify-start items-center'>
                                     <p className='text-[12px] man font-bold'><Link href="/" >KNOW MORE </Link></p>
                                     <BiRightArrowAlt/>
                                  </div>
                                      
                            </div>
                            
                    </div>
              </div>
              <div className='grid grid-rows-2   '>
                <div className="bg-white  h-[60vh] relative">
                     <div className='grid grid-cols-2 gap-5 mx-[300px] absolute  top-[-100px] '>
                     <div >
                            
                            <div className=''>
                                  <div className='bg-black border  border-blue-200 shadow-lg py-[40px] px-[35px]  '>
                                    <Image src="/assets/craft3.png" alt='' height={250} width={250} className='mx-auto rounded-2xl '/>  
                                  </div>
                            </div>
                            <div className='text-start text-blue-300 '>
                                  <p className='boy text-[30px] text-black'>NFT'S</p>
                                  <div className='flex justify-start items-center'>
                                     <p className='text-[12px] man font-bold'><Link href="/" >KNOW MORE </Link></p>
                                     <BiRightArrowAlt/>
                                  </div>
                                      
                            </div>
                            
                        </div>
                        <div>
                           
                            <div className=''>
                                  <div className='bg-black border  border-blue-200 shadow-lg py-[40px]  px-[35px]'>
                                    <Image src="/assets/craft5.png" alt='' height={250} width={250} className='mx-auto rounded-2xl '/>  
                                  </div>
                            </div>
                            <div className='text-start text-blue-300 '>
                                  <p className='boy text-[30px] text-black'>UI/UX</p>
                                  <div className='flex justify-start items-center'>
                                     <p className='text-[12px] font-bold man'><Link href="/" >KNOW MORE </Link></p>
                                     <BiRightArrowAlt/>
                                  </div>
                                      
                            </div>
                            
                        </div>
                        
                         
                     </div>
                     
                </div>
                <div className='h-[40vh]'>
                
                         <div className=' relative  top-[-90px]  '>
                         <div className='bg-black border border-blue-200 mx-[300px] grid grid-cols-2 p-10 justify-items-center items-center gap-3'>
                            <div className='text-start'>
                                    <div className='man text-3xl text-white font-bold pb-4'>
                                        <h1>
                                            Let's work together on your next project
                                        </h1>
                                    </div>
                                    <div className='man text-white text-sm'>
                                            I thank God for letting me finish this project, it stressed me like stupid
                                    </div>
                            </div>
                            <div>
                            <button className='bg-blue-400 text-white text-[10px] px-5 py-2 man'>
                                     <Link href="/">CONTACT</Link>
                                  </button>
                            </div>
                         </div>
                      </div> 

                      
                </div>
              </div>
              
        
      </div>
      
     
  )
}

export default Card2