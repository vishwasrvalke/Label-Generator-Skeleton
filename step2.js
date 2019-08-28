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
      <select id="Price" onChange = {props.handleChange} value = {...props.p}>
      <option value={props.p[0]} >{props.p[0]}</option>
      <option value={props.p[1]} >{props.p[1]}</option>
      <option value={props.p[2]} >{props.p[2]}</option>
     <option value={props.p[3]} >{props.p[3]}</option>
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