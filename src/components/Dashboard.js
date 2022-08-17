import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import axios from 'axios';

function Dashboard({Logout}) {
  

  return (
    <>
        <Form.Select size="lg">
            
        </Form.Select>
        <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
    </>
  )
}

export default Dashboard
