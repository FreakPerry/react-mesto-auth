import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ onlyUnAuth, email, success, children }) => {
  const location = useLocation();

  if (onlyUnAuth && email) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate to={from} replace />;
  }

  if (success === true) {
    return <Navigate to={{ pathname: '/sign-in' }} replace />;
  }

  if (!onlyUnAuth && !email) {
    return <Navigate to={{ pathname: '/sign-in' }} state={{ from: location }} replace />;
  }

  return children;
};
