import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Step1 } from './step1.js';
import { Step2 } from './step2.js';
import { Step3 } from './step3.js';
import { Step4 } from './step4.js';
import { Step5 } from './step5.js';
import { Step6 } from './step6.js';

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,

      
  
        ProductName: '',
        ITEMID: '',
        MFRNo: '',
      

      
      
        NewPrice: ''
       , Price:""
        , OldPrice: ''
        , Text:'',

      

      
      
        ColorFamily:'',
        Manufacturer: '',
        Type:'',
      

      
      
        Name: '',
        Address: '',
        Province: '',
        ZipCode: '',
      

      
        toName: '',
        toAddr: '',
        toProvince: '',
        toZipCode: '',
      
    }
     
     this.handleChange = this.handleChange.bind(this);
     this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  
  handleDropdownChange(e) {
    this.setState({Price : e.target.value });
  }

  



  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = 
    this.setState({
      currentStep: currentStep +1
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = 
    this.setState({
      currentStep: currentStep - 1
    })
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          
          type="button" onClick={this._prev}>
          Previous
      </button>
      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 6) {
      return (
        <button
          
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
        <h2>Step {this.state.currentStep} </h2>

        <form >

          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            pn={this.state.ProductName}
            pid = {this.state.ITEMID}
            mfr = {this.state.MFRNo}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            np={this.state.NewPrice}
            p={this.state.Price}
            op={this.state.OldPrice}
            text={this.state.Text}
            handleDropdownChange = {this.handleDropdownChange}
            
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            c={this.state.ColorFamily}
            m= {this.state.Manufacturer}
            t={this.state.Type}
          />
          <Step4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            name={this.state.Name}
            address={this.state.Address}
            pro = {this.state.Province}
            zip = {this.state.ZipCode}
          />
          <Step5
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            toAddress={this.state.toAddr}
            toname={this.state.toName}
            topro={this.state.toProvince}
            tozip={this.state.toZipCode}
          />
          <Step6
            currentStep={this.state.currentStep}
            pn={this.state.ProductName}
            pid = {this.state.ITEMID}
            mfr = {this.state.MFRNo}
            address={this.state.Address}
            toAddress={this.state.toAddr}
            np={this.state.NewPrice}
            p={this.state.Price}
            op={this.state.OldPrice}
            c={this.state.ColorFamily}
            m= {this.state.Manufacturer}
            t={this.state.Type}
            text ={this.state.Text}
            handleChange={this.handleChange}

          />
          {this.previousButton()}
          {this.nextButton()}


        </form>
      </React.Fragment>
    );
  }
}

render(<MasterForm />, document.getElementById('root'))
