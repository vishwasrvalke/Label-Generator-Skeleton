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
        id="specs"
        name="specs"
        type="radio"
        value={props.Red}
        onChange={props.handleChange}
        />
        Blue
        <input
        className="form-control"
        id="specs"
        name="specs"
        type="radio"
        value={props.Blue}
        onChange={props.handleChange}
        />
        Green
        <input
        className="form-control"
        id="specs"
        name="specs"
        type="radio"
        value={props.Green}
        onChange={props.handleChange}
        />
        <div>
        <label htmlFor="specs">Manufacturer</label>
      <input
        className="form-control"
        id="specs"
        name="specs"
        type="text"
        placeholder="Enter Manufacturer"
        value={props.Manufacturer}
        onChange={props.handleChange}
        /> 
        </div>
        <div>
        <label htmlFor="specs">Type</label>
      <input
        className="form-control"
        id="specs"
        name="specs"
        type="text"
        placeholder="Enter Type"
        value={props.Type}
        onChange={props.handleChange}
        /> 
        </div> 
        </form>        
    </div>

    
  );
}