import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ucitajPonovo } from '../actions/rerenderAction';

const AddPerfumeForm = () => {
  const [newPerfume, setNewPerfume] = useState({ naziv: '', kuca: '', tip: 'muski' });
  const [error, setError] = useState(null);
  const dispatch = useDispatch()

  const handleAddPerfume = async () => {
    try {
      const token = localStorage.getItem('user');
      if (!token) {
        setError('User token not found.');
        return;
      }
      const response = await axios.post(
        'https://aros-b4l2.vercel.app/parfemi',
        newPerfume,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        dispatch(ucitajPonovo('UCITAJ_PONOVO'))
      console.log('Dodat novi parfem:', response.data);
      setNewPerfume({ naziv: '', kuca: '', tip: '' });
      setError(null);
    } catch (error) {
      setError('Greška pri dodavanju novog parfema.');
      console.error('Greška pri dodavanju novog parfema:', error.message);
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col gap-4 items-center mb-12 md:p-24 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dodaj novi parfem</h2>
      <form className="w-full flex flex-col gap-4">
        <div>
        <label className="block text-xl text-gray-700">Naziv</label>
          <input
            type="text"
            value={newPerfume.naziv}
            onChange={(e) => setNewPerfume({ ...newPerfume, naziv: e.target.value })}
            className="w-full border border-blue-400 p-2 focus:outline-none"
          />
        </div>
        <div>
        <label className="block text-xl text-gray-700">Kuća</label>
          <input
            type="text"
            value={newPerfume.kuca}
            onChange={(e) => setNewPerfume({ ...newPerfume, kuca: e.target.value })}
            className="w-full border border-blue-400 p-2 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xl text-gray-700">Tip</label>
          <select
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                id='tip'
                value={newPerfume.tip}
                onChange={(e) => setNewPerfume({ ...newPerfume, tip: e.target.value })}
              >
                <option value='muski'>Muški</option>
                <option value='zenski'>Ženski</option>
                <option value='unisex'>Unisex</option>
            </select>
        </div>
        <div>
          <button
            type="button"
            onClick={handleAddPerfume}
            className="px-4 py-2 bg-indigo-400 w-full"
          >
            Dodaj parfem
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>

  );
};

export default AddPerfumeForm;
