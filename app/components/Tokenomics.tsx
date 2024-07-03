'use client';
import Image from 'next/image';
import React from 'react';
import { IoIosCopy } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function Tokenomics() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.005,
        duration: 0.25,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <section id="tokenomics" className='text-yellow px-4 lg:px-20 mt-10 mx-auto'>
        <div className=' mx-auto w-full md:w-fit'>
          <div className='flex justify-center tok_but'>
            <motion.button
              initial={{ y: -20, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className='bg-orange px-6 rounded-md py-2 text-white'
            >
              Tokenomics
            </motion.button>
          </div>

          <motion.div
            className='p-3 xl:p-0 grid lg:grid-cols-6 mt-[48px] lg:col-span-7 items-center'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false }}
            variants={containerVariants}
          >
            <div className='lg:col-span-4 col-span-4 w-full'>
              <motion.div
                className='grid grid-cols-2 gap-5 items-center w-full justify-between md:gap-14'
                variants={containerVariant}
              >
                <motion.div variants={itemVariants} className='col-span-1 tok_a'>
                  <p className='font-normal text-xl md:font-extrabold '>Circulation</p>
                  <p className='text-lg uppercase font-montserrat font-normal md:font-semibold'>200 Billion HPH</p>
                </motion.div>
                {[
                  { text: 'Airdrop Capital', value: '15%', class: 'tok_b' },
                  { text: 'Presale Reserve', value: '25%', class: 'tok_c' },
                  { text: 'Future Treasure', value: '30%', class: 'tok_d' },
                  { text: 'Marketing Reserve', value: '20%', class: 'tok_e' },
                  { text: 'Liquidity', value: '10%', class: 'tok_f' },
                ].map((item, index) => (
                  <motion.div key={index} className={`col-span-1 items-center gap-2 flex ${item.class}`} variants={itemVariants}>
                    <div className='p-7 from-[#FF3E02] to-[#F9A503] border-yellow border-2 bg-gradient-to-r rounded-md'></div>
                    <div>
                      <p className='font-normal md:font-extrabold text-lg uppercase'>{item.value}</p>
                      <p className='font-montserrat font-thin' >{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className='bg-[#FFA500] mt-[160px]   justify-between items-center p-1 rounded-md w-[660px] tok_in hidden lg:flex'
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div className='p-3 rounded-md bg-white text-[#666666]'>CA</div>
                <div className='text-white uppercase overflow-hidden hidden lg:block'>
                  xxxxxxxxxxxxxxxxxxxx...
                </div>
                <div className='text-white uppercase overflow-hidden w-full block md:hidden'>
                  xxxxxxxxx...
                </div>
                <div className='p-3 rounded-md bg-white text-[#666666] cursor-pointer'>
                  <IoIosCopy size={25} />
                </div>
              </motion.div>
            </div>

            <motion.div
              className='z-40 col-span-2 object-cover md:block hidden tok_img'
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className='absolute inset-0 bg-gradient-to-r rounded-full blur-xl from-transparent via-[#f9a7037b] to-transparent opacity-50 gradient-overlay '></div>
              <img className='h-auto w-full object-cover' src='/tokenomics.png' alt='Hero Image' />
            </motion.div>
          </motion.div>

          <div className='w-full mt-12 block lg:hidden relative'>
            <motion.div
              className='bg-[#FFA500] z-50 flex lg:hidden justify-between items-center p-1 rounded-md w-full tok_in absolute bottom-24 '
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className='p-3 rounded-md bg-white text-[#666666]'>CA</div>
              <div className='text-white uppercase overflow-hidden hidden md:block text-center w-full'>
                xxxxxxxxxxxxxxxxxxxx...
              </div>
              <div className='text-white uppercase overflow-hidden w-full block md:hidden text-center'>
                xxxxxxxxx...
              </div>
              <div className='p-3 rounded-md bg-white text-[#666666] cursor-pointer'>
                <IoIosCopy size={25} />
              </div>
            </motion.div>

            <motion.div
              className='z-40 col-span-2 object-cover block md:hidden tok_img mx-auto'
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className='absolute inset-0 bg-gradient-to-r rounded-full blur-xl from-transparent via-[#f9a7037b] to-transparent opacity-50 gradient-overlay '></div>
              <img className='h-auto w-full object-cover' src='/tokenomics.png' alt='Hero Image' />
            </motion.div>
          </div>
        </div>
      </section>

      <div className='bg-yellow md:py-6 py-3 z-50'>
        <ScrollingText />
      </div>

      <section className='mx-auto py-10 md:py-28'>
        <div className=' mx-auto flex items-center justify-between relative'>
          <div className='md:flex flex-col justify-between h-full hidden'>
            <motion.div
              className='mb-auto absolute -top-[90px] xlg:-top-[70px] left-[10px] xlg:left-[70px] xl:left-11 aimg'
              initial={{ x: -100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Image src='/hamster image 3.png' width={130} height={130} alt='' />
            </motion.div>
            <motion.div
              className='mt-auto absolute -bottom-5 lg:-bottom-7 left-[150px] lg:left-[170px] xlg:left-[220px] aimg'
              initial={{ x: -100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Image src='/hamster image 1.png' width={100} height={100} alt='' />
            </motion.div>
          </div>
          <div className='text-center max-w-none md:max-w-[700px] lg:max-w-[900px] xlg:max-w-[1200px] mx-4'>
            <motion.p
              className='text-yellow font-black text-2xl md:text-4xl lg:text-6xl xl:text-7xl uppercase leading-normal md:leading-[70px] text'
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {Array.from('Spreading joy and financial freedom through innovative cryptocurrency solutions.').map(
                (letter, index) => (
                  <span key={index}>{letter}</span>
                )
              )}
            </motion.p>
          </div>
          <div className='md:flex flex-col justify-between h-full hidden'>
            <motion.div
              className='mb-auto absolute right-16 lg:right-4 xlg:right-28 xl:right-16 top-[55px] aimg'
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Image src='/hamster image 4.png' width={80} height={80} alt='' />
            </motion.div>
            <motion.div
              className='mt-auto absolute -bottom-16 lg:-bottom-[75px] xlg:-bottom-12 right-20 xlg:right-24 aimg'
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Image src='/hamster image 2.png' width={150} height={150} alt='' />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
function ScrollingText() {
  return (
    <div className='scrolling-text-container'>
      <div className='scrolling-text flex gap-3 items-center'>
        <span className='text-brown text-4xl md:text-7xl'>PRESALE STARTS SOON</span>
        <img className='w-14 h-14' src='/hamster image 4.png' alt='Hamster' />
        <span className='text-brown text-4xl md:text-7xl'>PRESALE STARTS SOON</span>
      </div>
    </div>
  );
}