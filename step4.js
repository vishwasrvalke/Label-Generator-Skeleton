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
      <label htmlFor="Name">Name</label>
      <form onSubmit={props.handleSubmit}>
      <input
        className="form-control"
        id="Name"
        name="Name"
        type="text"
        placeholder="Enter Name"
        value={props.name}
        onChange={props.handleChange}
      />
      <div>
        <label htmlFor="Address">Address</label>
        <input
          className="form-control"
          id="Address"
          name="Address"
          type="text"
          placeholder="Enter Address"
          value={props.address}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label htmlFor="Province">Province</label>
        <input
          className="form-control"
          id="Province"
          name="Province"
          type="text"
          placeholder="Enter Province"
          value={props.pro}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label htmlFor="ZipCode">ZipCode</label>
        <input
          className="form-control"
          id="ZipCode"
          name="ZipCode"
          type="numbers"
          placeholder="Enter ZipCode(numbers only)"
          value={props.zip}
          onChange={props.handleChange}
          inputMode="numeric"
          required pattern="^\d{5,6}(?:[-\s]\d{4})?$"
        />
      </div>
      </form>
    </div>

  );
}