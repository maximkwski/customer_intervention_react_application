import React from 'react'
import { Routes, route } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
// import axios from 'axios';

function InterventionForm() {
  return (
    <div>
        <Form.Select size="lg">
            <option>one</option>
            <option>two</option>
        </Form.Select>
        <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
    </div>
  )
}

export default InterventionForm


