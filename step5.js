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
      <label htmlFor="toAddress">Name</label>
      <input
        className="form-control"
        id="toAddress"
        name="toAddress"
        type="text"
        placeholder="Enter Name"
        value={props.toName}
        onChange={props.handleChange}
        />
        <div>
        <label htmlFor="toAddress">Address</label>
      <input
        className="form-control"
        id="toAddress"
        name="toAddress"
        type="text"
        placeholder="Enter Address"
        value={props.toAddress}
        onChange={props.handleChange}
        /> 
        </div>
        <div>
        <label htmlFor="toAddress">Province</label>
      <input
        className="form-control"
        id="toAddress"
        name="toAddress"
        type="text"
        placeholder="Enter Province"
        value={props.toProvince}
        onChange={props.handleChange}
        /> 
        </div>
        <div>
        <label htmlFor="toAddress">ZipCode</label>
      <input
        className="form-control"
        id="toAddress"
        name="toAddress"
        type="numbers"
        placeholder="Enter ZipCode(numbers only)"
        value={props.toZipCode}
        onChange={props.handleChange}
        inputMode="numeric" 
        required pattern="^\d{5,6}(?:[-\s]\d{4})?$"
        /> 
        </div>   
        <input type="submit" value="Submit" onClick={"return handleSubmit()"}/>          
    </div>

    
  );
}