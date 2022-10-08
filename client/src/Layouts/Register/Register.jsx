import TextField from '@mui/material/TextField';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { useRegisterMutation } from '../../features/auth/authApi';

const Register = () => {
  const [register, { isLoading, isSuccess, isError, error }] =
    useRegisterMutation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
  });

  const { username, name, email, phone, password, cpassword } = user;

  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      enqueueSnackbar('Password length must be atleast 6 characters', {
        variant: 'warning',
      });
      return;
    }
    if (password !== cpassword) {
      enqueueSnackbar("Password Doesn't Match", { variant: 'error' });
      return;
    }

    const formData = new FormData();
    formData.set('username', username);
    formData.set('name', name);
    formData.set('email', email);
    formData.set('phone', phone);
    formData.set('password', password);

    for (let key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
    register(formData);
  };

  const handleDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar('Registration Successful', { variant: 'success' });
      navigate('/login');
    }
    if (isError) {
      enqueueSnackbar(error?.data?.message, { variant: 'error' });
    }
  }, [isSuccess, isError, error, enqueueSnackbar, navigate]);

  return (
    <main className='w-full mt-12 sm:pt-20 sm:mt-0'>
      {/* <!-- row --> */}
      <div className='flex sm:w-4/6 sm:mt-4 m-auto mb-7 rounded-lg  border-general bg-white border '>
        {/* <!-- login column --> */}
        <div className='flex-1 overflow-hidden'>
          {/* <!-- edit info container --> */}
          <div className='text-center py-10 px-4 sm:px-14'>
            <h1 className='text-3xl font-semibold text-gray-700 my-4 text-center'>
              Register your account
            </h1>
            {/* <!-- input container --> */}
            <form onSubmit={handleRegister}>
              <div className='flex flex-col w-full gap-4'>
                <TextField
                  fullWidth
                  label='Username'
                  variant='outlined'
                  name='username'
                  value={username}
                  onChange={handleDataChange}
                  required
                />

                <TextField
                  fullWidth
                  label='Name'
                  variant='outlined'
                  name='name'
                  value={name}
                  onChange={handleDataChange}
                  required
                />
                <TextField
                  fullWidth
                  label='Email'
                  variant='outlined'
                  name='email'
                  type='email'
                  value={email}
                  onChange={handleDataChange}
                  required
                />

                <TextField
                  fullWidth
                  label='Phone'
                  variant='outlined'
                  name='phone'
                  type='text'
                  value={phone}
                  onChange={handleDataChange}
                  required
                />

                <TextField
                  fullWidth
                  label='Password'
                  variant='outlined'
                  name='password'
                  type='password'
                  value={password}
                  onChange={handleDataChange}
                  required
                />

                <TextField
                  fullWidth
                  label='Confirm Password'
                  variant='outlined'
                  name='cpassword'
                  type='password'
                  value={cpassword}
                  onChange={handleDataChange}
                  required
                />

                {/* <!-- button container --> */}
                <div className='flex flex-col gap-2.5 mt-2 mb-16'>
                  <button
                    type='submit'
                    className='text-white py-3 w-full bg-orange-500 shadow hover:shadow-lg rounded-sm font-medium'
                  >
                    {isLoading ? <PulseLoader color={'#fff'} /> : 'Register'}
                  </button>
                  <Link
                    to='/login'
                    className='hover:bg-gray-50 text-blue-500 text-center py-3 w-full shadow border rounded-sm font-medium'
                  >
                    Existing User? Log in
                  </Link>
                </div>
                {/* <!-- button container --> */}
              </div>
            </form>
            {/* <!-- input container --> */}
          </div>
          {/* <!-- edit info container --> */}
        </div>
        {/* <!-- login column --> */}
      </div>
      {/* <!-- row --> */}
    </main>
  );
};

export default Register;
