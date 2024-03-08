import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { postaviTipParfema } from '../actions/parfemAction';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Dostupnost = () => {
    const [toggle, setToggle] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const tip = useSelector((state) => state.parfem.tip);

    const [parfemi, setParfemi] = useState([])

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
        if (tip === '') setToggle(false);
        else setToggle(true);
    }, [tip]);

    const closeWindow = () => {
        dispatch(postaviTipParfema(''));
    };

  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ zIndex: 200 }}
          className='bg-black/50 h-screen w-full fixed flex justify-center items-center'
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeWindow();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='bg-white relative p-12 m-0 md:m-24 rounded-lg shadow-lg flex flex-col'
            onClick={(e) => {
              // Ovo će sprečiti klikove na unutarnjim elementima da se prenose do roditeljskog diva
              e.stopPropagation();
            }}
          >
            <button
              onClick={closeWindow}
              className='text-xl text-red-500 absolute right-4 top-4'
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <h1 className='text-4xl font-bold font2 mb-8'>
              Proveri dostupnost za {tip === 'muski' ? 'Muški' : tip || tip === 'zenski' ? 'Ženski' : tip}
            </h1>
            <div className='flex items-center border border-gray-300 rounded-full px-4 py-2'>
              <input
                type='text'
                className='w-full outline-none'
                placeholder='Pretraži...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
                <FontAwesomeIcon icon={faSearch} className='text-gray-400 ml-2' />
            </div>
            <div className='p-2 mt-12 border border-black/50 h-64 overflow-y-auto'>
              {parfemi &&
                parfemi
                  .filter(
                    (parfem) =>
                      parfem.tip === tip &&
                      (parfem.naziv.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        parfem.kuca.toLowerCase().includes(searchTerm.toLowerCase()))
                  )
                  .map((x, key) => (
                    <div key={key} className='border-b-[1px] border-gray-500 p-2 flex flex-col'>
                      <h2 className='text-sm text-black font-semibold'>{x.naziv}</h2>
                      <p className='text-xs italic text-gray-700'>{x.kuca}</p>
                    </div>
                  ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dostupnost;
