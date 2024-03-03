import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SocialMedias = () => {
  return (
    <div style={{zIndex: 40}} className='fixed right-6 bottom-1/3'>
        <ul className='flex flex-col bg-gray-950 shadow-sm shadow-red-500 text-gray-400 gap-12 border border-white p-4'>
            <li>
                <a className='hover:text-amber-400 transition duration-300' href="https://www.instagram.com/aros.rs">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li>
                <a className='hover:text-amber-400 transition duration-300' href="https://www.tiktok.com/aros.rs">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
            </li>
            <li>
                <a className='hover:text-amber-400 transition duration-300' href="mailto:arosbusiness@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialMedias