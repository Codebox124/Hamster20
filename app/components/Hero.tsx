'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2024-12-31T23:59:59');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference >= 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, '0');

  return (
    <div>
      <div className='py-4 px-4 lg:px-10'>
        <Navbar />
        <div className='items-center grid md:grid-cols-1 lg:grid-cols-2 mt-16'>
          <div className='text-yellow flex-1'>
            <div className='heroth'>
              <motion.span
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.6 }}
                className='block text-center lg:text-left hero_text'
              >
                GUESS WHO HAS BEEN WAITING FOR YOU?
              </motion.span>
              <motion.div
                variants={fadeIn('down', 0.8)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.6 }}
                className='flex flex-col p-0 m-0 font-extrabold text-center lg:text-left'
              >
                <span className='font-extrabold text-4xl sm:text-6xl md:text-9xl pl-0 md:pl-24 hero_text'>HAPPY</span>
                <span className='-mt-3 text-4xl md:text-7xl hero_text'>HAMSTER</span>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.6 }}
              className='z-40 -mt-8 grid justify-center items-center md:-mt-16 img relative'
            >
              <img className='h-auto lg:w-[860px]' src='/heroImg.png' alt='Hero Image' />
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.6 }}
            className='flex-1 mt-8 md:mt-0'
          >
            <div className='relative rounded-lg md:p-4'>
              <div className='absolute inset-0 bg-gradient-to-r rounded-full blur-xl from-transparent via-[#f9a7037b] to-transparent opacity-50 gradient-overlay'></div>

              <div className='relative z-10 text-center bg-yellow py-3 rounded-md border-2 border-brown text-brown mb-8 img'>
                <div className='text-4xl font-extrabold'>
                  {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                </div>
                <div className='text-sm'>Days &nbsp; Hours &nbsp; Minutes &nbsp; Seconds</div>
                <div className='text-sm mt-2'>Presale starts in</div>
              </div>
              <div className='relative z-10 bg-yellow border-brown border-2 text-brown p-6 rounded-lg mb-8 img'>
                <div className='border-2 border-brown p-3 rounded-lg'>
                  <div className='text-center text-brown font-extrabold text-xl mb-4'>BUY $HPH</div>
                  <div className='text-center text-brown text-sm mb-4'>1 $HPH = 0.000292USD</div>
                  <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4'>
                    <div className='bg-brown h-2.5 rounded-full' style={{ width: '50%' }}></div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-center text-brown text-xs'>USD raised</div>
                    <div className='text-center text-brown text-xs'>$50.00 / $100,000.00</div>
                  </div>
                </div>
                <div className='flex flex-col gap-4 my-8'>
                  <div className='p-4 rounded-lg border-brown border-2 flex justify-between items-center'>
                    <div className='text-brown text-sm'>What you pay (USD)</div>
                    <div className='flex items-center gap-2'>
                      <div className='text-brown'>$0.00</div>
                      <button className='bg-orange text-white p-2 rounded-lg'>BNB</button>
                    </div>
                  </div>
                  <div className='border-brown border-2 mb-4 p-4 rounded-lg flex justify-between items-center'>
                    <div className='text-brown text-sm'>What you receive (USD)</div>
                    <div className='flex items-center gap-2'>
                      <div className='text-brown'>$0.00</div>
                      <button className='bg-orange text-white p-2 rounded-lg'>$HPH</button>
                    </div>
                  </div>
                  <button className='bg-brown border-brown text-white w-full py-3 rounded-xl'>Connect Wallet</button>
                  <button className='from-[#FF3E02] to-[#F9A503] bg-gradient-to-r border text-white border-brown w-full py-3 rounded-xl'>Buy With Card</button>
                  <div className='text-center text-brown text-xs mt-4'>Powered by ********</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='bg-yellow md:py-6 py-3 lg:-mt-14 z-50'>
        <ScrollingText />
      </div>
    </div>
  );
}

function ScrollingText() {
  return (
    <div className='scrolling-text-container'>
      <div className='scrolling-text flex gap-3 items-center'>
        <span className='text-brown text-4xl md:text-7xl'>HAPPY HAMSTER</span>
        <img className='w-14 h-14' src='/hamster image 4.png' alt='Hamster' />
        <span className='text-brown text-4xl md:text-7xl'>HAPPY HAMSTER</span>
      </div>
    </div>
  );
}
