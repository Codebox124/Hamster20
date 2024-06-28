import React from 'react';
import Navbar from './Navbar';

export default function Hero() {
    return (
        <div>
            <div className='bg-yellow py-4 px-4 md:px-16'>
                <Navbar />
                <div className='flex items-center flex-col md:flex-row mt-16'>
                    <div className='text-brown flex-1'>
                        <div>
                            <span className='block text-center md:text-left'>GUESS WHO HAS BEEN WAITING FOR YOU?</span>
                            <div className='flex flex-col p-0 m-0 font-extrabold text-center md:text-left'>
                                <span className='font-extrabold text-6xl md:text-9xl pl-0 md:pl-24'>HAPPY</span>
                                <span className='-mt-3 text-4xl md:text-7xl'>HAMSTER</span>
                            </div>
                        </div>
                        <div className='z-40 -mt-8 md:-mt-16'>
                            <img className='h-auto w-full md:w-[860px]' src="/heroImg.png" alt="Hero Image" />
                        </div>
                    </div>
                    <div className='flex-1 mt-8 md:mt-0 md:ml-16'>
                        <div className=' rounded-lg md:p-8 '>
                            <div className='text-center bg-white py-3 rounded-md border-2 border-brown  text-brown mb-8'>
                                <div className='text-4xl font-extrabold'>88:88:88:88</div>
                                <div className='text-sm'>Days &nbsp; Hours &nbsp; Minutes &nbsp; Seconds</div>
                                <div className='text-sm mt-2'>Presale starts in</div>
                            </div>
                            <div className='bg-white border-brown border-2  text-brown p-6 rounded-lg mb-8'>
                                <div className='border-2 border-brown p-3 rounded-lg '>
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
                                    <div className=' p-4 rounded-lg border-brown border-2  flex justify-between items-center'>
                                        <div className='text-brown text-sm'>What you pay (USD)</div>
                                        <div className='flex items-center gap-2'>
                                            <div className='text-brown'>$0.00</div>
                                            <button className='bg-orange text-white p-2 rounded-lg'>BNB</button>
                                        </div>
                                    </div>
                                    <div className='border-brown border-2 mb-4  p-4 rounded-lg flex justify-between items-center'>
                                        <div className='text-brown text-sm'>What you receive (USD)</div>
                                        <div className='flex items-center gap-2'>
                                            <div className='text-brown'>$0.00</div>
                                            <button className='bg-orange text-white p-2 rounded-lg'>$HPH</button>
                                        </div>
                                    </div>

                                    <button className='bg-orange border border-brown  w-full py-3 rounded-xl'>Connect Wallet</button>
                                    <button className='bg-blue border text-white border-brown  w-full py-3 rounded-xl'>Buy With Card</button>
                                    <div className='text-center text-brown text-xs mt-4'>Powered by ********</div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-blue py-6'>
            

            </div>
        </div>
    );
}
