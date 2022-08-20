import userEvent from '@testing-library/user-event';
import React, {useState , useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { Button, Row, Container, Col, Table}from 'react-bootstrap';
import axios from 'axios';



const getCurrentCustomer = async () => {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo";
  const headers = {'Authorization': `Bearer ${token}`};

  try {
		const resp2 = await axios.get("/customers/current", { headers });

		console.log("[getCurrentCustomer] res is :", resp2);
    console.log("List of interventions is :", resp2.data.interventions);

		localStorage.setItem('listInterventions', JSON.stringify(resp2.data.interventions));

	} catch (error) {
		console.warn("[getCurrentCustomer] Error:", error)
	}

}

function Dashboard() {
  useEffect(() => {
    getCurrentCustomer();
  }, []);

  const navigate = useNavigate();
  const Logout = () => {
    navigate('/login', {replace: true});
  }

  const toIntervention = () => {
    alert('You clicked on something');
  };

 
  const listInterventions = JSON.parse(localStorage.getItem('listInterventions')).map((intervention) =>
  
  <tr key={intervention.id} value={intervention.id}>
    <td>{intervention.id}</td>
    <td>{intervention.createdAt}</td>
    <td>{intervention.building.address}</td>
    <td>{intervention.battery.id}</td>
    <td>{intervention.column ? intervention.column.id : "n/a"}</td>
    <td>{intervention.elevator ? intervention.elevator.id : "n/a"}</td>
    <td>{intervention.report}</td>
    <td>{intervention.status}</td>
    <td>{intervention.result}</td>
  </tr>
  ); 
  
  //   <ListGroup.Item action onClick={alertClicked}>
    //   This one is a button
    // </ListGroup.Item>
  return (
    <Container className='mt-5'>
      <Row className='justify-content-center' >
        <Col lg={4} md={6} sm={12} className=" text-center " >  
          <div className='dashboard'>
             <h2>Welcome, <span>{localStorage.getItem('userEmail')}</span></h2>
             <p></p>
             <Table striped bordered hover>
             <thead>
                <tr>
                  <th>ID</th>
                  <th>Created</th>
                  <th>Building</th>
                  <th>Battery ID</th>
                  <th>Column ID</th>
                  <th>Elevator ID</th>
                  <th>Report</th>
                  <th>Status</th>
                  <th>Result</th>
                  
                </tr>
              </thead>
              <tbody>
                {listInterventions}
              </tbody>
            </Table>
            <Link to="/intervention">New Intervention</Link><br/> 
            <Button variant='danger' onClick={Logout}>Logout</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
  
}

export default Dashboard
 