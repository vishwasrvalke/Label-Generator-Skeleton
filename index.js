import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      ProductDetails:{ProductName:'',ITEMID : '',MFRNo:''} ,
      Pricing:{NewPrice: '',Price: '',OldPrice: ''},
      specs:{ColorFamily:'',Manufacturer:'',Type:''} , 
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { ProductDetails, username, specs } = this.state
    alert(`Your registration detail: \n 
           ProductDetails: ${{ProductDetails}} \n 
           Pricing: ${{Pricing}} \n
           specs: ${{specs}}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep > currentStep ? 5: currentStep + 1
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
  if(currentStep <5){
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
          password={this.state.password}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="ProductDetails">Product Name</label>
      <input
        className="form-control"
        id="ProductDetails"
        name="ProductDetails"
        type="text"
        placeholder="Enter Product Name"
        value={props.ProductName}
        onChange={props.handleChange}
        />
      <div>
      <label htmlFor="ProductDetails">ITEM ID</label>
      <input
        className="form-control"
        id="ProductDetails"
        name="ProductDetails"
        type="text"
        placeholder="Enter ITEM ID"
        value={props.ITEMID}
        onChange={props.handleChange}
        />
      </div>
      <div>
      <label htmlFor="ProductDetails">MFR No.</label>
      <input
        className="form-control"
        id="ProductDetails"
        name="ProductDetails"
        type="text"
        placeholder="Enter MFR No."
        value={props.MFRNo}
        onChange={props.handleChange}
        />
      </div>   
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="Pricing">New Price</label>
      <input
        className="form-control"
        id="Pricing"
        name="Pricing"
        type="text"
        placeholder="Enter NewPrice"
        value={props.NewPrice}
        onChange={props.handleChange}
        />
      <div>
      <label htmlFor="Pricing">Price</label>
      <input
        className="form-control"
        id="Pricing"
        name="Pricing"
        type="text"
        placeholder="Enter Price"
        value={props.Price}
        onChange={props.handleChange}
        />
      <div>
      <label htmlFor="Pricing">OldPrice</label>
      <input
        className="form-control"
        id="Pricing"
        name="Pricing"
        type="text"
        placeholder="Enter OldPrice"
        value={props.OldPrice}
        onChange={props.handleChange}
        />
      </div>
      <div>
    <textarea rows="4" cols="50">Product Overview</textarea>
    </div>
      </div>
    </div>
    
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(

    <div className="form-group">
      <label htmlFor="specs">ColorFamily</label>
      <input
        className="form-control"
        id="specs"
        name="specs"
        type="specs"
        placeholder="Enter ColorFamily"
        value={props.ColorFamily}
        onChange={props.handleChange}
        />
        <div>
        <label htmlFor="specs">Manufacturer</label>
      <input
        className="form-control"
        id="specs"
        name="specs"
        type="specs"
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
        type="specs"
        placeholder="Enter Type"
        value={props.Type}
        onChange={props.handleChange}
        /> 
        </div>         
    </div>

    
  );
}
render(<MasterForm />, document.getElementById('root'))
