import React, {useEffect, useState} from 'react'
import { Routes, Route , Link} from "react-router-dom";
import { Form, FloatingLabel, Button, Container, Row, Col}from 'react-bootstrap';
import axios from 'axios';
import logo from "./images/R2.png"

function InterventionForm() {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo";
  
  const [buildingData, setBuildingData] = useState([]);
  const [batteriesData, setBatteriesData] = useState([]);
  const [columnsData, setColumnsData] = useState([]);
  const [elevatorsData, setElevatorsData] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState([]);



  useEffect(() => {
    const headers = {
        'Authorization': `Bearer ${token}`,
    };
    
 
    // const resp2 = axios.get('/customers/current', { headers })
    // .then(response => setCurrentCustomer(response.data));
    // localStorage.setItem('customerInfo', JSON.stringify(resp2.data));

    axios.get('/buildings', { headers })
      .then(response => setBuildingData(response.data));
    axios.get('/batteries', { headers })
      .then(response => setBatteriesData(response.data));
    axios.get('/columns', { headers })
      .then(response => setColumnsData(response.data));
    axios.get('/elevators', { headers })
      .then(response => setElevatorsData(response.data));  
    }, []);

    // const currentCustomerId = currentCustomer.((customer) =>
    // <option key={customer.id} value={customer.id}>{customer.contact_name}</option>
    // ); 
    const listBuildings = buildingData.map((building) =>
    <option key={building.id} value={building.id}>{building.address}</option>
    ); 
    const listBatteries = batteriesData.map((battery) =>
    <option key={battery.id} value={battery.id}>{battery.id}</option>
    );  
    const listColumns = columnsData.map((column) =>
    <option key={column.id} value={column.id}>{column.id}</option>
    ); 
    const listElevators = elevatorsData.map((elevator) =>
    <option key={elevator.id} value={elevator.id}>{elevator.id}</option>
    ); 
   

  return (
  <Container className='mt-5'>
     <Row className='justify-content-center' >
      <Col lg={4} md={6} sm={12} className=" text-center " >
        <img className='logo-img' src={logo} />
        <Form id="myForm" >
        <h1>New Intervention:</h1>
            <div>
               {/* <Form.Select aria-label="Select a Customer">
                {currentCustomerId}
              </Form.Select> */}
              <h3>Select a Building:</h3>
              <Form.Select aria-label="Select a Building">
                {listBuildings}
              </Form.Select>
            </div>
            <div>
            <h3>Select a Battery:</h3>
              <Form.Select aria-label="Select a Battery">
                {listBatteries}
              </Form.Select>
            </div>
            <div>
            <h3>Select a Column:</h3>
              <Form.Select aria-label="Select a Column">
                {listColumns}
              </Form.Select>
            </div>
            <div>
            <h3>Select an Elevator:</h3>
              <Form.Select aria-label="Select an Elevator">
                {listElevators}
              </Form.Select>
            </div>
            <div>
            <h3>Description:</h3>
              <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
                <Form.Control as="textarea" placeholder="Leave a description here" />
              </FloatingLabel>
            </div>
            <Button variant='danger w-100' type="submit">Submit</Button>  
        </Form>
        <Link to="/dashboard">Back to Dashboard</Link> 
      </Col>  
    </Row>    
  </Container>      

  )
}

export default InterventionForm


