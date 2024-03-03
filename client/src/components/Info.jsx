import React, { useEffect, useRef, useState } from 'react';
import slika4 from '../images/slika4.png';
import slika2 from '../images/slika2.png';


const Info = () => {
  const [parallaxOffset, setParallaxOffset] = useState(500);
  const slikaRef = useRef(null);

  const parallaxScroll = () => {
    const scrolled = window.scrollY;
    const slikaOffsetTop = slikaRef.current.offsetTop;
    const offsetBeforeActivation = -100; // Postavite vrednost prema potrebama

    if (scrolled > slikaOffsetTop - window.innerHeight / 2 - offsetBeforeActivation) {
      const calculatedOffset = (scrolled - slikaOffsetTop + window.innerHeight / 2) * 0.35;
      const limitedOffset = Math.min(calculatedOffset, 400); // Postavite vrednost prema potrebama
      setParallaxOffset(limitedOffset);
    }
  }    

  useEffect(() => {
    window.addEventListener('scroll', parallaxScroll);
    return () => {
      window.removeEventListener('scroll', parallaxScroll);
    };
  }, []);

  return (
    <div id="dekanti" className='flex relative overflow-hidden flex-col items-center justify-center'>
      <div
        ref={slikaRef}
        className='absolute overflow-hidden right-[-500px] top-[900px] md:top-1/3 w-[350px] md:w-[400px]'
        style={{ transform: `translateX(-${parallaxOffset}px)`, zIndex:15, overflow: 'hidden' }}
      >
        <img className='h-auto relative right-[-15px]' src={slika2} alt="Slika2" />
      </div>

      <div className='grid mx-8 md:mx-24 grid-cols-1 md:grid-cols-2 my-48 font2 items-center justify-center'>
        <div className='bg-white p-12 md:w-full text-justify h-auto md:h-96'>
          <h1 className='text-5xl'>ŠTA SU DEKANTI I ZAŠTO SU DOBRI</h1>
          <p className='text-lg md:text-base'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut incidunt est quibusdam, velit error repellendus!
            Exercitationem voluptatibus adipisci, officia saepe unde, non assumenda corrupti magni officiis esse ab quae fuga.
          </p>
        </div>
        <div className='w-full h-96 border-b-[5px] border-l-0 md:border-b-0 md:border-l-[5px] border-amber-400 bg-red-400 overflow-hidden relative'>
          <img src={slika4} alt="Slika 4" className='w-full h-full object-cover' />
        </div>
      </div>
      <div id="kupovina" className='bg-white flex flex-col justify-center font2 p-8 md:p-24 items-center w-full'>
        <h1 className='text-6xl text-orange-300 font-bold text-center py-12 md:py-24'>PRONAĐITE PARFEM ZA VAS</h1>
        <div className='grid md:grid-cols-3 gap-8 relative'>
          {renderDekant(
            'https://www.harlemcandlecompany.com/cdn/shop/products/Productimageswhitebackground2000x2000_2.png?v=1696540869&width=2048',
            'Dekanti od 10ml',
            'Niste dovoljno sigurni da li će vam se parfem svideti? Najbolje za početak jeste dekant od 25ml.'
          )}
          {renderDekant(
            'https://www.harlemcandlecompany.com/cdn/shop/products/Productimageswhitebackground2000x2000_2.png?v=1696540869&width=2048',
            'Dekanti od 15ml',
            'Niste dovoljno sigurni da li će vam se parfem svideti? Najbolje za početak jeste dekant od 25ml.'
          )}
          {renderDekant(
            'https://www.harlemcandlecompany.com/cdn/shop/products/Productimageswhitebackground2000x2000_2.png?v=1696540869&width=2048',
            'Dekanti od 25ml',
            'Niste dovoljno sigurni da li će vam se parfem svideti? Najbolje za početak jeste dekant od 25ml.'
          )}
        </div>
      </div>
    </div>
  );
}

const renderDekant = (img,naslov,desc) => {
  return(
    <div className='border flex flex-col items-center justify-center border-gray-400 p-8'>
      <img className='w-full h-64 object-cover' src={img} alt={naslov} />
      <h1 className='text-orange-300 text-xl'>{naslov}</h1>
      <p className='w-full py-2 border-y text-gray-700 border-black text-justify text-md'>
        {desc}
      </p>
      <button className='px-4 py-2 bg-black text-white mt-2'>Saznaj više</button>
    </div>
  )
}

export default Info;
