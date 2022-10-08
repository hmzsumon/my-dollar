import TextField from '@mui/material/TextField';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

import { login, reset } from '../../features/auth/authSlice';
const { useSelector, useDispatch } = require('react-redux');

const Login = () => {
  const dispatch = useDispatch();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(login({ email, password }));
  };
  const redirect = location.search
    ? location.search.split('=')[1]
    : user?.role === 'admin'
    ? '/admin/dashboard'
    : '/';

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar('Login success', { variant: 'success' });
      navigate(redirect);
    }
    if (isError) {
      enqueueSnackbar(message, { variant: 'error' });
    }
    dispatch(reset());
  }, [
    isSuccess,
    isError,
    message,
    enqueueSnackbar,
    navigate,
    redirect,
    dispatch,
  ]);

  return (
    <main className='w-full mt-12 sm:pt-20 sm:mt-0'>
      {/* <!-- row --> */}
      <div className='flex sm:w-4/6 sm:mt-4 m-auto mb-7 rounded-lg  border-general bg-white border '>
        {/* <!-- login column --> */}
        <div className='flex-1 overflow-hidden'>
          {/* <!-- edit info container --> */}
          <div className='text-center py-10 px-4 sm:px-14'>
            <h1 className='text-3xl font-semibold text-gray-700 my-4 text-center'>
              Login to your account
            </h1>
            {/* <!-- input container --> */}
            <form onSubmit={handleLogin}>
              <div className='flex flex-col w-full gap-4'>
                <TextField
                  fullWidth
                  id='email'
                  label='Email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextField
                  fullWidth
                  id='password'
                  label='Password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* <span className="text-xxs text-red-500 font-medium text-left mt-0.5">Please enter valid Email ID/Mobile number</span> */}

                {/* <!-- button container --> */}
                <div className='flex flex-col gap-2.5 mt-2 mb-16'>
                  <button
                    type='submit'
                    className='text-white py-3 w-full bg-orange-500 shadow hover:shadow-lg rounded-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={isLoading}
                  >
                    {isLoading ? <PulseLoader color={'#fff'} /> : 'Login'}
                  </button>
                  <Link
                    to='/password/forgot'
                    className='hover:bg-gray-50 text-blue-500 text-center py-3 w-full shadow border rounded-sm font-medium'
                  >
                    Forgot Password?
                  </Link>
                </div>
                {/* <!-- button container --> */}
              </div>
            </form>
            {/* <!-- input container --> */}

            <Link
              to='/register'
              className='font-medium text-sm text-blue-600 hover:text-blue-500'
            >
              New to My Dollar? Create an account
            </Link>
          </div>
          {/* <!-- edit info container --> */}
        </div>
        {/* <!-- login column --> */}
      </div>
      {/* <!-- row --> */}
    </main>
  );
};

export default Login;
