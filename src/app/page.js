import Card from '@/components/fixed/Card'
import First from '@/components/fixed/First'
import Image from 'next/image'
import Link from 'next/link'
import Card2 from '@/components/fixed/Card2'
import { BiBookContent,BiNews,BiMobileLandscape,BiRightArrowAlt } from "react-icons/bi";
import Footer from '@/components/fixed/Footer'
export default function Home() {
  return (
    <main className="  h-[100vh] flex-col  text-center justify-between ">
      <First/>
      <section className=''>
        <div className='grid grid-cols-2 text-white min-h-screen relative '>
              <div className='bg-white  '>
                  <Card/>
              
                  
              </div>
              <div className=''>
                      
              </div>
        </div>
        
      </section>
      <section className='relative'>
            <Card2/>
      </section>
      <Footer/>
    </main>
  )
}
