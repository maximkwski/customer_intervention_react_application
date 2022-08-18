import React, {useEffect, useState} from 'react'
import { Routes, Route , Link} from "react-router-dom";
import { Form, FloatingLabel, Button}from 'react-bootstrap';
// import axios from 'axios';

function InterventionForm() {
  return (
    <section>
        <div >
            <h1>New Intervention:</h1>
            <form id="myForm" >
                <fieldset>
                      <div>
                          <Form.Select aria-label="Select a Client">
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          </Form.Select>
                      </div>
                      <div>
                          <Form.Select aria-label="Select a Building">
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          </Form.Select>
                      </div>
                      <div>
                          <Form.Select aria-label="Select a Battery">
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          </Form.Select>
                      </div>
                      <div>
                          <Form.Select aria-label="Select a Column">
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          </Form.Select>
                      </div>
                      <div>
                          <Form.Select aria-label="Select an Elevator">
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          </Form.Select>
                      </div>
                      <div>
                          <Form.Select aria-label="Select an Employee">
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          </Form.Select>
                      </div>
                      <div>
                        <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
                          <Form.Control as="textarea" placeholder="Leave a description here" />
                        </FloatingLabel>
                      </div>
                    
                </fieldset>  
          </form>    
        </div> 

  </section>
  )
}
export default InterventionForm


