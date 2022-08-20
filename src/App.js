import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import InterventionForm from "./InterventionForm";
import axios from "axios";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/intervention" element={<InterventionForm />} />
    </Routes>
   </BrowserRouter>
   );
 }


export default App;
