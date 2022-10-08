import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';

const AdminDashboard = ({ activeTab, children }) => {
  const [onMobile, setOnMobile] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setOnMobile(true);
    }
  }, []);

  return (
    <>
      <main className='flex min-h-screen mt-14 sm:min-w-full'>
        <div className=' hidden md:block'>
          <Sidebar activeTab={activeTab} />
        </div>
        {toggleSidebar && (
          <Sidebar activeTab={activeTab} setToggleSidebar={setToggleSidebar} />
        )}

        <div className='w-full sm:w-4/5 sm:ml-64 min-h-screen'>
          <div className='flex flex-col gap-6 sm:m-8 p-2 pb-6 overflow-hidden'>
            <button
              onClick={() => setToggleSidebar(true)}
              className='sm:hidden bg-gray-700 w-10 h-10 rounded-full shadow text-white flex items-center justify-center'
            >
              <MenuIcon />
            </button>
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
