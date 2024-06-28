import Image from 'next/image'
import React from 'react'

export default function Tokenomics() {
  return (
    <>
      <section className='bg-white max-w-[1640px] mx-auto'>
        <div className='max-w-[1370px] mx-auto'>
          <div className='flex justify-center'>
            <button className=' bg-[#FFA500] p-2 rounded-md'>
              Tokenomics
            </button>
          </div>

          <div className='p-3 md:p-0'>
            <div className=' my-8 md:my-16 grid grid-cols-2 gap-3 items-center md:items-start md:gap-8 w-fit'>
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
          </div>
        </div>
      </section>

      <section className='bg-[#E1E1E1] max-w-[1640px] mx-auto my-16'>
        <div className='max-w-[1360px] mx-auto flex items-center justify-between relative'>
          <div className='flex flex-col justify-between h-full'>
            <div className='mb-auto absolute -top-[70px] left-11'>
              <Image src='/hamster image 3.png' width={130} height={130} alt='' />
            </div>
            <div className='mt-auto absolute -bottom-5 left-[220px]'>
              <Image src='/hamster image 1.png' width={100} height={100} alt='' />
            </div>
          </div>

          <div className='text-center max-w-[1200px] mx-4'>
            <p className='text-[#F6A002] font-black text-7xl uppercase leading-[70px]'>
              Spreading joy and financial freedom through innovative cryptocurrency solutions.
            </p>
          </div>

          <div className='flex flex-col justify-between h-full'>
            <div className='mb-auto  absolute right-20 top-[55px]'>
              <Image src='/hamster image 4.png' width={80} height={80} alt='' />
            </div>
            <div className='mt-auto absolute -bottom-12 right-24'>
              <Image src='/hamster image 2.png' width={150} height={150} alt='' />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
