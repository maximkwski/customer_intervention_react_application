import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "customer1@business.com",
    password: "password123"
  }

  const [userIsLogged, setUserIsLogged] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
 
  const Login = details => {
    console.log(details);

    if (true) {
    console.log("Logged in");
      setUserIsLogged(true);
      setFailedLogin(false);
  } else {
    console.log("Details do not match!");
    setFailedLogin(true);
  }
}

  const Logout = () => {
    setUserIsLogged(false);
  }

  return (
    <div>
      <div className="App">
        {!userIsLogged && <LoginForm Login={Login} failedLogin={failedLogin}/>}
        {userIsLogged && <Dashboard Logout={Logout} />}
      </div> 
    </div>
  ); 
}

export default App;
