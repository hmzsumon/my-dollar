import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard';
import ExchangeTable from './components/Admin/Exchanges/ExchangeTable';
import MainData from './components/Admin/MainData';
import NewNotice from './components/Admin/Notices/NewNotice';
import Notices from './components/Admin/Notices/Notices';
import UpdateNotice from './components/Admin/Notices/UpdateNotice';
import UsersTable from './components/Admin/UsersTable';
import NotFound from './components/NotFound';
import { loadUser } from './features/auth/authSlice';
import Contact from './Layouts/Contact/Contact';
import Home from './Layouts/Home/Home';
import Layout from './Layouts/Layout';
import Login from './Layouts/Login/Login';
import Register from './Layouts/Register/Register';
import Testimonials from './Layouts/Testimonials/Testimonials';
import ProtectedRoute from './Routes/ProtectedRoute';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/login'
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path='/register'
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path='/contact'
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path='/testimonial'
          element={
            <Layout>
              <Testimonials />
            </Layout>
          }
        ></Route>

        <Route
          path='/admin/dashboard'
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminDashboard activeTab={0}>
                <MainData />
              </AdminDashboard>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path='/admin/exchanges'
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminDashboard activeTab={1}>
                <ExchangeTable />
              </AdminDashboard>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path='/admin/users'
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminDashboard activeTab={2}>
                <UsersTable />
              </AdminDashboard>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path='/admin/notices'
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminDashboard activeTab={3}>
                <Notices />
              </AdminDashboard>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path='/admin/create/notice'
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminDashboard activeTab={3}>
                <NewNotice />
              </AdminDashboard>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path='/admin/notices/:id'
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminDashboard activeTab={3}>
                <UpdateNotice />
              </AdminDashboard>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path='*'
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
