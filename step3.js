import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(

    <div className="form-group">
      <label htmlFor="specs">ColorFamily</label>
      <form onSubmit={props.handleSubmit}>
      Red
      <input
        className="form-control"
        id="ColorFamily"
        name="ColorFamily"
        type="radio"
        value="Red"
        onChange={props.handleChange}
        />
        Blue
        <input
        className="form-control"
        id="ColorFamily"
        name="ColorFamily"
        type="radio"
        value="Blue"
        onChange={props.handleChange}
        />
        Green
        <input
        className="form-control"
        id="ColorFamily"
        name="ColorFamily"
        type="radio"
        value="Green"
        onChange={props.handleChange}
        />
        <div>
        <label htmlFor="Manufacturer">Manufacturer</label>
      <input
        className="form-control"
        id="Manufacturer"
        name="Manufacturer"
        type="text"
        placeholder="Enter Manufacturer"
        value={props.m}
        onChange={props.handleChange}
        /> 
        </div>
        <div>
        <label htmlFor="Type">Type</label>
        
      1
      <input
        className="form-control"
        id="Type"
        name="Type"
        type="checkbox"
        value="1"
        onChange={props.handleChange}
        /> 

      2
      <input
        className="form-control"
        id="Type"
        name="Type"
        type="checkbox"
        value="2"
        onChange={props.handleChange}
        /> 

      3
      <input
        className="form-control"
        id="Type"
        name="Type"
        type="checkbox"
        value="3"
        onChange={props.handleChange}
        /> 

      4
      <input
        className="form-control"
        id="Type"
        name="Type"
        type="checkbox"
        value="4"
        onChange={props.handleChange}
        /> 

        </div> 
        </form>        
    </div>

    
  );
}