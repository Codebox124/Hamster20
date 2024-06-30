'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, easeInOut } from 'framer-motion'

import { fadeIn } from "../../varients"
import { once } from "events"

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {


    return (
        <div className='relative pt-[120px] md:px-20 px-2'>


            <div className='justify-center flex'>

                <button className='bg-gradient-to-r from-[#FF3E02] to-[#F9A503] px-6 rounded-xl py-2 text-white about_a'>About</button>

            </div>
            <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: true, amount: 0.6 }} className=' rounded-xl px-4 mt-10  md:mt-16 happy_a'>


                <div className='grid items-center  lg:grid-cols-2 gap-6 md:gap-10'>
                    <div className='text-yellow'>
                        <div>
                            <h1 className='md:text-2xl xl:text-5xl font-extrabold'>HAPPYHAMSTER20?</h1>
                        </div>
                        <div className='mt-4'>
                            <span className='text-sm md:text-xl flex flex-col font-montserrat gap-8 md:gap-7'>
                                <span>In the wild world of the internet, a certain phenomenon has made waves: the sad hamster meme.</span>
                                <span> HappyHamster was repeatedly confronted with this "gloomy" image. But instead of complaining, he decided to take matters into his own hands. Thus, the HappyHamster20 team was formed, full of energy and good vibes, ready to shake up the world with a dose of humor and a big splash of hope.</span>
                                <span> Combining crypto know-how with a hefty dose of inspiration, they aim to show how to make the most of the digital age.</span>
                            </span>
                        </div>
                        <div className='mt-6'>
                            <button className='px-6 md:px-9 py-4 text-white rounded-xl text-sm bg-gradient-to-r from-[#FF3E02] to-[#F9A503]'>Get the Whitepaper</button>
                        </div>
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <img className='h-auto w-full md:w-[400px] border-4 rounded-3xl border-yellow' src="/Frame 1 (1).png" alt="Hamster" />
                    </div>
                </div>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView={"show"} viewport={{ once: true, amount: 0.6 }} className=' rounded-xl p-6 md:p-10 text-yellow md:mt-[242px] mt-16 video_a'>
                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='w-[600px] h-[600px] bg-gradient-radial from-[#FF3E02] via-[#F9A503] to-transparent rounded-full opacity-50'></div>
                </div>
                <div className='text-center'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-2'>WATCH THE VIDEO BELOW</h1>
                    <span className='text-lg md:text-sm font-montserrat font-light'>Check out this video to understand more about HappyHamster20</span>
                </div>
                <div className='h-[200px] md:h-[500px] bg-yellow mt-3 rounded-xl'>
                    {/* Video content goes here */}
                </div>
            </motion.div>
        </div>
    );
}
