import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  }

  return (
    <div >
      <p>From Address Details</p>
      <p>Name</p>
      <form onSubmit={props.handleSubmit}>
      <input
        className="Name"
        id="Name"
        name="Name"
        type="text"
        placeholder="Enter Name"
        value={props.name}
        onChange={props.handleChange}
      />
      <div>
        <p>Address</p>
        <input
          className="Address"
          id="Address"
          name="Address"
          type="text"
          placeholder="Enter Address"
          value={props.address}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <p>Province</p>
        <input
          className="Province"
          id="Province"
          name="Province"
          type="text"
          placeholder="Enter Province"
          value={props.pro}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <p>ZipCode</p>
        <input
          className="ZipCode"
          id="ZipCode"
          name="ZipCode"
          type="numbers"
          placeholder="Enter ZipCode(numbers only)"
          value={props.zip}
          onChange={props.handleChange}
          inputMode="numeric"
          
        />
      </div>
      </form>
    </div>

  );
}