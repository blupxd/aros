import { faBars, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const MobileNavbar = () => {
  const menuItems = ["Početna", "Dekanti", "Kupovina", "O nama", "Pišite Nam"]
  const [menu, setMenu] = useState(false);

  return (
    <div className='fixed md:hidden bg-white/40 backdrop-blur-md block top-0 w-full right-0 z-50'>
      <button
      style={{
        zIndex: 90
      }}
        className={`p-4 flex text-4xl ${menu ? 'text-black' : 'text-white-900'}`}
        onClick={() => setMenu(!menu)}
      >
        {menu ? <FontAwesomeIcon icon={faTimes} />
          : <FontAwesomeIcon icon={faBars} />}
      </button>
      <div
        className={`transition-transform w-full duration-500 transform ${menu ? 'translate-x-0' : 'translate-x-full'
          } md:hidden overflow-hidden`}
      >
        {menu && (
          <ul className='flex flex-col  h-screen text-2xl items-center gap-12 mt-16 font-bold p-6 text-black'>
            {menuItems.map((item, index) => (
              <li className='custom-border-hover' key={index}>
                <a onClick={() => setMenu(!menu)} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item === "Početna" && <FontAwesomeIcon icon={faHome} />} {item}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
