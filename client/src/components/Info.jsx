import React from 'react';
import slika4 from '../images/slika4.png';

const Info = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='grid mx-8 md:mx-24 grid-cols-1 md:grid-cols-2 my-48 font2 items-center justify-center'>
        <div className='bg-white p-12 md:w-full h-auto md:h-96'>
          <h1 className='text-5xl text-justify'>STA SU DEKANTI I ZASTO SU DOBRI</h1>
          <p className='text-lg md:text-base'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut incidunt est quibusdam, velit error repellendus!
            Exercitationem voluptatibus adipisci, officia saepe unde, non assumenda corrupti magni officiis esse ab quae fuga.
          </p>
        </div>
        <div className='w-full h-96 border-b-[5px] md:border-l-[5px] border-amber-400 bg-red-400 overflow-hidden relative'>
          <img src={slika4} alt="Slika 4" className='w-full h-full object-cover' />
        </div>
      </div>
      <div className='bg-white flex flex-col justify-center font2 p-8 md:p-24 items-center w-full'>
        <h1 className='text-6xl text-amber-500 font-bold text-center py-12 md:py-24'>PRONADJITE PARFEM ZA VAS</h1>
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
      <h1 className='text-amber-500 text-xl'>{naslov}</h1>
      <p className='w-full py-2 border-y text-gray-700 border-black text-justify text-md'>
        {desc}
      </p>
      <button className='px-4 py-2 bg-black text-white mt-2'>Vidi ponudu</button>
    </div>
  )
}

export default Info;
