import React from 'react'
import Image from 'next/image'
import { RiFacebookCircleLine,RiGithubLine,RiWhatsappLine,RiHandCoinLine} from "react-icons/ri";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='man bg-white  flex h-8 justify-around py-8 items-center text-center text-[12px] '>
        
             <div>
                 <Image src="/assets/logo.png" alt='me' width={75} height={75} />   
             </div>
            <div className='flex text-blue-300  text-2xl font-medium space-x-6'>
                <div>
                    <Link href="/">
                        <RiFacebookCircleLine/>
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        <RiGithubLine/>
                    </Link>
                </div>
                
                <div>
                    <Link href="/">
                        <RiWhatsappLine/>
                    </Link>
                </div>
            </div>
            <div className='text-blue-300 text-sm man flex'>
                <RiHandCoinLine/>
                <p>Created by Rico</p>
            </div>
    </div>
  )
}

export default Footer