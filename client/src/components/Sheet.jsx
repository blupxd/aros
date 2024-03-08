import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { postaviTipParfema } from '../actions/parfemAction';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';

const Sheet = () => {
  const [parfemi, setParfemi] = useState([]);
  const controls = useAnimation();
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, {once: true})

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const userToken = localStorage.getItem('user');
        const response = await axios.get('https://aros-b4l2.vercel.app/parfemi', {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setParfemi(response.data);
      } catch (error) {
        console.error('Error fetching perfumes:', error.message);
      }
    };

    fetchPerfumes();
  }, []);

  useEffect(() => {
    if (isInView) {
      console.log("Element is in view! Calling controls.start.");
      controls.start({ opacity: 1, x: 0, y: 0 });
    } else {
      console.log("Element is NOT in view!");
    }
  }, [isInView, controls, parfemi.length]);

  const dispatch = useDispatch();

  return (
    <div 
      ref={headerRef}
      className='bg-black p-12'>
      <motion.h1
        className='font2 text-white text-5xl md:text-7xl'
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={{ duration: 0.5, ease: 'easeInOut'}}
      >
        Dostupnost
      </motion.h1>
      {parfemi.length <= 0 && (
        <div className='flex items-center justify-center p-12'>
          <MoonLoader color='#ffff' />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, x: -50}}
        animate={controls}
        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4}}
        className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-12 w-full'>
        {parfemi.length &&
          ['muski', 'zenski', 'unisex'].map((tip, index) => (
            <div
              key={index}
              className='flex flex-col gap-2'
            >
              <h1
                className={`border-b border-white mb-4 text-3xl ${
                  tip === 'muski'
                    ? 'text-blue-500'
                    : tip === 'zenski'
                    ? 'text-pink-500'
                    : 'text-gray-300'
                }`}
              >
                {tip.charAt(0).toUpperCase() + tip.slice(1)}{' '}
                <FontAwesomeIcon
                  icon={
                    tip === 'muski'
                      ? faMars
                      : tip === 'zenski'
                      ? faVenus
                      : faVenusMars
                  }
                />
              </h1>
              {parfemi
                .filter((parfem) => parfem.tip === tip)
                .slice(0, 5)
                .map((x, key) => (
                  <motion.div
                    key={key}
                    className='bg-white p-2 flex flex-col'
                    initial={{ opacity: 0, x: -40 }}
                    animate={controls}
                    transition={{
                      duration: 0.6,
                      ease: 'easeInOut',
                      delay: 0.3 * key,
                    }}
                  >
                    <h2 className='text-sm text-black font-semibold'>
                      {x.naziv}
                    </h2>
                    <p className='text-xs italic text-gray-700'>{x.kuca}</p>
                  </motion.div>
                ))}
              <motion.button
                onClick={() => dispatch(postaviTipParfema(tip))}
                className='px-4 py-2 border-white border-[1px] text-white hover:bg-white hover:text-black transition duration-300 mt-2'
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay:
                    0.1 *
                    (parfemi &&
                      parfemi.filter((parfem) => parfem.tip === tip).slice(0, 5)
                        .length),
                }}
              >
                Vidi sve
              </motion.button>
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default Sheet;
