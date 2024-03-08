import React, { useEffect, useRef, useState } from 'react';
import slika4 from '../images/slika4.png';
import slika2 from '../images/slika2.png';
import ReactCardFlip from "react-card-flip";
import { motion, useAnimation } from 'framer-motion';

const Info = () => {
  const [parallaxOffset, setParallaxOffset] = useState(500);
  const slikaRef = useRef(null);
  const [flip, setFlip] = useState([false, false, false]);
  const controls = useAnimation();

  const renderDekant = (img, naslov, desc, info, index) => {
    const handleFlip = () => {
      setFlip((prevFlip) => {
        const newFlip = [...prevFlip];
        newFlip[index] = !newFlip[index];
        return newFlip;
      });
    };
  
    return (
      <ReactCardFlip isFlipped={flip[index]} flipDirection="horizontal">
        <div
          className='border flex flex-col h-[500px] w-[300px] items-center justify-center border-gray-400 p-8'
        >
          <img className='w-full h-64 object-cover' src={img} alt={naslov} />
          <h1 className='text-orange-300 text-xl font2'>{naslov}</h1>
          <p className='w-full py-2 border-y text-gray-700 border-black text-justify text-sm'>
            {desc}
          </p>
          <button onClick={handleFlip} className='px-4 py-2 bg-black text-white 
            hover:bg-white hover:border transition duration-300 hover:text-black hover:border-black text-center w-full mt-2'>
            Vidi više
          </button>
        </div>
        <div
          className='border bg-black h-[500px] w-[300px] flex flex-col items-center justify-end p-8'
        >
          <p className='text-white my-auto text-center text-2xl'>{info}</p>
          <button onClick={handleFlip} className='px-4 py-2 bg-white text-black
          hover:bg-black hover:border transition duration-300 hover:text-white hover:border-white text-center w-full mt-2'>
            Vidi manje
          </button>
        </div>
      </ReactCardFlip>
    );
  };
  

  const parallaxScroll = () => {
    const scrolled = window.scrollY;
    const slikaOffsetTop = slikaRef.current.offsetTop;
    const offsetBeforeActivation = -100;

    if (scrolled > slikaOffsetTop - window.innerHeight / 2 - offsetBeforeActivation) {
      const calculatedOffset = (scrolled - slikaOffsetTop + window.innerHeight / 2) * 0.35;
      const limitedOffset = Math.min(calculatedOffset, 400);
      setParallaxOffset(limitedOffset);
      controls.start({ opacity: 1, x: 0 });
    }
  }    

  useEffect(() => {
    window.addEventListener('scroll', parallaxScroll);
    return () => {
      window.removeEventListener('scroll', parallaxScroll);
    };
  }, [controls]);

  return (
    <div id="dekanti" className='flex relative overflow-hidden flex-col items-center justify-center'>
      <div
        ref={slikaRef}
        className='absolute overflow-hidden right-[-500px] top-[900px] md:top-1/3 w-[350px] md:w-[400px]'
        style={{ transform: `translateX(-${parallaxOffset}px)`, zIndex: 15, overflow: 'hidden' }}
      >
        <img className='h-auto relative right-[-15px]' src={slika2} alt="Slika2" />
      </div>

      <div className='grid mx-8 md:mx-32 grid-cols-1 md:grid-cols-2 my-48  items-center justify-center'>
        <div className='bg-white p-12 md:w-full text-justify h-auto md:h-96'>
          <motion.h1 className='text-4xl font2' transition={{ duration: 0.4, ease: 'easeInOut' }} initial={{ opacity: 0, x: -100 }} animate={controls}>
            ŠTA SU DEKANTI I ZAŠTO SU DOBRI
          </motion.h1>
          <motion.p className='text-lg md:text-base text-justify' initial={{ opacity: 0, x: -100 }} animate={controls} transition={{ duration: 0.3, ease: 'easeInOut' }}>
            Kada se govori o dekantiranju parfema, to se obično odnosi na proces prelivanja ili prenosa manje količine parfema iz originalnog pakovanja u manju bocu ili posudu, poznatu kao dekanter.
            Ovaj postupak je često popularan među ljubiteljima parfema koji žele prenositi svoje omiljene mirise u manje, prenosive bočice radi lakšeg nošenja ili putovanja.
            Dekantiranje parfema omogućava precizniju dozu mirisa i često je korisno kako biste izbegli nošenje velike originalne bočice parfema.
          </motion.p>
        </div>
        <motion.div
          className='w-full h-96 border-b-[5px] border-l-0 md:border-b-0 md:border-l-[5px] border-amber-400 bg-red-400 overflow-hidden relative'
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <img src={slika4} alt="Slika 4" className='w-full h-full object-cover' />
        </motion.div>
      </div>
      <div
        id="kupovina"
        className='bg-white flex flex-col justify-center p-8 md:p-20 items-center w-full'
      >
        <h1 className='text-6xl text-orange-300 font2 font-bold text-center py-12 md:py-24'>
          PRONAĐITE PARFEM ZA VAS
        </h1>
        <div className='grid md:grid-cols-3 gap-8 relative'>
          {renderDekant(
            'https://www.harlemcandlecompany.com/cdn/shop/products/Productimageswhitebackground2000x2000_2.png?v=1696540869&width=2048',
            'Dekanti od 5ml',
            'Želiš da znaš zašto treba uzeti 5ml? Okreni stranu.',
            'Dobar za testiranje skupih parfema, jer su u ovoj količini pristupačniji a donosi dovoljan broj od 50 prseva.', 0
          )}
          {renderDekant(
            'https://www.harlemcandlecompany.com/cdn/shop/products/Productimageswhitebackground2000x2000_2.png?v=1696540869&width=2048',
            'Dekanti od 10ml',
            'Želiš da znaš zašto treba uzeti 10ml? Okreni stranu.',
            'Idealna količina za putovanja u pristupačnom pakovanju gde se krije čak 100 prseva!', 1
          )}
          {renderDekant(
            'https://www.harlemcandlecompany.com/cdn/shop/products/Productimageswhitebackground2000x2000_2.png?v=1696540869&width=2048',
            'Dekanti od 20ml',
            'Želiš da znaš zašto treba uzeti 20ml? Okreni stranu.',
            'Odličan za duži period korišćenja parfema, jer se u boci od 20ml krije čak 200 prseva!', 2
          )}
        </div>
      </div>
    </div>
  );
}

export default Info;
