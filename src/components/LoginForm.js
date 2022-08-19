import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col }from 'react-bootstrap';
import axios from 'axios';
import logo from "../images/R2.png"

function LoginForm( ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const submitHandler = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('email',email)
        formData.append('password',password)
        try {
        const resp = await axios.post('https://java-api.codeboxxtest.xyz/authenticate', formData );
        localStorage.setItem('user', JSON.stringify(resp.data))
        localStorage.setItem('userEmail', email);

        //const resp2 = await axios.get('https://java-api.codeboxxtest.xyz/customers/current');
        //localStorage.setItem('customerInfo', JSON.stringify(resp2.data));
        console.log(resp)
        navigate('/dashboard', {replace: true});
        } catch (error) {
          console.warn("[submitHandler] Error:", error)
    
        return null;
      }
    }

  return (
    <>
        <Container className='mt-5'>
            <Row className='justify-content-center' >
                <Col lg={4} md={6} sm={12} className=" text-center " >
                    <img className='logo-img' src={logo} />
                    <Form onSubmit={submitHandler}>
                        <h2>Login</h2>
                        <Form.Group className="mb-3">
                            
                            <Form.Control required type="email" name="email" id="email" placeholder='Email' value={email} onChange={ (e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            
                            <Form.Control required type="password" name="password" id="password" placeholder='Password' value={password} onChange={ (e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant='danger w-100' type="submit">Login</Button>
                        
                    </Form> 
                </Col>
                
          </Row>
         </Container>
    </>
  )
}

export default LoginForm
