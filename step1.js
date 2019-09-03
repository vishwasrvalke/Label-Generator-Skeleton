import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div >
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="ProductName">Product Name</label>
      <input
        className="ProductName"
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
        className="ITEMID"
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
        className="MFRNo"
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
