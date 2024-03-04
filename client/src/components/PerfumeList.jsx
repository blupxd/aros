import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const PerfumeList = () => {
  const [parfemi, setParfemi] = useState([]);
  const [editingPerfume, setEditingPerfume] = useState(null);
  const [deletingPerfume, setDeletingPerfume] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const userToken = localStorage.getItem('user');
        const response = await axios.get('http://localhost:5000/parfemi', {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setParfemi(response.data);
      } catch (error) {
        console.error('Error fetching perfumes:', error.message);
      }
    };

    fetchPerfumes();
  }, []);

  const handleEdit = (parfem) => {
    setEditingPerfume(parfem);
  };

  const handleDelete = (parfem) => {
    setDeletingPerfume(parfem);
  };

  const handleConfirmDelete = async () => {
    try {
      const userToken = localStorage.getItem('user');
      await axios.delete(`http://localhost:5000/parfemi/${deletingPerfume._id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setParfemi((prevParfemi) => prevParfemi.filter((parfem) => parfem._id !== deletingPerfume._id));
      setDeletingPerfume(null);
    } catch (error) {
      console.error('Error deleting perfume:', error.message);
    }
  };

  const handleConfirmEdit = async (editedPerfume) => {
    try {
      const userToken = localStorage.getItem('user');
      await axios.put(`http://localhost:5000/parfemi/${editingPerfume._id}`, editedPerfume, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setParfemi((prevParfemi) =>
        prevParfemi.map((parfem) =>
          parfem._id === editingPerfume._id ? { ...parfem, ...editedPerfume } : parfem
        )
      );
      setEditingPerfume(null);
    } catch (error) {
      console.error('Error editing perfume:', error.message);
    }
  };

  const filteredParfemi = parfemi.filter(
    (parfem) =>
      parfem.naziv.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parfem.kuca.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parfem.tip.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-2 mx-0 md:mx-24 gap-12 md:gap-4 border border-black flex flex-col'>
       <div className='flex items-center relative mb-4 w-full'>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Pretraži parfeme'
          className='p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mr-2'
        />
        <FontAwesomeIcon className='absolute right-8 text-gray-500' icon={faSearch} />
      </div>
      <div className='flex flex-col h-96 overflow-auto gap-12 md:gap-4 '>
        {parfemi && filteredParfemi.map((x, key) => (
          <div className='grid grid-cols-1 md:grid-cols-3 justify-between' key={key}>
            <div className='bg-white p-2 border-b col-span-1 md:col-span-2 w-full border-black flex flex-col'>
              <h2 className='text-sm text-black font-semibold'>{x.naziv}</h2>
              <p className='text-xs italic text-gray-700'>{x.kuca}</p>
              <p className='text-sm italic text-red-400'>{x.tip}</p>
            </div>
            <div className='flex flex-row col-span-1 p-4 justify-center items-center w-full gap-4'>
              <button onClick={() => handleEdit(x)} className='px-4 py-2 rounded bg-black text-white'>
                Edit
              </button>
              <button onClick={() => handleDelete(x)} className='px-4 py-2 rounded bg-red-400 text-white'>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Edit Modal */}
      {editingPerfume && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-md'>
            <h2 className='text-2xl font-semibold text-center mb-4'>Edit Perfume</h2>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='naziv'>
                  Naziv
                </label>
                <input
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                  id='naziv'
                  type='text'
                  placeholder='Naziv'
                  value={editingPerfume.naziv}
                  onChange={(e) => setEditingPerfume({ ...editingPerfume, naziv: e.target.value })}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='kuca'>
                  Kuća
                </label>
                <input
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                  id='kuca'
                  type='text'
                  placeholder='Kuća'
                  value={editingPerfume.kuca}
                  onChange={(e) => setEditingPerfume({ ...editingPerfume, kuca: e.target.value })}
                />
              </div>
              <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='tip'>
                Tip
              </label>
              <select
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                id='tip'
                value={editingPerfume.tip}
                onChange={(e) => setEditingPerfume({ ...editingPerfume, tip: e.target.value })}
              >
                <option value='muski'>Muški</option>
                <option value='zenski'>Ženski</option>
                <option value='unisex'>Unisex</option>
              </select>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  type='button'
                  onClick={() => setEditingPerfume(null)}
                  className='bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600'
                >
                  Cancel
                </button>
                <button
                  type='button'
                  onClick={() => handleConfirmEdit(editingPerfume)}
                  className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
                >
                  Confirm Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {deletingPerfume && (
        <div className='fixed inset-0 flex text-center items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-md'>
            <h2 className='text-2xl font-semibold mb-4'>Delete Perfume</h2>
            <p>Are you sure you want to delete this perfume?</p>
            <div className='mt-4 flex items-center justify-center'>
              <button
                type='button'
                onClick={() => setDeletingPerfume(null)}
                className='bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600'
              >
                Cancel
              </button>
              <button
                type='button'
                onClick={handleConfirmDelete}
                className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfumeList;
