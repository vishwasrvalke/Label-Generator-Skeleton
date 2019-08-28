import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="ProductName">Product Name</label>
      <input
        className="form-control"
        id="ProductName"
        name="ProductName"
        type="text"
        placeholder="Enter Product Name"
        value={props.pn}
        onChange={props.handleChange}
        />
      <div>
      <label htmlFor="ITEMID">ITEM ID</label>
      <input
        className="form-control"
        id="ITEMID"
        name="ITEMID"
        type="text"
        placeholder="Enter ITEM ID"
        value={props.pid}
        onChange={props.handleChange}
        />
      </div>
      <div>
      <label htmlFor="MFRNo">MFR No.</label>
      <input
        className="form-control"
        id="MFRNo"
        name="MFRNo"
        type="text"
        placeholder="Enter MFR No."
        value={props.mfr}
        onChange={props.handleChange}
        />
      </div> 
      </form>  
    </div>
  );
}
