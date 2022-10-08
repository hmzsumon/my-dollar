import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAdmin }) => {
  const { isLoading, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  console.log('auth', isAuthenticated);

  return (
    <>
      {isLoading === false &&
        (isAuthenticated === false ? (
          <Navigate to='/' />
        ) : isAdmin ? (
          user.role !== 'admin' ? (
            <Navigate to='/' />
          ) : (
            children
          )
        ) : (
          children
        ))}
    </>
  );
};

export default ProtectedRoute;
