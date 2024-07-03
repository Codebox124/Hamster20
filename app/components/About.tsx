'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../../varients";

const AboutUs = () => {
    return (
        <div id='about' className='relative mt-[50px] md:pt-[125px] lg:px-20 px-2'>
            <div className='justify-center flex'>
                <button className='bg-gradient-to-r from-[#FF3E02] to-[#F9A503] px-6 rounded-xl py-2 text-white about_a'>About</button>
            </div>
            <motion.div 
                variants={fadeIn('up', 0.4)} 
                initial='hidden' 
                whileInView="show" 
                viewport={{ once: true, amount: 0.6 }} 
                className='rounded-xl px-4 mt-[50px] md:mt-[150px] happy_a'
            >
                <div className='grid  md:grid-cols-1   lg:grid-cols-2 justify-between  gap-6 md:gap-16'>
                    <div className='grow mx-auto text-yellow'>
                        <div>
                            <motion.h1 
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, ease: 'easeInOut' }}
                                className='text-2xl md:text-4xl xl:text-5xl font-extrabold'
                            >
                                HAPPYHAMSTER20?
                            </motion.h1>
                        </div>
                        <div className='mt-4'>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.4, ease: 'easeInOut' }}
                                className='text-sm md:text-lg xl:text-xl flex flex-col font-montserrat gap-4 md:gap-12'
                            >
                                <span>In the wild world of the internet, a certain phenomenon has made waves: the sad hamster meme.</span>
                                <span>HappyHamster was repeatedly confronted with this "gloomy" image. But instead of complaining, he decided to take matters into his own hands. Thus, the HappyHamster20 team was formed, full of energy and good vibes, ready to shake up the world with a dose of humor and a big splash of hope.</span>
                                <span>Combining crypto know-how with a hefty dose of inspiration, they aim to show how to make the most of the digital age.</span>
                            </motion.span>
                        </div>
                        <div className='mt-[50px] flex lg:justify-start items-center   justify-center'>
                            <motion.button
                                variants={fadeIn('up', 0.4)}
                                initial='hidden'
                                animate='show'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='px-6 md:px-9 md:py-6 py-4 flex  text-white rounded-xl text-sm bg-gradient-to-r from-[#FF3E02] to-[#F9A503]'
                            >
                                Get the Whitepaper
                            </motion.button>
                        </div>
                    </div>
                    <div className='flex mt-[50px] lg:mt-0 justify-center lg:justify-end'>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
                            className='h-auto w-full md:w-[400px] border-4 rounded-3xl border-yellow'
                            src="/Frame 1 (1).png"
                            alt="Hamster"
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div 
                variants={fadeIn('up', 0.4)} 
                initial='hidden' 
                whileInView="show" 
                viewport={{ once: true, amount: 0.6 }} 
                className='relative rounded-xl p-6 md:p-10 text-yellow mt-16 md:mt-[230px] video_a'
            >
                <div className='absolute inset-0 flex justify-center items-center'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
                        className='w-full h-full md:w-[600px] md:h-[600px] bg-gradient-radial from-[#FF3E02] via-[#F9A503] to-transparent rounded-full opacity-50'
                    />
                </div>
                <div className='relative text-center'>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 1.2, ease: 'easeInOut' }}
                        className='text-[13px] md:text-4xl font-bold mb-2'
                    >
                        WATCH THE VIDEO BELOW
                    </motion.h1>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.4, ease: 'easeInOut' }}
                        className='text-sm md:text-sm font-montserrat font-light'
                    >
                        Check out this video to understand more about HappyHamster20
                    </motion.span>
                </div>
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    animate='show'
                    transition={{ duration: 1.5, delay: 1.6, ease: 'easeInOut' }}
                    className='relative   bg-yellow mt-3 md:mt-[72px] rounded-xl flex items-center justify-center'
                >
                    <video 
                        className='  h-full rounded-xl' 
                        controls 
                    >
                        <source src="/happyhamster.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default AboutUs;
