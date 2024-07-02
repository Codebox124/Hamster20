'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../../varients"; // Assuming you have defined fadeIn in variants.js

export default function Mission() {
    const useWindowWidth = () => {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
        useEffect(() => {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
    
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    
        return windowWidth;
    };

    const width = useWindowWidth();
    
    return (
        <div id="mission" className=' px-4 lg:px-10 mb-10 mt-10 md:mt-[215px] mx-auto'>
            <div className=' px-4 lg:px-10 mx-auto'>
                <div className='flex justify-center mb-6 md:mb-[60px] mission_a'>
                    <button className='bg-orange px-6 rounded-md py-2 text-white'>
                        Mission
                    </button>
                </div>

                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView="show"
                    viewport={{ once: false, amount: 0.6 }}
                    className='text-center mb-[60px] p-5 xl:p-0 text-yellow'
                >
                    <motion.p
                        variants={fadeIn('down', 0.4)}
                        initial='hidden'
                        whileInView="show"
                        viewport={{ once: false, amount: 0.6 }}
                        className='md:text-[20px] text-[12px] font-light'
                    >
                        <span className='text_a'>Welcome to HappyHamster20, where happiness meets crypto! Our mission is simple:</span>
                        <span className='text_a'>to spread joy and positivity through innovative rewards and impactful initiatives.</span>
                        <span className='text_a'>Join us on this exciting journey as we transform the world of cryptocurrency, one happy moment at a time.</span>
                    </motion.p>
                </motion.div>

                {width >= 768 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        className='grid grid-cols-1 lg:grid-cols-3 gap-9 my-5 p-5 xl:p-0'
                    >
                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView="show"
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
                            className='from-[#FF3E02] to-[#F96A03] bg-gradient-to-r p-5 rounded-3xl flex flex-col md:flex-row lg:flex-col justify-between items-center gap-5 card_a'
                        >
                            <div className='w-full md:w-[50%] lg:w-auto'>
                                <motion.img
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                                    src="/Rectangle_uno.png"
                                    alt="financial freedom"
                                />
                            </div>
                            <div className='text-white text-center w-full md:w-[50%] lg:w-auto'>
                                <motion.p
                                    className='uppercase text-2xl my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    whileInView="show"
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.4 }}
                                >
                                    financial freedom
                                </motion.p>
                                <motion.p
                                    className='text-xs font-thin font-montserrat leading-7 my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    whileInView="show"
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.6 }}
                                >
                                    Achieve financial freedom with our monthly rewards! Earn $1,500 every month for 12 months. Be a part of HappyHamster20 and enjoy the peace of mind that comes with consistent financial support.
                                </motion.p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView="show"
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.4 }}
                            className='from-[#FF3E02] to-[#F96A03] bg-gradient-to-r p-5 rounded-3xl flex flex-col md:flex-row lg:flex-col justify-between items-center gap-5 card_b'
                        >
                            <div className='w-full md:w-[50%] lg:w-auto'>
                                <motion.img
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                                    src="/Rectangle _tres.png"
                                    alt="Tesla Reward"
                                />
                            </div>
                            <div className='text-white text-center w-full md:w-[50%] lg:w-auto'>
                                <motion.p
                                    className='uppercase text-2xl my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    whileInView="show"
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.6 }}
                                >
                                    tesla reward
                                </motion.p>
                                <motion.p
                                    className='text-xs font-thin leading-7 font-montserrat my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    whileInView="show"
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.8 }}
                                >
                                    Invest early and drive away in style! All presale investors are automatically entered to win a Tesla Model S. Don’t miss out on this electrifying opportunity—join our presale now!
                                </motion.p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView="show"
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.6 }}
                            className='from-[#FF3E02] to-[#F96A03] bg-gradient-to-r p-5 rounded-3xl flex flex-col md:flex-row lg:flex-col justify-between items-center gap-5 card_c'
                        >
                            <div className='w-full md:w-[50%] lg:w-auto'>
                                <motion.img
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                                    src="/Rectangle _dos.png"
                                    alt="Charity Project"
                                />
                            </div>
                            <div className='text-white text-center w-full md:w-[50%] lg:w-auto'>
                                <motion.p
                                    className='uppercase text-2xl my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    whileInView="show"
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.8 }}
                                >
                                    CHARITY PROJECT
                                </motion.p>
                                <motion.p
                                    className='text-xs font-thin leading-7 font-montserrat my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    whileInView="show"
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 1 }}
                                >
                                    Making a difference together! We’re donating $100,000 to impactful charity projects. Join us in spreading happiness and support to those in need. Your investment in HappyHamster20 helps create a brighter future for everyone.
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : (
                
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        viewport={{ once: false, amount: 0.6 }}
                        className='grid md:grid-cols-1 lg:grid-cols-3 gap-9 my-5 p-5 xl:p-0'
                    >
                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            animate='show'
                            whileInView="show"
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
                            className='from-[#FF3E02] to-[#F96A03] bg-gradient-to-r p-5 rounded-3xl col-span-1 block md:flex lg:block justify-between items-center gap-5 card_a'
                        >
                            <div className='w-auto md:w-[50%] lg:w-auto'>
                                <motion.img
                                    initial="hidden"
                                    whileInView="show"
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                                    src="/Rectangle_uno.png"
                                    alt="financial freedom"
                                />
                            </div>
                            <div className='text-white text-center w-auto md:w-[50%] lg:w-auto'>
                                <motion.p
                                    className='uppercase text-2xl my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    animate='show'
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.4 }}
                                >
                                    financial freedom
                                </motion.p>
                                <motion.p
                                    className='text-xs font-thin font-montserrat leading-7 my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    animate='show'
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.6 }}
                                >
                                    Achieve financial freedom with our monthly rewards! Earn $1,500 every month for 12 months. Be a part of HappyHamster20 and enjoy the peace of mind that comes with consistent financial support.
                                </motion.p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            animate='show'
                            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.4 }}
                            className='from-[#FF3E02] to-[#F96A03] bg-gradient-to-r p-5 rounded-3xl col-span-1 block md:flex lg:block justify-between items-center gap-5 card_b'
                        >
                            <div className='w-auto md:w-[50%] lg:w-auto'>
                                <motion.img
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                                    src="/Rectangle _tres.png"
                                    alt="Tesla Reward"
                                />
                            </div>
                            <div className='text-white text-center w-auto md:w-[50%] lg:w-auto'>
                                <motion.p
                                    className='uppercase text-2xl my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    animate='show'
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.6 }}
                                >
                                    tesla reward
                                </motion.p>
                                <motion.p
                                    className='text-xs font-thin leading-7 font-montserrat my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    animate='show'
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.8 }}
                                >
                                    Invest early and drive away in style! All presale investors are automatically entered to win a Tesla Model S. Don’t miss out on this electrifying opportunity—join our presale now!
                                </motion.p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            animate='show'
                            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.6 }}
                            className='from-[#FF3E02] to-[#F96A03] bg-gradient-to-r p-5 rounded-3xl col-span-1 block md:flex lg:block justify-between items-center gap-5 card_c'
                        >
                            <div className='w-auto md:w-[50%] lg:w-auto'>
                                <motion.img
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                                    src="/Rectangle _dos.png"
                                    alt="Charity Project"
                                />
                            </div>
                            <div className='text-white text-center w-auto md:w-[50%] lg:w-auto'>
                                <motion.p
                                    className='uppercase text-2xl my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    animate='show'
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.8 }}
                                >
                                    CHARITY PROJECT
                                </motion.p>
                                <motion.p
                                    className='text-xs font-thin leading-7 font-montserrat my-4'
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    animate='show'
                                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 1 }}
                                >
                                    Making a difference together! We’re donating $100,000 to impactful charity projects. Join us in spreading happiness and support to those in need. Your investment in HappyHamster20 helps create a brighter future for everyone.
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
