'use client'
import React, { useState, useEffect } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";

export default function Navbar() {
    useEffect(() => {
        gsap.to('#text', {
            ease: 'power1.Out',
            opacity: 1,
            y: 0,
        });

        gsap.fromTo('.para', {
            opacity: 0,
            y: -80,
        }, {
            opacity: 1,
            y: 0,
        });
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className='relative z-50 flex justify-between items-center md:p-4 para'>
            <div className='flex gap-2 items-center'>
                <img className='w-14 h-14' src='/hamster image 4.png' alt="Hamster" />
                <div className='flex flex-col p-0 m-0 text-yellow'>
                    <span className='text-2xl font-extrabold'>HAPPY</span>
                    <span className='-mt-3'>HAMSTER20</span>
                </div>
            </div>
            <div className='hidden md:flex justify-center gap-4 text-xs text-yellow'>
                <a href="#" onClick={closeMenu}>ABOUT US</a>
                <a href="#" onClick={closeMenu}>MISSION</a>
                <a href="#" onClick={closeMenu}>ROADMAP</a>
                <a href="#" onClick={closeMenu}>TOKENOMICS</a>
            </div>
            <div className='hidden md:flex gap-4 items-center'>
                <a href="">
                    <div className='flex items-center justify-center h-12 w-12 bg-orange rounded-xl'>
                        <FaXTwitter color='white' size={24} />
                    </div>
                </a>
                <a href="">
                    <div className='flex items-center justify-center h-12 w-12 bg-orange rounded-xl'>
                        <FaTelegramPlane color='white' size={24} />
                    </div>
                </a>
            </div>
            <div className='md:hidden flex items-center para'>
                <button onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars color='white' size={24} />}
                </button>
            </div>
            {isOpen && (
                <div className='absolute top-0 left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden z-50'>
                    <button onClick={closeMenu} className='self-end p-4'>
                        <FaTimes size={24} />
                    </button>
                    <a href="#" className='py-2 text-brown text-sm' onClick={closeMenu}>ABOUT US</a>
                    <a href="#" className='py-2 text-brown text-sm' onClick={closeMenu}>MISSION</a>
                    <a href="#" className='py-2 text-brown text-sm' onClick={closeMenu}>ROADMAP</a>
                    <a href="#" className='py-2 text-brown text-sm' onClick={closeMenu}>TOKENOMICS</a>
                    <div className='flex gap-4 items-center py-4'>
                        <a href="">
                            <div className='flex items-center justify-center h-12 w-12 bg-orange rounded-xl'>
                                <FaXTwitter color='white' size={24} />
                            </div>
                        </a>
                        <a href="">
                            <div className='flex items-center justify-center h-12 w-12 bg-orange rounded-xl'>
                                <FaTelegramPlane color='white' size={24} />
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
