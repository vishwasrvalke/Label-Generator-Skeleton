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
        value={props.c[0]}
        onChange={props.handleChange}
        />
        Blue
        <input
        className="form-control"
        id="ColorFamily"
        name="ColorFamily"
        type="radio"
        value={props.c[1]}
        onChange={props.handleChange}
        />
        Green
        <input
        className="form-control"
        id="ColorFamily"
        name="ColorFamily"
        type="radio"
        value={props.c[2]}
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
        <label htmlFor="Type">Type </label>
        
        {props.t[0]}
      <input
        className="form-control"
        id="Type"
        name="Type"
        type="checkbox"
        value={props.t[0]}
        onChange={props.handleChange}
        /> 

        {props.t[1]}
      <input
        className="form-control"
        id="Type"
        name="Type"
        type="checkbox"
        value={props.t[1]}
        onChange={props.handleChange}
        /> 

        {props.t[2]}
      <input
        className="form-control"
        id="Type"
        name="Type"
        type="checkbox"
        value={props.t[2]}
        onChange={props.handleChange}
        /> 

      {props.t[3]}
      <input
        className="form-control"
        id="Type"
        name="Type"
        type="checkbox"
        value={props.t[3]}
        onChange={props.handleChange}
        /> 

        </div> 
        </form>        
    </div>

    
  );
}