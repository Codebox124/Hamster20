'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { IoIosCopy } from 'react-icons/io'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Tokenomics() {
    const timeline = gsap.timeline({
        repeatDelay: 1,
    })

    useEffect(() => {

        gsap.fromTo(
            '.tok_but',
            { y: -20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'bounce.inOut',
                scrollTrigger: {
                    trigger: '.tok_but',
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: true,
                }
            }
        );

        // Animation for tok_img
        gsap.fromTo(
            '.tok_img, .tok_in',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.2,
                ease: 'power2.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.tok_img',
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: true,
                }
            }
        );

        // Animations for tok_a to tok_f
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.tok_a',
                start: 'top 60%',
                end: 'top 30%',
                scrub: true,
            }
        });

        tl.fromTo('.tok_a', { opacity: 0, y: -80 }, { opacity: 1, y: 0, duration: 1, ease: 'bounce.inOut' })
            .fromTo('.tok_b', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'bounce.inOut' }, "=0.2")
            .fromTo('.tok_c', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'bounce.inOut' }, "=0.2")
            .fromTo('.tok_d', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'bounce.inOut' }, "=0.2")
            .fromTo('.tok_e', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'bounce.inOut' }, "=0.2")
            .fromTo('.tok_f', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'bounce.inOut' }, "=0.2");

        gsap.fromTo(
            '.aimg',
            { x: gsap.utils.random(-100, 100), y: gsap.utils.random(-100, 100), opacity: 0 },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'rough({ template: "none.out", strength: 2, points: 20, taper: "both", randomize: true })',
                scrollTrigger: {
                    trigger: '.aimg',
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: true,
                }
            }
        );

        gsap.fromTo(
            '.text',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.text',
                    start: 'top 70%',
                    end: 'top 10%',
                    scrub: true,
                }
            }
        );
    }, []);



    return (
        <>
            <section className=' text-yellow max-w-[1640px] mx-auto'>
                <div className='max-w-[1370px] mx-auto'>
                    <div className='flex justify-center tok_but'>
                        <button className=' bg-orange px-6 rounded-md py-2 text-white'>
                            Tokenomics
                        </button>
                    </div>

                    <div className='p-3  xl:p-0 grid grid-cols-6 lg:col-span-7 items-center'>
                        <div className='lg:col-span-4 col-span-4 w-fit'>
                            <div className='grid grid-rows-1 md:grid-cols-2 my-8 lg:my-16 gap-5 items-center md:items-start md:gap-14  w-fit'>
                                <div className=' col-span-1 tok_a'>
                                    <p className='  font-normal md:font-extrabold text-lg uppercase'>Circulation</p>
                                    <p>200 Billion HPH</p>
                                </div>
                                <div className='flex gap-2 items-center col-span-1 tok_b'>
                                    <div className='p-7 from-[#FF3E02] to-[#F9A503] bg-gradient-to-r rounded-md'></div>
                                    <div>
                                        <p className=' font-normal md:font-extrabold text-base md:text-lg'>15%</p>
                                        <p className='font-thin text-sm md:text-base'>Airdrop Capital</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center col-span-1 tok_c'>
                                    <div className='p-7 from-[#FF3E02] to-[#F9A503] bg-gradient-to-r rounded-md'></div>
                                    <div>
                                        <p className=' font-normal md:font-extrabold text-base md:text-lg'>25%</p>
                                        <p className='font-thin text-sm md:text-base'>Presale Reserve</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center col-span-1 tok_d'>
                                    <div className='p-7 from-[#FF3E02] to-[#F9A503] bg-gradient-to-r rounded-md'></div>
                                    <div>
                                        <p className=' font-normal md:font-extrabold text-base md:text-lg'>30%</p>
                                        <p className='font-thin text-sm md:text-base'>Future Treasure</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center col-span-1 tok_e'>
                                    <div className='p-7 from-[#FF3E02] to-[#F9A503] bg-gradient-to-r rounded-md'></div>
                                    <div>
                                        <p className=' font-normal md:font-extrabold text-base md:text-lg'>20%</p>
                                        <p className='font-thin text-sm md:text-base'>Marketing Reserve</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center col-span-1 tok_f'>
                                    <div className='p-7 from-[#FF3E02] to-[#F9A503] bg-gradient-to-r rounded-md'></div>
                                    <div>
                                        <p className=' font-normal md:font-extrabold text-base md:text-lg'>10%</p>
                                        <p className='font-thin text-sm md:text-base'>Liquidity</p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#FFA500] flex justify-between items-center p-1 rounded-md w-[100%] tok_in'>
                                <div className='p-3 rounded-md bg-white text-[#666666]'>
                                    CA
                                </div>

                                <div className='text-white uppercase overflow-hidden hidden md:block'>
                                    xxxxxxxxxxxxxxxxxxxx...
                                </div>

                                <div className='text-white uppercase overflow-hidden w-full block md:hidden'>
                                    xxxxxxxxx...
                                </div>

                                <div className='p-3 rounded-md bg-white text-[#666666] cursor-pointer'>
                                    <IoIosCopy size={25} />
                                </div>
                            </div>
                        </div>

                        <div className='z-40 col-span-2 object-cover md:block hidden tok_img'>
                            <div className='absolute inset-0 bg-gradient-to-r rounded-full blur-xl from-transparent via-[#f9a7037b] to-transparent opacity-50 gradient-overlay '></div>
                            <img className='h-auto w-full object-cover' src="/tokenomics.png" alt="Hero Image" />
                        </div>
                    </div>


                </div>
            </section>
            <div className='bg-yellow md:py-6 py-3 z-50'>
                <ScrollingText />
            </div>

            <section className='  mx-auto py-10 md:py-28'>
                <div className='max-w-[1360px] mx-auto flex items-center justify-between relative'>
                    <div className='md:flex flex-col justify-between h-full hidden'>
                        <div className='mb-auto absolute -top-[90px] xlg:-top-[70px] left-[10px] xlg:left-[70px] xl:left-11 aimg'>
                            <Image src='/hamster image 3.png' width={130} height={130} alt='' />
                        </div>
                        <div className='mt-auto absolute -bottom-5 lg:-bottom-7 left-[150px] lg:left-[170px] xlg:left-[220px] aimg'>
                            <Image src='/hamster image 1.png' width={100} height={100} alt='' />
                        </div>
                    </div>

                    <div className='text-center max-w-none md:max-w-[700px] lg:max-w-[900px] xlg:max-w-[1200px] mx-4'>
                        <p className='text-yellow font-black text-2xl md:text-4xl lg:text-6xl xl:text-7xl uppercase leading-normal md:leading-[70px] text'>
                            {Array.from('Spreading joy and financial freedom through innovative cryptocurrency solutions.').map((letter, index) => (
                                <span key={index}>{letter}</span>
                            ))}
                        </p>
                    </div>

                    <div className='md:flex flex-col justify-between h-full hidden'>
                        <div className='mb-auto  absolute right-16 lg:right-4 xlg:right-28 xl:right-16 top-[55px] aimg'>
                            <Image src='/hamster image 4.png' width={80} height={80} alt='' />
                        </div>
                        <div className='mt-auto absolute -bottom-16 lg:-bottom-[75px] xlg:-bottom-12 right-20 xlg:right-24 aimg'>
                            <Image src='/hamster image 2.png' width={150} height={150} alt='' />
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}

function ScrollingText() {
    return (
        <div className="scrolling-text-container">
            <div className="scrolling-text flex gap-3 items-center">
                <span className='text-brown text-4xl md:text-7xl'>HAPPY HAMSTER</span>
                <img className='w-14 h-14' src='/hamster image 4.png' alt="Hamster" />
                <span className='text-brown text-4xl md:text-7xl'>HAPPY HAMSTER</span>
            </div>
        </div>
    );
}

