import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(

    <div >
      <label htmlFor="specs">ColorFamily</label>
      <form onSubmit={props.handleSubmit}>
      Red
      <input
        className="ColorFamily"
        id="ColorFamily"
        name="ColorFamily"
        type="radio"
        value="Red"
        onChange={props.handleChange}
        />
        Blue
        <input
        className="ColorFamily"
        id="ColorFamily"
        name="ColorFamily"
        type="radio"
        value="Blue"
        onChange={props.handleChange}
        />
        Green
        <input
        className="ColorFamily"
        id="ColorFamily"
        name="ColorFamily"
        type="radio"
        value="Green"
        onChange={props.handleChange}
        />
        <div>
        <label htmlFor="Manufacturer">Manufacturer</label>
      <input
        className="Manufacturer"
        id="Manufacturer"
        name="Manufacturer"
        type="text"
        placeholder="Enter Manufacturer"
        value={props.m}
        onChange={props.handleChange}
        /> 
        </div>
        <div>
        <p>Type</p>
        
      1
      <input
        className="Type"
        id="Type"
        name="Type"
        type="checkbox"
        value="1"
        onChange={props.handleChange}
        /> 

      2
      <input
        className="Type"
        id="Type"
        name="Type"
        type="checkbox"
        value="2"
        onChange={props.handleChange}
        /> 

      3
      <input
        className="Type"
        id="Type"
        name="Type"
        type="checkbox"
        value="3"
        onChange={props.handleChange}
        /> 

      4
      <input
        className="Type"
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