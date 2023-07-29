import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logi from "../Images/Logi.jpg"

function Login1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleJoin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:5000/login?email=${email}&&password=${password}`
      );
      const data = response.data;

      // Check if any element in the response data has a matching code
      const matchingElement = data.find(
        (item) => item.email === email && item.password === password
      );

      if (matchingElement && matchingElement.role === 'student') {

           // Store the ID in session
           sessionStorage.setItem('userId', matchingElement.id);
           const userId =  sessionStorage.getItem('userId');
           console.log(userId);

        console.log('Success');
        navigate('../Studhome/feed');
      } else {
        console.log('Invalid credentials or user role');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='px-40 h-screen py-40 shadow-lg bg-gray-600 '>
          <h1 className='text-5xl mb-6 text-white block text-center font-semibold'>Login</h1>
          <hr className='mt-3'></hr>
          <div className='mt-5 '>
            <label htmlFor='email' className='block text-2xl text-white mb-2'>
              Email
            </label>
            <input
              onChange={handleEmailChange}
              type='text'
              id='email'
              name='email'
              value={email}
              className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              placeholder='Enter Email'
            />
          </div>

          <div className='mt-5'>
            <label htmlFor='password' className='block text-2xl text-white mb-2'>
              Password
            </label>
            <input
              onChange={handlePasswordChange}
              type='password'
              id='password'
              name='password'
              value={password}
              className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              placeholder='Enter Password'
            />
          </div>
          <div className='mt-3 flex justify-between items-center'>
            <div>
              <input type='checkbox' />
              <label className='text-1xl'>Remember Me</label>
            </div>
            <div>
              <a href='a' className='text-indigo-800 font-semibold'>
                Forgot Password?
              </a>
            </div>
          </div>
          <div className='mt-4'>
            <button
              type='submit'
              onClick={handleJoin}
              className='border-2 border-yellow-100 bg-yellow-600 text-white py-1 w-full rounded-md hover:bg-yellow-800 hover:text-black font-semibold'
            >
              Login
            </button>
          </div>
        </div>
        <div className='px-12 '>
          <img src={Logi} alt='Login' />
        </div>
      </div>
    </div>
  );
}

export default Login1;
