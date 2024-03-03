import React, { useEffect, useRef } from 'react';
import slika1 from '../images/slika1.png';
import slika3 from '../images/slika3.png';

const Hero = () => {
  const parallaxRef = useRef(null);
  const startScrollY = window.innerWidth <= 768 ? 500 : 0;

  useEffect(() => {
    const parallaxScroll = () => {
      if (parallaxRef.current && window.scrollY >= startScrollY) {
        const scrolled = window.scrollY - startScrollY;
        const parallaxValue = scrolled * 0.2;
        const limitedParallaxValue = Math.min(parallaxValue, 100);

        parallaxRef.current.style.transform = `translateX(${limitedParallaxValue}px)`;
      }
    };

    window.addEventListener('scroll', parallaxScroll);

    return () => {
      window.removeEventListener('scroll', parallaxScroll);
    };
  }, [startScrollY]);
  return (
    <div className='bg-gradient-to-b py-24 from-amber-200 to-orange-300 flex flex-col items-center'>
      <div className='absolute overflow-hidden left-[-250px] md:bottom-[-350px] bottom-[-450px] lg:bottom-[-300px] w-[440px] md:w-[500px]' ref={parallaxRef}>
        <img className='w-full h-auto relative left-[-10px]' src={slika3} alt="Slika 3" />
      </div>
      <div className='grid items-center grid-cols-1 md:grid-cols-2 mx-24 md:mx-12 md:px-8 lg:px-32'>
      <div className='text-center md:text-left'>
        <h1 className='text-6xl font-bold text-center md:text-left text-black/70 mb-4'>AROS</h1>
        <h3 className='text-4xl w-full md:w-96 text-center md:text-left text-black/50 border-b-[2px] pb-2 md:pb-4 border-white/30'>Otkrijte luksuz mirisa bez kompromisa</h3>
        <button className='px-4 py-2 border border-black/50 text-black/50 hover:bg-black/50 hover:text-white transition duration-300 rounded-md mt-6 block mx-auto md:inline-block'>
          Saznaj više
        </button>
      </div>
  <div className='mt-8 md:mt-0'>
    <img className='w-full h-auto' src={slika1} alt="Slika" />
  </div>
</div>

      <button className='px-4 py-2 hover:bg-white hover:text-gray-500 transition duration-300 mt-12 border-[2px] border-white text-white'>
        Istrazite
      </button>
    </div>
  );
}

export default Hero;
