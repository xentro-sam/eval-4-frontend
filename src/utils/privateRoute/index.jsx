import * as React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {LANDING} from '../../constants/routes';

export default function PrivateRoute() {
  const auth = localStorage.getItem('token');
  return auth ? <Outlet /> : <Navigate to={LANDING} />;
};
