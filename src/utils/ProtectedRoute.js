
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isLogin } = useSelector((state) => state.logins);
    
    return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute