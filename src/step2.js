import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <div >
      <h2>Pricing</h2>
      <p>New Price :</p>

      

        <div>
          <input
            className="NewPrice"
            id="NewPrice"
            name="NewPrice"
            type="text"
            placeholder="Enter New Price"
            value={props.np}
            onChange={props.handleChange}
          />
        </div>



        <div>
          <p>Current Price : </p>
          <select id="Price" defaultValue={props.p} onChange={props.handleDropdownChange} >
            <option value="High" >High</option>
            <option value="Medium">Medium</option>
            <option value="Low" >Low</option>
            <option value="Lowest">Lowest</option>
          </select>
        </div>

        <div>
          <p>Old Price : </p>
          <input
            className="OldPrice"
            id="OldPrice"
            name="OldPrice"
            type="text"
            placeholder="Enter Old Price"
            value={props.op}
            onChange={props.handleChange}
          />
        </div>

        <div>
          <p>Enter Comments : </p>
          <textarea id="Text" name="Text" value={props.text} onChange={props.handleChange} rows="4" cols="50" placeholder="Enter Comments Briefly">Product Overview</textarea>
        </div>
      
    </div>
  );
}