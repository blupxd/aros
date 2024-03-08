import React, { useEffect, useState } from 'react';
import slika1 from '../images/slika1.png';
import slika3 from '../images/slika3.png';
import logo from '../images/logo.png'

const Hero = () => {
  const [parallaxOffset, setParallaxOffset] = useState(-500);

  const parallaxScroll = () => {
    const scrolled = window.scrollY;
    setParallaxOffset(Math.min(scrolled * 0.6, 400));
  };

  useEffect(() => {
    window.addEventListener('scroll', parallaxScroll);
    return () => {
      window.removeEventListener('scroll', parallaxScroll);
    };
  }, []);

  return (
    <div id="početna" className='bg-gradient-to-b py-40 font2 from-amber-200 to-orange-300 flex flex-col items-center relative'>
      <div
        className='absolute overflow-hidden left-[-500px] md:bottom-[-350px] bottom-[-210px] lg:bottom-[-150px] w-[440px] md:w-[500px]'
        style={{ transform: `translateX(${parallaxOffset}px)`, zIndex:12 }}
      >
        <img className='w-full h-auto relative left-[-55px]' src={slika3} alt="Slika 3" />
      </div>
      <div className='grid items-center grid-cols-1 md:grid-cols-2 mx-24 md:mx-12 md:px-8 lg:px-32'>
      <div className='text-center md:text-left'>
        <div className='flex items-center justify-center gap-4 mb-4'>
          <img src={logo} alt="logo" className='w-24 opacity-70'/>
          <h1 className='text-8xl font-bold text-center md:text-left text-black/70 mt-8'>AROS</h1>
        </div>
        <h3 className='text-5xl w-full md:w-96 text-center md:text-left text-black/50 border-b-[2px] pb-2 md:pb-4 border-white/30'>Otkrijte luksuz mirisa bez kompromisa</h3>
        <a href='#dekanti' className='px-4 py-2 border border-black/50 text-black/50 hover:bg-black/50 hover:text-white transition duration-300 rounded-md mt-6 block mx-auto md:inline-block'>
          Saznaj više
        </a>
      </div>
  <div className='mt-8 md:mt-0'>
    <img className='w-full h-auto' src={slika1} alt="Slika" />
  </div>
</div>

      <a href="#kupovina" className='px-4 py-2 hover:bg-white hover:text-gray-500 transition duration-300 mt-12 border-[2px] border-white text-white'>
        Istražite
      </a>
    </div>
  );
}

export default Hero;
