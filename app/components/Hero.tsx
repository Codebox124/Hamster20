'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { fadeIn } from '../../varients';

export default function Hero() {


    return (
        <div>
            <div className='py-4 px-4 lg:px-10'>
                <Navbar />
                <div className='items-center  mt-16'>
                    <div className='text-yellow flex-1'>
                        <div className='heroth'>



                            <motion.div
                                variants={fadeIn('up', 0.8)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: true, amount: 0.6 }}
                                className='flex flex-col md:gap-10 p-0 m-0 font-bold md:font-extrabold text-center'
                            >
                                <motion.span
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className='font-extrabold text-lg sm:text-lg md:text-[40px] hero_text'
                                >
                                    WELCOME TO
                                </motion.span>

                                <motion.span
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    className='font-extrabold text-4xl sm:text-6xl md:text-[140px]   hero_text'
                                >
                                    HAPPY
                                </motion.span>

                                <motion.span
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                    className=' text-4xl md:text-[200px] hero_text'
                                >
                                    HAMSTER
                                </motion.span>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ scale: 0.45, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2 }}
                            className='z-40 -mt-8 grid justify-center items-center md:-mt-16 img relative'
                        >
                            <img className='h-auto lg:w-[860px]' src='/heroImg.png' alt='Hero Image' />
                        </motion.div>
                    </div>


                </div>
            </div>
            <div className='bg-yellow md:py-6 py-2 -mt-4 z-50'>
                <ScrollingText />
            </div>
        </div>
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
