import userEvent from '@testing-library/user-event';
import React, {useState, useEffect} from 'react';
import { Routes, route } from "react-router-dom";

/*  */


function Dashboard({ Logout, user }) {
  return (
   <div>
       <h2>Welcome,<span>{user.email}</span></h2>
       <button onClick={Logout}>Logout</button>
    </div>
  )
  
}

export default Dashboard
 