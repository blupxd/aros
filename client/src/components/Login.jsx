import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {PulseLoader } from 'react-spinners'

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const history = useNavigate();
  const [loader, setLoader] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://aros-b4l2.vercel.app/auth/login', {
        username: loginData.username,
        password: loginData.password,
      });
      setLoader(!loader)
      localStorage.setItem('user', response.data.token);
      history('/specijalna-ruta-za-admina');
    } catch (error) {
      setError('Invalid username or password');
      console.error('Error logging in:', error.message);
    }
  };
  useEffect(() => {
    const userToken = localStorage.getItem('user');
    if (userToken) 
        history('/specijalna-ruta-za-admina');
  }, [history]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
              error ? 'border-red-500' : ''
            }`}
            id="username"
            type="text"
            placeholder="Username"
            value={loginData.username}
            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          />
        </div>
        <div className='mb-6'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
              error ? 'border-red-500' : ''
            }`}
            id="password"
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
        </div>
        {error && (
          <div className="mb-6 flex items-center text-red-500">
            <span className="mr-2">&#9888;</span>
            <p className="text-sm">{error}</p>
          </div>
        )}
        <div className="flex flex-col items-center gap-4 justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          {loader ? <PulseLoader color="#3b82f6" /> : null}
        </div>
      </form>
    </div>
  );
};

export default Login;
