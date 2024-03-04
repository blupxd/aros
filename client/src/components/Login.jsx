import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        username: loginData.username,
        password: loginData.password,
      });

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
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
