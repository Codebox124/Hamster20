'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
    useEffect(() => {
        const animateElement = (selector: string, animation: { from: any, to: any }) => {
            gsap.fromTo(selector, 
                { ...animation.from }, 
                { ...animation.to, 
                    scrollTrigger: {
                        trigger: selector,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: true,
                    }
                }
            );
        };

        animateElement('.about_a', {
            from: { y: 20, opacity: 0 },
            to: { y: 0, opacity: 1, duration: 1, ease: 'power2.Out' }
        });

        animateElement('.happy_a', {
            from: { scale: 0.5, opacity: 0.7 },
            to: { scale: 1, opacity: 1, duration: 1, ease: 'power2.inOut' }
        });

        animateElement('.video_a', {
            from: { scale: 0.5, opacity: 0.7 },
            to: { scale: 1, opacity: 1, duration: 1, ease: 'power2.inOut' }
        });
    }, []);

    return (
        <div className='py-20 md:px-20 px-2'>
            <div className='justify-center flex'>
                <button className='bg-brown px-6 rounded-xl py-2 text-white about_a'>About</button>
            </div>
            <div className='bg-gradient-to-b from-brown to-orange rounded-xl p-6 md:p-10 text-white mt-16 happy_a'>
                <div className='grid  lg:grid-cols-2 gap-6 md:gap-10'>
                    <div>
                        <div>
                            <h1 className='md:text-2xl xl:text-5xl font-extrabold'>HAPPYHAMSTER20?</h1>
                        </div>
                        <div className='mt-4'>
                            <span className='text-xs md:text-sm flex flex-col font-montserrat gap-4 md:gap-7'>
                                <span>In the wild world of the internet, a certain phenomenon has made waves: the sad hamster meme.</span>
                                <span> HappyHamster was repeatedly confronted with this "gloomy" image. But instead of complaining, he decided to take matters into his own hands. Thus, the HappyHamster20 team was formed, full of energy and good vibes, ready to shake up the world with a dose of humor and a big splash of hope.</span>
                                <span> Combining crypto know-how with a hefty dose of inspiration, they aim to show how to make the most of the digital age.</span>
                            </span>
                        </div>
                        <div className='mt-6'>
                            <button className='px-6 md:px-9 py-3 text-brown rounded-full text-sm bg-white'>Get the Whitepaper</button>
                        </div>
                    </div>
                    <div className='flex justify-center md:justify-end'>
                        <img className='h-auto w-full md:w-[400px]' src="/Frame 1.png" alt="Hamster" />
                    </div>
                </div>
            </div>

            <div className='bg-brown rounded-xl p-6 md:p-10 text-white mt-16 video_a'>
                <div className='text-center'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-2'>WATCH THE VIDEO BELOW</h1>
                    <span className='text-lg md:text-sm font-montserrat'>Check out this video to understand more about HappyHamster20</span>
                </div>
                <div className='h-[200px] md:h-[500px] bg-yellow mt-3 rounded-xl'>
                    {/* Video content goes here */}
                </div>
            </div>
        </div>
    );
}
