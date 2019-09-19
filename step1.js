import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
export function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div >
      <h2>Product Details </h2>

      

        <div>
          <p>Product Name :</p>
          <input
            className="ProductName"
            id="ProductName"
            name="ProductName"
            type="text"
            placeholder="Enter Product Name"
            value={props.pn}
            onChange={props.handleChange}
          />
        </div>

        <div>
          <p>ITEM ID : </p>
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
          <p>MFR No. : </p>
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

      
    </div>
  );
}
