import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step5(props) {
  if (props.currentStep !== 5) {
    return null
  } 
  
  return(
    <div>
    <p>To Address Details</p>
    <form onSubmit={props.handleSubmit}>
      <p>Name</p>
      <input
        className="toName"
        id="toName"
        name="toName"
        type="text"
        placeholder="Enter Name"
        value={props.toname}
        onChange={props.handleChange}
        />
        <div>
        <p>Address</p>
      <input
        className="toAddr"
        id="toAddr"
        name="toAddr"
        type="text"
        placeholder="Enter Address"
        value={props.toAddress}
        onChange={props.handleChange}
        /> 
        </div>
        <div>
        <p>Province</p>
      <input
        className="toProvince"
        id="toProvince"
        name="toProvince"
        type="text"
        placeholder="Enter Province"
        value={props.topro}
        onChange={props.handleChange}
        /> 
        </div>
        <div>
        <p>ZipCode</p>
      <input
        className="toZipCode"
        id="toZipCode"
        name="toZipCode"
        type="numbers"
        placeholder="Enter ZipCode(numbers only)"
        value={props.tozip}
        onChange={props.handleChange}
        inputMode="numeric" 
        /> 
       </div>   
      </form>         
    </div>

    
  );
}