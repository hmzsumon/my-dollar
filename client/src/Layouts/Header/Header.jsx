import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { MdClose, MdOutlineMenuOpen } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import OnImg from '../../assets/images/on.gif';
import logo from '../../assets/logo.png';
import Banner from './Banner';
import PrimaryDropDownMenu from './PrimaryDropDownMenu';
const menuItems = [
  { id: 1, name: 'Buy&Sell', link: '/' },
  { id: 2, name: 'Testimonials', link: '/testimonial' },
  { id: 3, name: 'Track EX', link: '/exchange' },
  { id: 4, name: 'Contact', link: '/contact' },
];

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const [togglePrimaryDropDown, setTogglePrimaryDropDown] = useState(false);
  const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className='fixed inset-x-0 top-0 z-30  flex flex-wrap items-center justify-between px-3 py-4  shadow-lg md:px-6 bg-[#252F38]'>
        <div className='flex items-center justify-start space-x-2 md:space-x-6 '>
          <MdOutlineMenuOpen
            className='text-3xl text-white  cursor-pointer md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          />
          <img src={logo} alt='logo' className='w-24' />
        </div>
        <div className='md:flex gap-4 hidden '>
          {menuItems.map((item) => (
            <NavLink
              to={item.link}
              key={item.id}
              className={(nav) =>
                nav.isActive ? 'text-[#E4791D]' : 'text-white'
              }
            >
              <h2 className='text-xl font-semibold  uppercase'>{item.name}</h2>
            </NavLink>
          ))}
        </div>
        <div className=' relative flex flex-col items-center justify-between gap-4'>
          {isAuthenticated === false ? (
            <div>
              <NavLink
                to='/login'
                className='focus:outline-none text-white bg-orange-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
              >
                Login
              </NavLink>
              <NavLink
                to='/register'
                className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
              >
                Register
              </NavLink>
            </div>
          ) : (
            <div>
              <span
                className='userDropDown flex items-center text-white font-medium gap-1 cursor-pointer'
                onClick={() => setTogglePrimaryDropDown(!togglePrimaryDropDown)}
              >
                {user?.name && user.name.split(' ', 1)}
                <span>
                  {togglePrimaryDropDown ? (
                    <ExpandLessIcon sx={{ fontSize: '16px' }} />
                  ) : (
                    <ExpandMoreIcon sx={{ fontSize: '16px' }} />
                  )}
                </span>
              </span>
              {togglePrimaryDropDown && (
                <PrimaryDropDownMenu
                  setTogglePrimaryDropDown={setTogglePrimaryDropDown}
                  user={user}
                />
              )}
            </div>
          )}

          {/* Operator */}
          <div className='flex gap-2'>
            <p className=' text-white'>
              Operator:{' '}
              <span className=' bg-blue-600 text-xs px-[5px] rounded-md'>
                Online
              </span>
            </p>
            <img src={OnImg} alt='' className='w-5' />
          </div>
        </div>
      </nav>
      <div className='mt-24'>
        <Banner />
      </div>
      {/* Mobile Menu */}
      <div
        className={`z-50 h-full fixed mobile_menu md:hidden transition duration-300 ease-in-out  top-0 w-9/12 ${
          isOpen ? 'active-mobile-menu' : 'mobile-menu'
        } `}
      >
        <div className='flex items-center justify-between px-4 pt-4 '>
          <NavLink to='/'>
            <img src={logo} alt='logo' className=' w-20 ' />
          </NavLink>

          <MdClose
            className='text-3xl font-bold text-red-500 transition duration-300 ease-in-out cursor-pointer hover:scale-125'
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className='mt-2 text-white '>
          {menuItems.map((item) => (
            <NavLink
              to={item.link}
              key={item.id}
              className='flex items-center justify-between px-2 py-4 cursor-pointer'
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
