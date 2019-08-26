import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="Pricing">New Price</label>
      <form onSubmit={props.handleSubmit}>
      <input
        className="form-control"
        id="Pricing"
        name="Pricing"
        type="text"
        placeholder="Enter NewPrice"
        value={props.NewPrice}
        onChange={props.handleChange}
        />
      <div>
      <label htmlFor="Pricing">Price</label>
      <select name="Pricing">
      <option value={props.High} onChange={props.handleChange} >High</option>
      <option value={props.Average}  onChange={props.handleChange}>Average</option>
      <option value={props.Low}  onChange={props.handleChange}>Low</option>
     <option value={props.Lowest}  onChange={props.handleChange}>Lowest</option>
      </select>
      <div>
      <label htmlFor="Pricing">OldPrice</label>
      <input
        className="form-control"
        id="Pricing"
        name="Pricing"
        type="text"
        placeholder="Enter OldPrice"
        value={props.OldPrice}
        onChange={props.handleChange}
        />
      </div>
      <div>
    <textarea rows="4" cols="50">Product Overview</textarea>
    </div>
      </div>
      </form>
    </div> 
  );
}