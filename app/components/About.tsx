import React from 'react'

export default function AboutUs() {
    return (
        <div className='py-20 px-20'>
            <div className='justify-center flex'>
                <button className='bg-brown px-6 rounded-xl py-2 text-white'>About</button>
            </div>
            <div className='grid grid-cols-2 bg-gradient-to-b from-brown to-orange rounded-xl p-10 text-white mt-16 justify-between'>
                <div className=''>
                    <div>
                        <h1 className='text-5xl font-extrabold'>HAPPYHAMSTER20?</h1>
                    </div>
                    <div className='mt-4'>
                        <span className='text-xs flex flex-col gap-3'>
                            <span>In the wild world of the internet, a certain phenomenon has made waves: the sad hamster meme.</span>
                            <span> HappyHamster was repeatedly confronted with this "gloomy" image. But instead of complaining, he decided to take matters into his own hands.
                                Thus, the HappyHamster20 team was formed, full of energy and good vibes, ready to shake up the world with a dose of humor and a big splash of hope.</span>
                            <span> Combining crypto know-how with a hefty dose of inspiration, they aim to show how to make the most of the digital age.</span>
                        </span>
                    </div>
                    <div className='mt-6'>
                        <button className='px-9 py-3 text-brown rounded-full bg-white'>Get a Whitepaper</button>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <img className='h-auto w-full md:w-[400px]' src="/Frame 1.png" alt="" />
                </div>
            </div>


        </div>
    )
}
