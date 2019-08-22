import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Step1}from'./step1.js';
import{Step2}from'./step2.js';
import{Step3}from './step3.js';
import{Step4}from './step4.js';
import{Step5}from './step5.js';
import{Step6}from './step6.js';



class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      ProductDetails:{ProductName:'',ITEMID : '',MFRNo:''} ,
      Pricing:{NewPrice: '',Price: '',OldPrice: ''},
      specs:{ColorFamily:'',Manufacturer:'',Type:''} ,
      fromAddress:{Name:'',Address:'',Province:'',ZipCode:''},
      toAddress:{toName:'',toAddr:'',toProvince:'',toZipCode:''},
    }
  }
  

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
   handleSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      ProductDetails: [...this.state.ProductDetails],
      Pricing: [...this.state.Pricing],
      specs: [...this.state.specs],
      fromAddress:[...this.state.fromAddress],
      toAddress:[...this.state.toAddress]

    });

    this.setState({
      items,
      ProductDetails: '',
      Pricing: '',
      specs:'',
      fromAddress:'',
      toAddress:''
    });
  };

    
  
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep > currentStep ? 6: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <6){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    return (
      <React.Fragment>
      <h1>Label Generator</h1>
      <p>Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>
  
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.ProductDetails}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          Pricing={this.state.Pricing}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          specs={this.state.specs}
        />
        <Step4
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          fromAddress={this.state.fromAddress}
        />
        <Step5
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          toAddress={this.state.toAddress}
        />
        <Step6
        currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          fromAdd={this.state.fromAddress}
          toAdd={this.state.toAddress}
          Prodname={this.state.ProductName}
          itemid={this.state.ITEMID}
          mfrno={this.state.MFRNo}
          handleSubmit={this.handleSubmit}
        />
        
        
        
        {this.previousButton()}
        {this.nextButton()}
        

      </form>
      </React.Fragment>
    );
  }
}

render(<MasterForm />, document.getElementById('root'))
