import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPalette, faMagic, faComments } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div id="o-nama" className='bg-gradient-to-t from-amber-200 to-orange-300 py-24 px-12 '>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-7xl mb-16 text-black/70 pb-2 border-b-[2px] border-yellow-500 text-center font2'>Dobrodošli u svet AROS dekanta</h2>
            <div className='flex flex-col gap-4 text-black/40 text-xl text-justify px-0 md:px-24 py-12'>
                <p >
                Dobrodošli u svet AROS dekanta - mesta gde miris postaje priča. 
                Mi smo strastveni obožavaoci parfema koji verujemo da svaki miris nosi sa sobom jedinstvenu priču i emociju. 
                AROS je online zajednica stvorena iz ljubavi prema umetnosti mirisa.
                </p>
                <p>Naša misija je da vam omogućimo da istražujete i doživite najekskluzivnije parfeme popularnih brendova na potpuno novi način.
                    Kroz našu kolekciju dekanta, pružamo vam priliku da otkrijete nove mirisne avanture bez obaveze da odmah razmišljate o kupovini pune boce.</p>
                <p>Naša zajednica okuplja zaljubljenike u parfeme koji dele istu strast i želju za istraživanjem sveta mirisa.</p>
            </div>
            
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-12 text-xl text-white '>
                <div className='flex items-center bg-black p-4'>
                <FontAwesomeIcon icon={faPalette} className='text-4xl mr-2' />
                <span className='italic'>Ekskluzivni mirisi</span>
                </div>
                <div className='flex items-center bg-black p-4'>
                <FontAwesomeIcon icon={faMagic} className='text-4xl mr-2' />
                <span className='italic'>Dekanti za nove avanture</span>
                </div>
                <div className='flex items-center bg-black p-4'>
                <FontAwesomeIcon icon={faComments} className='text-4xl mr-2' />
                <span className='italic'>Zajednica ljubitelja parfema</span>
                </div>
                <div className='flex items-center bg-black p-4'>
                <FontAwesomeIcon icon={faHeart} className='text-4xl mr-2' />
                <span className='italic'>Ljubav prema svetu mirisa</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
