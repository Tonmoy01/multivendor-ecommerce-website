import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';

import logo from '../../assets/logo.png';

function AdminLogin() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  const [state, setState] = useState({ email: '', password: '' });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(admin_login(state));
  };

  const overRrideStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    height: '24px',
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }

    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate('/');
    }
  }, [errorMessage, successMessage]);

  return (
    <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
      <div className='w-[350px] text-[#d0d2d6] p-2'>
        <div className='bg-[#283046] p-4 rounded-md'>
          <div className='h-[70px] flex justify-center items-center'>
            <div className='w-[180px] h-[50px]'>
              <img src={logo} alt='Image' className='w-full h-full' />
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                id='email'
                value={state.email}
                onChange={inputHandler}
                required
                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
              />
            </div>
            <div className='flex flex-col w-full gap-1 mb-5'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                placeholder='Enter your password'
                id='password'
                value={state.password}
                onChange={inputHandler}
                required
                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
              />
            </div>
            <button
              disabled={loader ? true : false}
              className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 transition duration-300 ease-in-out'
            >
              {loader ? (
                <PropagateLoader color='#fff' cssOverride={overRrideStyle} />
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

// ! open video number 10
