import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PerfumeList from './PerfumeList'; // Create this component for displaying perfumes
import AddPerfumeForm from './AddPerfumeForm'; // Create this component for adding perfumes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    // Provera postojanja tokena u localStorage
    const userToken = localStorage.getItem('user');
    if (userToken) {
      setIsLoggedIn(true);
    } else {
      // Ako ne postoji token, preusmeri na login stranicu
      history('/admin-login');
    }
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    history('/admin-login');
  };

  return (
    <div className='bg-white m-6 md:m-24 p-6 md:p-12'>
      {isLoggedIn ? (
        <div className='flex flex-col gap-2'>
          <button className='text-red-500 text-xl' onClick={handleLogout}>Logout <FontAwesomeIcon icon={faSignOut} /></button>
          
          <AddPerfumeForm />
          <PerfumeList />
        </div>
      ) : (
        'Not allowed'
      )}
    </div>
  );
};

export default Admin;
