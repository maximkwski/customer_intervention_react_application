import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import InterventionForm from "./InterventionForm";
import axios from "axios";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/intervention" element={<InterventionForm />} />
        <Route
        path="*"
        element={<Navigate to="/login" replace />}
    />
    </Routes>
   </BrowserRouter>
   );
 }


export default App;
