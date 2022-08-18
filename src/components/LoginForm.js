import React, {useState} from 'react'
import { Routes, Route, Links, useNavigate } from "react-router-dom";

function LoginForm( {adminUser, user, setUser }) {

    const navigate = useNavigate();
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details); 
        navigate('/dashboard', {replace: true});
    }
    const Login = details => {
        console.log(details);
    
        if (details.email === adminUser.email && details.password === adminUser.password) {
        console.log("Logged in");
          setUser({
            email: details.email,
          });
      } else {
        console.log("Details do not match!");
      }
    }

  return (
    <div className='App'>
         <form onSubmit={submitHandler}>
         <div className="form-inner">
             <h2>Login</h2>
             
             <div className="form-group">
                 <label htmlFor="email">Email:</label>
                 <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
             </div>
             <div className="form-group">
                 <label htmlFor="password">Password:</label>
                 <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
             </div>
             <input type="submit" value="Login"/>
         </div>
     </form> 
    </div>
  )
}

export default LoginForm
