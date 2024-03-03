import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Pisite = () => {
  return (
    <div id="pišite-nam" className='bg-white text-white py-12'>
        <div className='bg-gray-950 px-12 py-24 m-12 md:m-24 text-center'>
            <h1 className='text-5xl font-bold mb-8'>PIŠITE NAM</h1>
            <ul className='flex flex-col md:flex-row items-center justify-center gap-8'>
                <li className='w-40'>
                    <a className='text-3xl hover:text-orange-400 transition duration-300' href="https://www.instagram.com/aros.rs">
                        <FontAwesomeIcon icon={faInstagram} /> <br />Instagram
                    </a>
                </li>
                <li className='w-40'>
                    <a className='text-3xl hover:text-orange-400 transition duration-300' href="https://www.tiktok.com/aros.rs">
                        <FontAwesomeIcon icon={faTiktok} /> <br />Tiktok
                    </a>
                </li>
                <li className='w-40'>
                    <a className='text-3xl hover:text-orange-400 transition duration-300' href="mailto:arosbusiness@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} /> <br />Mejl
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Pisite;
