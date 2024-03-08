import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  const menuItems = ["Početna", "Dekanti", "Kupovina", "O nama", "Pišite Nam"];
  
  return (
    <div className='fixed top-0 left-0 w-full z-50 p-6 bg-gradient-to-b justify-around hidden md:flex from-gray-950/30 to-white/20 backdrop-blur-md'>
      <a href="#početna" className='mb-4'>
        <img src={logo} alt="logo" className='w-10' />
      </a>
      <ul className='flex items-center justify-center  gap-12 font-bold'>
        {menuItems.map((item, index) => (
          <li className='custom-border-hover text-black text-lg font2' key={index}>
            <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item === "Početna" && <FontAwesomeIcon icon={faHome} />} {item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
