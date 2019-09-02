import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="NewPrice">New Price</label>
      <form onSubmit={props.handleSubmit}>
      <input
        className="form-control"
        id="NewPrice"
        name="NewPrice"
        type="text"
        placeholder="Enter NewPrice"
        value={props.np}
        onChange={props.handleChange}
        />
      <div>
      <label htmlFor="Price">Price</label>
      <select id="Price" defaultValue={props.p}  onChange = {props.handleDropdownChange}  >
      <option value="high" onChange = {props.handleDropdownChange} >high</option>
      <option value="medium" onChange = {props.handleDropdownChange} >medium</option>
      <option value="low"  onChange = {props.handleDropdownChange} >low</option>
     <option value="lowest"  onChange = {props.handleDropdownChange} >lowest</option>
      </select>
      <div>
      <label htmlFor="OldPrice">OldPrice</label>
      <input
        className="form-control"
        id="OldPrice"
        name="OldPrice"
        type="text"
        placeholder="Enter OldPrice"
        value={props.op}
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