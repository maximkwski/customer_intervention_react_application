import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import { Routes, route } from "react-router-dom";

function App() {
  const adminUser = {
    email: "customer1@business.com",
    password: "password123"
  }

  const [userIsLogged, setUserIsLogged] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
  const [user, setUser] = useState({email: ""});
 
  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
    console.log("Logged in");
      setUserIsLogged(true);
      setFailedLogin(false);
      setUser({
        email: details.email,
      });
  } else {
    console.log("Details do not match!");
    setFailedLogin(true);
  }
}

  const Logout = () => {
    setUserIsLogged(false);
    setUser({email: ""});
  }

  return (
    <div>
      <div className="App">
        {!userIsLogged && <LoginForm Login={Login} failedLogin={failedLogin}/>}
        {userIsLogged && <Dashboard Logout={Logout} user={user}/> }
      </div> 
    </div>
  ); 
}

export default App;
