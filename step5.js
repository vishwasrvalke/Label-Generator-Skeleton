import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step5(props) {
  if (props.currentStep !== 5) {
    return null
  } 
  
  return(
    <div className="form-group">
    <p>To Address Details</p>
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="toname">Name</label>
      <input
        className="form-control"
        id="toname"
        name="toname"
        type="text"
        placeholder="Enter Name"
        value={props.toname}
        onChange={props.handleChange}
        />
        <div>
        <label htmlFor="toAddr">Address</label>
      <input
        className="form-control"
        id="toAddr"
        name="toAddr"
        type="text"
        placeholder="Enter Address"
        value={props.toAddress}
        onChange={props.handleChange}
        /> 
        </div>
        <div>
        <label htmlFor="topro">Province</label>
      <input
        className="form-control"
        id="topro"
        name="topro"
        type="text"
        placeholder="Enter Province"
        value={props.topro}
        onChange={props.handleChange}
        /> 
        </div>
        <div>
        <label htmlFor="tozip">ZipCode</label>
      <input
        className="form-control"
        id="tozip"
        name="tozip"
        type="numbers"
        placeholder="Enter ZipCode(numbers only)"
        value={props.tozip}
        onChange={props.handleChange}
        inputMode="numeric" 
        required pattern="^\d{5,6}(?:[-\s]\d{4})?$"
        /> 
       </div>   
      </form>         
    </div>

    
  );
}