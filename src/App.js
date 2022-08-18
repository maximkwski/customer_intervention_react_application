import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Links, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import InterventionForm from "./InterventionForm";

function App() {
  const adminUser = {
    email: "customer1@business.com",
    password: "password123"
  }
  const [user, setUser] = useState({email: ""});


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm adminUser={adminUser} user={user} setUser={setUser}/>} />
        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser}/>} />
        <Route path="/intervention" element={<InterventionForm />} />
    </Routes>
   </BrowserRouter>
   );
 }


export default App;
