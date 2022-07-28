import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import Dashboard from './dashboard';

export default function PrivateRouteDashboard() {
  const { user } = useAuth()
  console.log('My users are' , user)
  return user ? <Dashboard/> : <Navigate to='/login'/>
}

