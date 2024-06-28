import Image from 'next/image'
import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='max-w-[1640px] text-white mx-auto'>
      <div className='bg-[#532D00]'>
        <div className=' max-w-[1400px] mx-auto py-10 px-3 xl:px-0'>
          <div className='flex justify-between item-center'>
            <div className='flex gap-1 items-center'>
              <div className='border border-white rounded-lg'>
                <Image src='/Logo.png' width={50} height={50} alt=''/>
              </div>
              
              <div className='uppercase'>
                <h1 className=' text-2xl font-extrabold'>Happy</h1>
                <p className=''>Hamster20</p>
              </div>
            </div>

            <div className='uppercase lg:flex gap-3 items-center hidden'>
              <div><a href="">about us</a></div>
              <div><a href="">mission</a></div>
              <div><a href="">roadmap</a></div>
              <div><a href="">tokenomics</a></div>
            </div>

            <div className='flex gap-5 items-center'>
              <div className='p-3 rounded-lg bg-white text-[#532D00]'>
                <a href=""><FaXTwitter size={22}/></a>
              </div>

              <div className='p-3 rounded-lg bg-white text-[#532D00]'>
                <a href=""><FaTelegramPlane size={22}/></a>
              </div>
            </div>
          </div>

          <div className='uppercase flex justify-between md:justify-center gap-0 md:gap-10 items-center lg:hidden mt-5 text-sm flex-wrap'>
            <div><a href="">about us</a></div>
            <div><a href="">mission</a></div>
            <div><a href="">roadmap</a></div>
            <div><a href="">tokenomics</a></div>
          </div>

          <div className='pt-8 text-center'>
            <p className=' font-light text-sm leading-5 md:leading-9'>The information on the HappyHamster20 website is for informational purposes only and does not constitute financial investments, or legal advice. Cryptocurrency  investments involve a high degree of risk, including the potential loss of your entire investment. Always conduct your own research and consult witha a qualified financial advisor before making any investment decisions.</p>
          </div>
        </div>
      </div>

      <div className='bg-[#341C00]'>
        <div className='max-w-[1400px] mx-auto py-3 px-3 xl:px-0 flex flex-col md:flex-row justify-between items-center'>
          <p>2024 by HappyHamster</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  )
}
