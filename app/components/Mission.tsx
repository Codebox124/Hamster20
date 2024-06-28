import React from 'react'

export default function Mission() {
  return (
    <div className='bg-white max-w-[1640px] mx-auto'>
      <div className='max-w-[1370px] mx-auto py-16'>
          <div className='flex justify-center my-5'>
            <button className=' bg-[#008082] px-6 rounded-md py-2 text-white'>
              Mission
            </button>
          </div>

          <div className='text-center my-8 p-5 xl:p-0'>
            <p className=' leading-9 font-montserrat'>
              Welcome to HappyHamster20, where happiness meets crypto! Our mission is simple: to spread joy and positivity through innovative rewards and impactful initiatives. Join us on this exciting journey as we transform the world of cryptocurrency, one happy moment at a time.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 p-5 xl:p-0'>
            <div className='bg-[#008082] p-5 rounded-3xl col-span-1 block md:flex lg:block justify-between items-center gap-5'>
              <div className='w-auto md:w-[50%] lg:w-auto'>
                <img src="/Rectangle_uno.png" alt="financial freedom" />
              </div>

              <div className='text-white text-center w-auto md:w-[50%] lg:w-auto'>
                <p className='uppercase text-2xl my-4'>financial freedom</p>

                <p className='text-xs font-thin font-montserrat leading-7 my-4'>
                  Achieve financial freedom with our monthly rewards! Earn $1,500 every month for 12 months. Be a part of HappyHamster20 and enjoy the peace of mind that comes with consistent financial support.
                </p>
              </div>
            </div>

            <div className='bg-[#008082] p-5 rounded-3xl col-span-1 block md:flex lg:block justify-between items-center gap-5'>
              <div className='w-auto md:w-[50%] lg:w-auto'>
                <img src="/Rectangle _tres.png" alt="Tesla Reward" />
              </div>

              <div className='text-white text-center w-auto md:w-[50%] lg:w-auto'>
                <p className='uppercase text-2xl my-4'>tesla reward</p>

                <p className='text-xs font-thin leading-7 font-montserrat my-4'>
                  Invest early and drive away in style! All presale investors are automatically entered to win a Tesla Model S. Don’t miss out on this electrifying opportunity—join our presale now!
                </p>
              </div>
            </div>

            <div className='bg-[#008082] p-5 rounded-3xl col-span-1 block md:flex lg:block justify-between items-center gap-5'>
              <div className='w-auto md:w-[50%] lg:w-auto'>
                <img src="/Rectangle _dos.png" alt="financial freedom" />
              </div>

              <div className='text-white text-center w-auto md:w-[50%] lg:w-auto'>
                <p className='uppercase text-2xl my-4'>CHARITY PROJECT</p>

                <p className='text-xs font-thin leading-7 font-montserrat my-4'>
                  Making a difference together! We’re donating $100,000 to impactful charity projects. Join us in spreading happiness and support to those in need. Your investment in HappyHamster20 helps create a brighter future for everyone.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
