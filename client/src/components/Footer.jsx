import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    const menuItems = ["Početna", "Dekanti", "Kupovina", "O nama", "Pišite Nam"]
  return (
    <div className='bg-black flex flex-col items-center'>
        <div className='grid p-12 grid-cols-1 gap-y-12 md:grid-cols-3 gap-x-24 items-top text-gray-500'>
            <div className='p-2 flex flex-col gap-4 items-center justify-start'>
                <h1 className='text-lg text-white border-b-[2px] border-amber-500 pb-1'>Linkovi</h1>
                <ul className='flex flex-col text-center text-xs gap-4 p-6'>
                {menuItems.map((item, index) => (
                <li className='custom-border-hover' key={index}>
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
                </li>
                ))}
            </ul>
            </div>
            <div className='p-2 flex flex-col items-center gap-4 justify-start'>
                <h1 className='text-lg text-white border-b-[2px] border-amber-500 pb-1'>Mreže</h1>
                <ul className='flex flex-col text-center text-xs gap-4 p-6 '>
                    <li className='custom-border-hover'>
                        <a href='https://www.instagram.com/aros.rs'>Tiktok <FontAwesomeIcon icon={faTiktok} /></a>
                    </li>
                    <li className='custom-border-hover'>
                        <a href='https://www.tiktok.com/@aros.rs'>Instagram <FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                </ul>
            </div>
            <div className='p-2 flex flex-col items-center justify-start gap-4'>
                <h1 className='text-lg text-white border-b-[2px] border-amber-500 pb-1'>Kontakt</h1>
                <a className='custom-border-hover text-xs' href="mailto:arosbusiness@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} /> arosbusiness@gmail.com
                </a>
            </div>
        </div>
        <div className='bg-gray-950/70 text-gray-700 text-xs text-center w-full p-12'>
            <h1>© 2024 AROS Dekanti</h1>
        </div>
    </div>
  )
}

export default Footer;
