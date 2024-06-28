import Image from 'next/image'
import React from 'react'
import { IoIosCopy } from 'react-icons/io'

export default function Tokenomics() {
  return (
    <>
      <section className='bg-white max-w-[1640px] mx-auto'>
        <div className='max-w-[1370px] mx-auto'>
          <div className='flex justify-center'>
            <button className=' bg-[#FFA500] px-6 rounded-xl py-2 text-white'>
              Tokenomics
            </button>
          </div>

          <div className='p-3 xl:p-0 grid grid-cols-6 lg:col-span-7 items-center'>
            <div className='lg:col-span-4 col-span-4 w-fit'>
              <div className='grid grid-rows-1 md:grid-cols-2 my-8 lg:my-16 gap-3 items-center md:items-start md:gap-5 lg:gap-8 w-fit'>
                <div className=' col-span-1'>
                  <p className='  font-normal md:font-extrabold text-lg uppercase'>Circulation</p>
                  <p>200 Billion HPH</p>
                </div>
                <div className='flex gap-2 items-center col-span-1'>
                  <div className='p-7 bg-[#32CD32] rounded-md'></div>
                  <div>
                    <p className=' font-normal md:font-extrabold text-base md:text-lg'>15%</p>
                    <p className='font-thin text-sm md:text-base'>Airdrop Capital</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center col-span-1'>
                  <div className='p-7 bg-[#1E90FF] rounded-md'></div>
                  <div>
                    <p className=' font-normal md:font-extrabold text-base md:text-lg'>25%</p>
                    <p className='font-thin text-sm md:text-base'>Presale Reserve</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center col-span-1'>
                  <div className='p-7 bg-[#FF69B4] rounded-md'></div>
                  <div>
                    <p className=' font-normal md:font-extrabold text-base md:text-lg'>30%</p>
                    <p className='font-thin text-sm md:text-base'>Future Treasure</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center col-span-1'>
                  <div className='p-7 bg-[#00CED1] rounded-md'></div>
                  <div>
                    <p className=' font-normal md:font-extrabold text-base md:text-lg'>20%</p>
                    <p className='font-thin text-sm md:text-base'>Marketing Reserve</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center col-span-1'>
                  <div className='p-7 bg-[#FFA500] rounded-md'></div>
                  <div>
                    <p className=' font-normal md:font-extrabold text-base md:text-lg'>10%</p>
                    <p className='font-thin text-sm md:text-base'>Liquidity</p>
                  </div>
                </div>
              </div>
              
              <div className='bg-[#FFA500] flex justify-between items-center p-1 rounded-md w-[100%]'>
                <div className='p-3 rounded-md bg-white text-[#666666]'>
                  CA
                </div>

                <div className='text-white uppercase overflow-hidden hidden md:block'>
                  xxxxxxxxxxxxxxxxxxxx...
                </div>

                <div className='text-white uppercase overflow-hidden w-full block md:hidden'>
                  xxxxxxxxx...
                </div>

                <div className='p-3 rounded-md bg-white text-[#666666] cursor-pointer'>
                  <IoIosCopy size={25}/>
                </div>
              </div>
            </div>

            <div className='z-40 col-span-2 object-cover md:block hidden'>
              <img className='h-auto w-full object-cover' src="/tokenomics.png" alt="Hero Image" />
            </div>
          </div>
          
        </div>
      </section>

      <section className='bg-[#E1E1E1] max-w-[1640px] mx-auto py-10 md:py-28'>
        <div className='max-w-[1360px] mx-auto flex items-center justify-between relative'>
          <div className='md:flex flex-col justify-between h-full hidden'>
            <div className='mb-auto absolute -top-[90px] xlg:-top-[70px] left-[10px] xlg:left-[70px] xl:left-11'>
              <Image src='/hamster image 3.png' width={130} height={130} alt='' />
            </div>
            <div className='mt-auto absolute -bottom-5 lg:-bottom-7 left-[150px] lg:left-[170px] xlg:left-[220px]'>
              <Image src='/hamster image 1.png' width={100} height={100} alt='' />
            </div>
          </div>

          <div className='text-center max-w-none md:max-w-[700px] lg:max-w-[900px] xlg:max-w-[1200px] mx-4'>
            <p className='text-[#F6A002] font-black text-2xl md:text-4xl lg:text-6xl xl:text-7xl uppercase leading-normal md:leading-[70px]'>
              Spreading joy and financial freedom through innovative cryptocurrency solutions.
            </p>
          </div>

          <div className='md:flex flex-col justify-between h-full hidden'>
            <div className='mb-auto  absolute right-16 lg:right-4 xlg:right-28 xl:right-16 top-[55px]'>
              <Image src='/hamster image 4.png' width={80} height={80} alt='' />
            </div>
            <div className='mt-auto absolute -bottom-16 lg:-bottom-[75px] xlg:-bottom-12 right-20 xlg:right-24'>
              <Image src='/hamster image 2.png' width={150} height={150} alt='' />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
