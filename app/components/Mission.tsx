'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, easeInOut } from 'framer-motion'

import { fadeIn } from "../../varients"
import { once } from "events"


gsap.registerPlugin(ScrollTrigger);

export default function Mission() {




  return (
    <div className=' max-w-[1640px] md:mb-[179px] mb-10 mt-10 md:mt-[215px] mx-auto'>
      <div className='max-w-[1370px] mx-auto '>
        <div className='flex justify-center mb-6 md:mb-[60px] mission_a'>
          <button className=' bg-orange px-6 rounded-md py-2 text-white'>
            Mission
          </button>
        </div>

        <motion.div variants={fadeIn('up', 0.2)} initial= 'hidden' whileInView={"show"} viewport={{once:false, amount: 0.6}} className='text-center mb-[60px] p-5 xl:p-0 text-yellow'>
          <motion.p  variants={fadeIn('down', 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: false, amount: 0.6 }} className=' md:text-[20px] text-[12px] font-light'>
            <span className='text_a'>Welcome to HappyHamster20, where happiness meets crypto! Our mission is simple:</span> <span className='text_a'>to spread joy and positivity through innovative rewards and impactful initiatives.</span> <span className='text_a'>Join us on this exciting journey as we transform the world of cryptocurrency, one happy moment at a time.</span>
          </motion.p>
        </motion.div>

        <motion.div  viewport={{ once: true, amount: 0.6 }} className='grid md:grid-cols-1 lg:grid-cols-3 gap-9 my-5 p-5 xl:p-0'>
          <div className='from-[#FF3E02] to-[#F96A03] bg-gradient-to-r p-5 rounded-3xl col-span-1 block md:flex lg:block justify-between items-center gap-5 card_a'>
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

          <div className='from-[#FF3E02] to-[#F96A03] bg-gradient-to-r p-5 rounded-3xl col-span-1 block md:flex lg:block justify-between items-center gap-5 card_b'>
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

          <div className='from-[#FF3E02] to-[#F96A03] bg-gradient-to-r p-5 rounded-3xl col-span-1 block md:flex lg:block justify-between items-center gap-5 card_c'>
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
        </motion.div>
      </div>
    </div>
  )
}
