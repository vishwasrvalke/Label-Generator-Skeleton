import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Step1}from'./step1.js';
import{Step2}from'./step2.js';
import{Step3}from './step3.js';
import{Step4}from './step4.js';
import{Step5}from './step5.js';
export function Step6(props) {
  if (props.currentStep !== 6) {
    return null
  } 
  return(
    <div className="form-group">
     <p>Details</p>
     <p>From: {props.fromAdd}</p>
     
     <p>To: {props.toAdd}</p>

     <p>Product Detail</p>
     <table>
  <tr>
    <th>Category</th>
    <th>Product Details</th>
    <th>Pricing</th> 
    <th>specs</th>
  </tr>
  <tr>
    <td>{props.Prodname}</td>
    <td>{props.itemid}</td>
    <td>{props.mfrno}</td>
  </tr>
  
</table>

     
    </div>
  )
}
