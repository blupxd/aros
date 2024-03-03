import React from 'react'
import data from '../data/parfemi.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus, faVenusMars } from '@fortawesome/free-solid-svg-icons'


const Sheet = () => {
    const parfemi = data
  return (
    <div className='bg-black p-12'>
        <h1 className='font2 text-white text-5xl md:text-7xl'>Dostupnost</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-12'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-white border-b border-white mb-4 text-3xl'>Muski <FontAwesomeIcon className="text-blue-500" icon={faMars} /></h1>
                {parfemi && parfemi.filter((parfem) => parfem.tip === 'muski').slice(0,5).map((x, key) => (
                    <div
                    key={key}
                    className='bg-white p-2 flex flex-col'
                    >
                    <h2 className='text-sm text-black font-semibold'>{x.naziv}</h2>
                    <p className='text-xs italic text-gray-700'>{x.kuca}</p>
                </div>
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-white border-b border-white mb-4 text-3xl'>Zenski <FontAwesomeIcon className="text-pink-500" icon={faVenus} /></h1>
                {parfemi && parfemi.filter((parfem) => parfem.tip === 'zenski').slice(0,5).map((x, key) => (
                    <div
                    key={key}
                    className='bg-white p-2 flex flex-col'
                    >
                    <h2 className='text-sm text-black font-semibold'>{x.naziv}</h2>
                    <p className='text-xs italic text-gray-700'>{x.kuca}</p>
                </div>
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-white border-b border-white mb-4 text-3xl'>Unisex <FontAwesomeIcon className="text-gray-300" icon={faVenusMars} /></h1>
                {parfemi && parfemi.filter((parfem) => parfem.tip === 'unisex').slice(0,5).map((x, key) => (
                    <div
                    key={key}
                    className='bg-white p-2 flex flex-col'
                    >
                    <h2 className='text-sm text-black font-semibold'>{x.naziv}</h2>
                    <p className='text-xs italic text-gray-700'>{x.kuca}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sheet