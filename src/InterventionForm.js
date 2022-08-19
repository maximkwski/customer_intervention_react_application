import React, {useEffect, useState} from 'react'
import { Routes, Route , Link} from "react-router-dom";
import { Form, FloatingLabel, Button}from 'react-bootstrap';
import axios from 'axios';

function InterventionForm() {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo";
  
  const [buildingData, setBuildingData] = useState([]);
  const [batteriesData, setBatteriesData] = useState([]);
  const [columnsData, setColumnsData] = useState([]);
  const [elevatorsData, setElevatorsData] = useState([]);
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    const headers = {
        'Authorization': `Bearer ${token}`,
    };
    axios.get('/buildings', { headers })
      .then(response => setBuildingData(response.data));
    axios.get('/batteries', { headers })
      .then(response => setBatteriesData(response.data));
    axios.get('/columns', { headers })
      .then(response => setColumnsData(response.data));
    axios.get('/elevators', { headers })
      .then(response => setElevatorsData(response.data));  
    axios.get('/customers', { headers })
      .then(response => setCustomer(response.data)); 
    }, []);

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
    const listCustomers = elevatorsData.map((customer) =>
    <option key={elevator.id} value={elevator.id}>{elevator.id}</option>
    ); 

  return (
    <section>
      <div >
        <h1>New Intervention:</h1>
        <Form id="myForm" >
          <fieldset>
            <div>
              <Form.Select aria-label="Select a Building">
                {listBuildings}
              </Form.Select>
            </div>
            <div>
              <Form.Select aria-label="Select a Battery">
                {listBatteries}
              </Form.Select>
            </div>
            <div>
              <Form.Select aria-label="Select a Column">
                {listColumns}
              </Form.Select>
            </div>
            <div>
              <Form.Select aria-label="Select an Elevator">
                {listElevators}
              </Form.Select>
            </div>
            <div>
              <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
                <Form.Control as="textarea" placeholder="Leave a description here" />
              </FloatingLabel>
            </div>
              
          </fieldset>  
        </Form>
        <Link to="/dashboard">Back to Dashboard</Link> 
      </div>
  </section>
  )
}

export default InterventionForm


