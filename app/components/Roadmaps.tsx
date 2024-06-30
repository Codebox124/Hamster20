'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Roadmaps() {
  useEffect(() => {
    
    gsap.fromTo('.road_but', 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, 
        scrollTrigger: {
          trigger: '.road_but',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        }
      }
    );

    
    gsap.fromTo('.road_ham span', 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'elastic.out', stagger: 0.05, 
        scrollTrigger: {
          trigger: '.road_ham',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        }
      }
    );

    // Animations for road_a to road_f
    const roads = ['.road_a', '.road_b', '.road_c', '.road_d', '.road_e', '.road_f'];
    roads.forEach((road) => {
      gsap.fromTo(road, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1.5, ease: 'elastic.out(3, 0.6)', 
          scrollTrigger: {
            trigger: road,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true,
          }
        }
      );
    });

  }, []);

  return (
    <div className=' text-yellow  mx-auto my-10'>
      <div className=' max-w-[1370px] mx-auto pt-14 md:pt-20 lg:pt-36 pb-14'>
        <div className='flex justify-center road_but'>
        <button className='bg-gradient-to-r from-[#FF3E02] to-[#F9A503] px-6 rounded-xl mb-[60px] py-2 text-white about_a'>About</button>
        </div>

        <div className='text-yellow text-center mb-6 md:mb-[119px] text-3xl md:text-7xl font-extrabold  road_ham'>
          {Array.from('HAMSTERMAP').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>

        <section className='p-5  xl:p-0'>
          <div className=' py-5 md:py-8 flex flex-col-reverse md:flex-row text-lg  justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_a'>
            <div className=' w-full md:w-[50%] xl:w-[40%] font-extralight  text-left'>
              <p className='font-montserrat font-extralight'>HappyHamster20 launches the presale. Early investors get a preferential price. The team uses part of the proceeds for a professional marketing strategy.</p>
            </div>

            <div className=' w-full md:w-[50%] xl:w-[30%] text-3xl lg:text-5xl text-left md:text-right'>
              <p>PRESALE &
              MARKETING</p>
            </div>
          </div>

          <div className=' py-5 md:py-8 flex flex-col-reverse md:flex-row text-lg  justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_b'>
            <div className='w-full md:w-[50%] xl:w-[40%] font-extralight  text-left'>
              <p className='font-montserrat font-extralight'>Investors have the opportunity to acquire tokens during the presale. After the successful launch, one of the presale investors will receive a Tesla Model S as a prize.</p>
            </div>

            <div className='w-full md:w-[50%] xl:w-[30%] text-3xl lg:text-5xl text-left md:text-right'>
              <p>INCENTIVE & 
              INVESTMENT</p>
            </div>
          </div>

          <div className=' py-5 md:y-8 flex flex-col-reverse md:flex-row text-lg  justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_c'>
            <div className=' w-full md:w-[50%] xl:w-[40%] font-extralight text-left'>
              <p className='font-montserrat font-extralight'>
                To ensure a fair start of HappyHamster20, presale investors can claim their tokens on the website simultaneously with the exchange listing.
              </p>
            </div>

            <div className=' w-full md:w-[50%] xl:w-[30%] text-3xl lg:text-5xl text-left md:text-right'>
              <p>TOKEN
              CLAIMING</p>
            </div>
          </div>

          <div className=' py-5 md:y-8 flex flex-col-reverse md:flex-row text-lg  justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_d'>
            <div className=' w-full md:w-[50%] xl:w-[40%] font-extralight  text-left'>
              <p className='font-montserrat font-extralight'>HappyHamster20 will be launched on PancakeSwap, one of the most popular decentralized exchanges. This provides the best trading environment and early liquidity.</p>
            </div>

            <div className=' w-full md:w-[50%] xl:w-[30%] text-3xl lg:text-5xl text-left md:text-right'>
              <p>DEX
              LAUNCH</p>
            </div>
          </div>

          <div className=' py-5 md:y-8 flex flex-col-reverse md:flex-row text-lg  justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_e'>
            <div className=' w-full md:w-[50%] xl:w-[40%] font-extralight text-left'>
              <p className='font-montserrat font-extralight'>The HappyHamster20 team will provide a substantial liquidity pool on PancakeSwap. To this end, 10% of the total token supply has been set aside.</p>
            </div>

            <div className=' w-full md:w-[50%] xl:w-[30%] text-3xl lg:text-5xl text-left md:text-right'>
              <p>PROVIDED
              LIQUIDITY</p>
            </div>
          </div>

          <div className=' py-5 md:y-8 flex flex-col-reverse md:flex-row text-lg  justify-normal md:justify-between border-t-2 border-yellow text-yellow items-start md:items-center road_f'>
            <div className=' w-full md:w-[50%] xl:w-[40%] font-extralight  text-left'>
              <p className='font-montserrat font-extralight'>The HappyHamster20 team plans to distribute airdrops to the community irregularly in the future.</p>
            </div>

            <div className=' w-full md:w-[50%] xl:w-[30%] text-3xl lg:text-5xl text-left md:text-right'>
              <p>FUTURE
              PROSPECTS</p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
