import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className=' boy flex h-8 justify-around py-8 items-center text-center text-[12px] '>
        
            <div>
                 <Image src="/assets/logo.png" alt='me' width={75} height={75} />   
             </div>
            <div className='flex text-blue-200 font-bold space-x-4 animate-pulse'>
                <div>
                    <Link href="/">HOME</Link>
                </div>
                <div>
                    <Link href="/">PROJECT</Link>
                </div>
                <div>
                    <Link href="/">ABOUT</Link>
                </div>
                <div>
                    <Link href="/">CONTACT</Link>
                </div>
            </div>
    </div>
  )
}

export default Navbar