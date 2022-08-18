import userEvent from '@testing-library/user-event';
import React, {useState} from 'react';
import { Routes, Route, useNavigate, Link } from "react-router-dom";


function Dashboard( {user, setUser} ) {
  const navigate = useNavigate();
  const Logout = () => {
    setUser({email: ""});
    navigate('/login', {replace: true});
  }
  return (
   <div className='dashboard'>
       <h2>Welcome, <span>{user.email}</span></h2>
       <Link to="/intervention">New Intervention</Link> 
       <button onClick={Logout}>Logout</button> 
    </div>
  )
  
}

export default Dashboard
 