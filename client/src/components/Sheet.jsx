import React from 'react'
import data from '../data/parfemi.json'

const Sheet = () => {
    const parfemi = data
  return (
    <div className='bg-black p-12'>
        <h1 className='font2 text-white text-5xl md:text-7xl'>Dostupnost</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-12'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-white border-b border-blue-500 mb-4 text-3xl'>Muski</h1>
                {parfemi && parfemi.filter((parfem) => parfem.tip === 'muski').slice(0,5).map((x, key) => (
                    <div
                    key={key}
                    className='bg-blue-500 p-2 flex flex-col'
                    >
                    <h2 className='text-sm text-gray-950 font-semibold'>{x.naziv}</h2>
                    <p className='text-xs italic text-gray-300'>{x.kuca}</p>
                </div>
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-white border-b border-pink-500 mb-4 text-3xl'>Zenski</h1>
                {parfemi && parfemi.filter((parfem) => parfem.tip === 'zenski').slice(0,5).map((x, key) => (
                    <div
                    key={key}
                    className='bg-pink-300 p-2 flex flex-col'
                    >
                    <h2 className='text-sm text-gray-950 font-semibold'>{x.naziv}</h2>
                    <p className='text-xs italic text-gray-300'>{x.kuca}</p>
                </div>
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-white border-b border-white mb-4 text-3xl'>Unisex</h1>
                {parfemi && parfemi.filter((parfem) => parfem.tip === 'unisex').slice(0,5).map((x, key) => (
                    <div
                    key={key}
                    className='bg-white p-2 flex flex-col'
                    >
                    <h2 className='text-sm text-gray-950 font-semibold'>{x.naziv}</h2>
                    <p className='text-xs italic text-gray-700'>{x.kuca}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sheet