import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  }

  return (
    <div className="form-group">
      <p>From Address Details</p>
      <label htmlFor="fromAddress">Name</label>
      <form onSubmit={props.handleFormSubmit}>
      <input
        className="form-control"
        id="fromAddress"
        name="fromAddress"
        type="fromAddress"
        placeholder="Enter Name"
        value={props.Name}
        onChange={props.handleChange}
      />
      <div>
        <label htmlFor="fromAddress">Address</label>
        <input
          className="form-control"
          id="fromAddress"
          name="fromAddress"
          type="fromAddress"
          placeholder="Enter Address"
          value={props.Address}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label htmlFor="fromAddress">Province</label>
        <input
          className="form-control"
          id="fromAddress"
          name="fromAddress"
          type="fromAddresss"
          placeholder="Enter Province"
          value={props.Province}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label htmlFor="fromAddress">ZipCode</label>
        <input
          className="form-control"
          id="fromAddress"
          name="fromAddress"
          type="numbers"
          placeholder="Enter ZipCode(numbers only)"
          value={props.ZipCode}
          onChange={props.handleChange}
          inputMode="numeric"
          required pattern="^\d{5,6}(?:[-\s]\d{4})?$"
        />
      </div>
      </form>
    </div>

  );
}