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
      <label htmlFor="ProductDetails">Product Name</label>
      <input
        className="form-control"
        id="ProductDetails"
        name="ProductDetails"
        type="text"
        placeholder="Enter Product Name"
        value={props.pn}
        onChange={props.handleChange}
        />
      <div>
      <label htmlFor="ProductDetails">ITEM ID</label>
      <input
        className="form-control"
        id="ProductDetails"
        name="ProductDetails"
        type="text"
        placeholder="Enter ITEM ID"
        value={props.ITEMID}
        onChange={props.handleChange}
        />
      </div>
      <div>
      <label htmlFor="ProductDetails">MFR No.</label>
      <input
        className="form-control"
        id="ProductDetails"
        name="ProductDetails"
        type="text"
        placeholder="Enter MFR No."
        value={props.MFRNo}
        onChange={props.handleChange}
        />
      </div> 
      </form>  
    </div>
  );
}
