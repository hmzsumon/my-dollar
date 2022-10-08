import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloseIcon from '@mui/icons-material/Close';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Avatar from '@mui/material/Avatar';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import person2 from '../../../assets/person2.jpg';
import './Sidebar.css';

const navMenu = [
  {
    icon: <EqualizerIcon />,
    label: 'Dashboard',
    ref: '/admin/dashboard',
  },

  {
    icon: <ShoppingBagIcon />,
    label: 'Exchanges',
    ref: '/admin/exchanges',
  },

  {
    icon: <GroupIcon />,
    label: 'Users',
    ref: '/admin/users',
  },
  {
    icon: <ReviewsIcon />,
    label: 'Notices',
    ref: '/admin/notices',
  },
  {
    icon: <AccountBoxIcon />,
    label: 'My Profile',
    ref: '/account',
  },
  {
    icon: <LogoutIcon />,
    label: 'Logout',
  },
];

const Sidebar = ({ activeTab, setToggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    // dispatch(logoutUser());
    enqueueSnackbar('Logout Successfully', { variant: 'success' });
    navigate('/login');
  };

  return (
    <aside className='sidebar z-10 sm:z-0 block min-h-screen fixed left-0 pb-14 max-h-screen w-3/4 sm:w-1/5 bg-gray-800 text-white overflow-x-hidden border-r'>
      <div className='flex items-center gap-3 bg-gray-700 p-2 rounded-lg shadow-lg my-4 mx-3.5'>
        <Avatar alt='Avatar' src={person2} />
        <div className='flex flex-col gap-0'>
          <span className='font-medium text-lg'>{user.name}</span>
          <span className='text-gray-300 text-sm'>{user.email}</span>
        </div>
        <button
          onClick={() => setToggleSidebar(false)}
          className='sm:hidden bg-gray-800 ml-auto rounded-full w-10 h-10 flex items-center justify-center'
        >
          <CloseIcon />
        </button>
      </div>

      <div className='flex flex-col w-full gap-0 my-8'>
        {navMenu.map((item, index) => {
          const { icon, label, ref } = item;
          return (
            <>
              {label === 'Logout' ? (
                <button
                  onClick={handleLogout}
                  className='hover:bg-gray-700 flex gap-3 items-center py-3 px-4 font-medium'
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </button>
              ) : (
                <Link
                  to={ref}
                  className={`${
                    activeTab === index ? 'bg-gray-700' : 'hover:bg-gray-700'
                  } flex gap-3 items-center py-3 px-4 font-medium`}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </Link>
              )}
            </>
          );
        })}
      </div>

      <div className='flex flex-col gap-1 bg-gray-700 p-3 rounded-lg shadow-lg mb-6 mt-28 mx-3.5 overflow-hidden'>
        <h5>Developed with ❤️ by:</h5>
        <div className='flex flex-col gap-0'>
          <a
            href='https://www.linkedin.com/in/jigar-sable'
            target='_blank'
            rel='noreferrer'
            className='font-medium text-lg hover:text-blue-500'
          >
            Jigar Sable
          </a>
          <a
            href='mailto:jigarsable21@gmail.com'
            className='text-gray-300 text-sm hover:text-blue-500'
          >
            jigarsable21@gmail.com
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
