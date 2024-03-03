import React from 'react'

const Navbar = () => {
    const menuItems = ["Pocetna", "Dekanti", "O nama", "Porucivanje", "Kontakt"]
  return (
    <div className='fixed hidden w-full z-50'>
        <ul 
        className='flex items-center 
        justify-center gap-12 font-bold
        p-6 text-sm
        bg-gradient-to-b from-gray-950/30 to-transparent backdrop-blur-md'>
            {menuItems.map((item, index) => (
            <li key={index}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar