import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Step1}from'./step1.js';
import{Step2}from'./step2.js';
import{Step3}from './step3.js';
import{Step4}from './step4.js';
import{Step5}from './step5.js';
export function Step6(props) {
  if (props.currentStep !== 6){
    return null
  } 
  return(
  
<div >
     <h2>Summary </h2>
     <h3>From: {props.address} </h3>
     
     <h3>To: {props.toAddress}</h3>

     <h2>Product Details</h2>
  
<div>   
 <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>ITEM ID</th>
        <th>MFR No.</th>
      </tr>
    </thead>
    <tbody>
      <tr> 
        <td>{props.pn}</td>
        <td>{props.pid}</td>
        <td>{props.mfr}</td>
      </tr>
    </tbody>
  </table>
  <h2>Pricing</h2>
  <table >
    <thead>
      <tr>
        <th>New Price</th>
        <th>Price</th>
        <th>Old Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.np}</td>
        <td>{props.p}</td>
        <td>{props.op}</td> 
      </tr>
    </tbody>
  </table>
  <h2>Specifications</h2>
  <table >
    <thead>
      <tr>
        <th>Color Family</th>
        <th>Manufacturer</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>{props.c}</td>
      <td>{props.m}</td>
      <td>{props.t}</td>  
      </tr>
    </tbody>
  </table>
</div>

<div>
<h2>Comments: </h2>
<p>{props.text}</p>
</div>

</div>
  )
}
