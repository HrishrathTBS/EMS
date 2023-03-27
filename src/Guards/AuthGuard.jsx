import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
// hooks
// import useAuth from '../hooks/useAuth';
// pages
// import Login from '../pages/authentication/Login';
import { isAuthenticated } from '../API/auth';

// ----------------------------------------------------------------------

export default function AuthGuard({ children }) {
  // const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  // if (!isAuthenticated) {
  //   if (pathname !== requestedLocation) {
  //     setRequestedLocation(pathname);
  //   }
  //   return <Login />;
  // }

  // if (requestedLocation && pathname !== requestedLocation) {
  //   setRequestedLocation(null);
  //   return <Navigate to={requestedLocation} />;
  // }
  if (!isAuthenticated()) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to={'/login'} />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  // if (!isAuthenticated()) {
  //   return <Navigate to={'/login'} />;
  // }
  // else{
  //   return <Navigate to={"/dashboard/user"} />;
  // }

  return <>{children}</>;
}

AuthGuard.propTypes = {
  children: PropTypes.node,
};
