import React from 'react'

const Navbar = () => {
    const menuItems = ["Pocetna", "Dekanti", "O nama", "Kupovina", "Pisite Nam"]
  return (
    <div className='fixed md:flex hidden w-full z-50'>
        <ul 
        className='flex w-full items-center 
        justify-center gap-12 font-bold
        p-6
        bg-gradient-to-b from-gray-950/30 to-white/20 backdrop-blur-md'>
            {menuItems.map((item, index) => (
            <li className='custom-border-hover text-black text-lg font2' key={index}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar