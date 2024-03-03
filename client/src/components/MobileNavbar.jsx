import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const MobileNavbar = () => {
  const menuItems = ["Pocetna", "Dekanti", "O nama", "Porucivanje", "Kontakt"];
  const [menu, setMenu] = useState(false);

  return (
    <div className='fixed md:hidden flex top-0 w-full right-0 z-50'>
      <button
      style={{
        zIndex: 90
      }}
        className={`absolute p-4 right-0 text-5xl ${menu ? 'text-white' : 'text-gray-900'}`}
        onClick={() => setMenu(!menu)}
      >
        {menu ? <FontAwesomeIcon icon={faTimes} />
          : <FontAwesomeIcon icon={faBars} />}
      </button>
      <div
        className={`transition-transform w-full bg-black/40 backdrop-blur-md duration-500 transform ${menu ? 'translate-x-0' : 'translate-x-full'
          } md:hidden overflow-hidden`}
      >
        {menu && (
          <ul className='flex flex-col  h-screen  items-center gap-12 mt-16 font-bold p-6 text-white'>
            {menuItems.map((item, index) => (
              <li className='custom-border-hover' key={index}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
