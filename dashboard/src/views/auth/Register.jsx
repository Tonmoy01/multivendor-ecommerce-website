import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGithub, AiOutlineGooglePlus } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';

function Register() {
  const [state, setState] = useState({ name: '', email: '', password: '' });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(state);
  };

  return (
    <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
      <div className='w-[350px] text-[#d0d2d6] p-2'>
        <div className='bg-[#283046] p-4 rounded-md'>
          <h2 className='text-xl mb-3'>Welcome to E-Commerce</h2>
          <p className='text-sm mb-3'>
            Please register to your account & start your business
          </p>

          <form onSubmit={submitHandler}>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                placeholder='Enter your name'
                id='name'
                required
                value={state.name}
                onChange={inputHandler}
                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
              />
            </div>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                id='email'
                required
                value={state.email}
                onChange={inputHandler}
                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
              />
            </div>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                placeholder='Enter your password'
                id='password'
                required
                value={state.password}
                onChange={inputHandler}
                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
              />
            </div>
            <div className='flex items-center w-full gap-3 mb-3'>
              <input
                type='checkbox'
                name='checkbox'
                id='checkbox'
                required
                className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500'
              />
              <label htmlFor='checkbox'>
                I agree to privacy and policy & terms
              </label>
            </div>
            <button className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 transition duration-300 ease-in-out'>
              Sign Up
            </button>

            <div className='flex items-center mb-3 gap-3 justify-center'>
              <p>
                Already have an account? <Link to='/login'>Signin here</Link>
              </p>
            </div>

            <div className='w-full flex justify-center items-center mb-3'>
              <div className='w-[45%] bg-slate-700 h-[1px]'></div>
              <div className='w-[10%] flex justify-center items-center'>
                <span className='pb-1'>Or</span>
              </div>
              <div className='w-[45%] bg-slate-700 h-[1px]'></div>
            </div>

            <div className='flex justify-center items-center gap-3'>
              <div className='w-[35px] h-[35px] flex justify-center items-center rounded-md bg-orange-500 shadow-lg hover:shadow-orange-700/50 cursor-pointer overflow-hidden'>
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>
              <div className='w-[35px] h-[35px] flex justify-center items-center rounded-md bg-indigo-500 shadow-lg hover:shadow-indigo-700/50 cursor-pointer overflow-hidden'>
                <span>
                  <FiFacebook />
                </span>
              </div>
              <div className='w-[35px] h-[35px] flex justify-center items-center rounded-md bg-cyan-500 shadow-lg hover:shadow-cyan-700/50 cursor-pointer overflow-hidden'>
                <span>
                  <CiTwitter />
                </span>
              </div>
              <div className='w-[35px] h-[35px] flex justify-center items-center rounded-md bg-purple-500 shadow-lg hover:shadow-purple-700/50 cursor-pointer overflow-hidden'>
                <span>
                  <AiOutlineGithub />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
