import userEvent from '@testing-library/user-event';
import React, {useState} from 'react';
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { Button }from 'react-bootstrap';
import axios from 'axios';


function Dashboard() {
  const navigate = useNavigate();
  const Logout = () => {
    navigate('/login', {replace: true});
  }
  console.log(localStorage.getItem('customerInfo'));
  return (
   <div className='dashboard'>
       <h2>Welcome, <span>{localStorage.getItem('userEmail')}</span></h2>
       <Link to="/intervention">New Intervention</Link> 
       <Button onClick={Logout}>Logout</Button>
    </div>
  )
  
}

export default Dashboard
 