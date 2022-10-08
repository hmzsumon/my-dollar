import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutUserMutation } from '../../features/auth/authApi';

const PrimaryDropDownMenu = ({ setTogglePrimaryDropDown, user }) => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
    enqueueSnackbar('Logout Successfully', { variant: 'success' });
    setTogglePrimaryDropDown(false);
  };

  const navs = [
    {
      title: 'Supercoin Zone',
      icon: <OfflineBoltIcon sx={{ fontSize: '18px' }} />,
      redirect: '/',
    },
    {
      title: 'My Dollar Plus Zone',
      icon: <AddCircleIcon sx={{ fontSize: '18px' }} />,
      redirect: '/',
    },
    {
      title: 'My Exchange Zone',
      icon: <ShoppingBagIcon sx={{ fontSize: '18px' }} />,
      redirect: '/orders',
    },

    {
      title: 'Notifications',
      icon: <NotificationsIcon sx={{ fontSize: '18px' }} />,
      redirect: '/',
    },
  ];

  return (
    <div className='absolute w-60 -left-24 ml-2 top-9 bg-white shadow-2xl rounded flex-col text-sm'>
      {user.role === 'admin' && (
        <Link
          className='pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t'
          to='/admin/dashboard'
        >
          <span className='text-primary-blue'>
            <DashboardIcon sx={{ fontSize: '18px' }} />
          </span>
          Admin Dashboard
        </Link>
      )}

      <Link
        className='pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t'
        to='/account'
      >
        <span className='text-primary-blue'>
          <AccountCircleIcon sx={{ fontSize: '18px' }} />
        </span>
        My Profile
      </Link>

      {navs.map((item, i) => {
        const { title, icon, redirect } = item;

        return (
          <>
            <Link
              className='pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50'
              to={redirect}
              key={i}
            >
              <span className='text-primary-blue'>{icon}</span>
              {title}
            </Link>
          </>
        );
      })}

      <div
        className='pl-3 py-3.5 flex gap-3 items-center hover:bg-gray-50 rounded-b cursor-pointer'
        onClick={handleLogout}
      >
        <span className='text-primary-blue'>
          <PowerSettingsNewIcon sx={{ fontSize: '18px' }} />
        </span>
        Logout
      </div>

      <div className='absolute right-1/2 -top-2.5'>
        <div className='arrow_down'></div>
      </div>
    </div>
  );
};

export default PrimaryDropDownMenu;
