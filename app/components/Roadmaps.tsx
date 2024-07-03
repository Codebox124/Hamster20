'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Roadmaps() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        staggerChildren: 0.01
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const staggerText = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div id="roadmap" className='text-yellow  md:pt-[235px] mx-auto my-10'>
      <div className=' px-4 lg:px-20 mx-auto  lg:pt-36 pb-14'>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={fadeInUp}
          className='flex justify-center road_but'
        >
          <button className='bg-gradient-to-r from-[#FF3E02] to-[#F9A503] px-6 rounded-xl mb-[60px] py-2 text-white about_a'>Roadmaps</button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={staggerContainer}
          className='text-yellow text-center mb-6 md:mb-[119px] text-3xl md:text-7xl font-extrabold road_ham'
        >
          {Array.from('HAMSTERMAP').map((letter, index) => (
            <motion.span key={index} variants={staggerText}>{letter}</motion.span>
          ))}
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={staggerContainer}
          className='p-5 xl:p-0'
        >
          <motion.div
            variants={fadeInUp}
            className='py-5 md:py-9 flex flex-col-reverse md:flex-row text-lg justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_a'
          >
            <div className='w-full md:w-[50%] xl:w-[40%] font-thin text-left'>
              <p className='font-montserrat text-xs md:text-sm font-thin'>HappyHamster20 launches the presale. Early investors get a preferential price. The team uses part of the proceeds for a professional marketing strategy.</p>
            </div>
            <div className='w-full md:w-[50%] xl:w-[30%] text-xl lg:text-5xl  text-left md:text-right'>
              <p>PRESALE & MARKETING</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className='py-5 md:py-9 flex flex-col-reverse md:flex-row text-lg justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_b'
          >
            <div className='w-full md:w-[50%] xl:w-[40%] font-thin text-left'>
              <p className='font-montserrat font-thin text-xs md:text-sm'>Investors have the opportunity to acquire tokens during the presale. After the successful launch, one of the presale investors will receive a Tesla Model S as a prize.</p>
            </div>
            <div className='w-full md:w-[50%] xl:w-[30%] text-xl lg:text-5xl text-left md:text-right'>
              <p>INCENTIVE & INVESTMENT</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className='py-5 md:py-9 flex flex-col-reverse md:flex-row text-lg justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_c'
          >
            <div className='w-full md:w-[50%] xl:w-[40%] font-thin text-left'>
              <p className='font-montserrat font-thin text-xs md:text-sm'>To ensure a fair start of HappyHamster20, presale investors can claim their tokens on the website simultaneously with the exchange listing.</p>
            </div>
            <div className='w-full md:w-[50%] xl:w-[30%] text-xl lg:text-5xl text-left md:text-right'>
              <p>TOKEN CLAIMING</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className='py-5 md:py-9 flex flex-col-reverse md:flex-row text-lg justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_d'
          >
            <div className='w-full md:w-[50%] xl:w-[40%] font-thin text-left'>
              <p className='font-montserrat font-thin text-xs md:text-sm'>HappyHamster20 will be launched on PancakeSwap, one of the most popular decentralized exchanges. This provides the best trading environment and early liquidity.</p>
            </div>
            <div className='w-full md:w-[50%] xl:w-[30%] text-xl lg:text-5xl text-left md:text-right'>
              <p>DEX LAUNCH</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className='py-5 md:py-9 flex flex-col-reverse md:flex-row text-lg justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_e'
          >
            <div className='w-full md:w-[50%] xl:w-[40%] font-thin text-left'>
              <p className='font-montserrat font-thin text-xs md:text-sm'>The HappyHamster20 team will provide a substantial liquidity pool on PancakeSwap. To this end, 10% of the total token supply has been set aside.</p>
            </div>
            <div className='w-full md:w-[50%] xl:w-[30%] text-xl lg:text-5xl text-left md:text-right'>
              <p>PROVIDED LIQUIDITY</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className='py-5 md:py-9 flex flex-col-reverse md:flex-row text-lg justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_f'
          >
            <div className='w-full md:w-[50%] xl:w-[40%] font-thin text-left'>
              <p className='font-montserrat font-thin text-xs md:text-sm'>The HappyHamster20 team plans to distribute airdrops to the community irregularly in the future.</p>
            </div>
            <div className='w-full md:w-[50%] xl:w-[30%] text-xl lg:text-5xl text-left md:text-right'>
              <p>FUTURE PROSPECTS</p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
