import './reset.css';
import './App.css';
import Header from './components/Header.js';
import NewOrder from './components/NewOrder.js';
import AllOrders from './components/AllOrders.js';
import Received from './components/Received.js';
import BeingProcessed from './components/BeingProcessed.js';
import ReadyForPickup from './components/ReadyForPickup.js';
import Footer from './components/Footer.js';
import { Component } from 'react';

  


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      display: "home"
    }
    this.setDisplay = this.setDisplay.bind(this);
  }


  setDisplay(value) {
    this.setState({display: value});
  }


  render() {
    if (this.state.display === "home") {
      return (
        <div className = "wholePage">
          <Header /> 
          <div className = "mainButtons">
            <button onClick={e => this.setDisplay("add")}>Create New Order</button>
            <button onClick={e => this.setDisplay("all")}>See All Past Orders</button>
          </div>
          <div className = "RBRSection">
            <Received />
            <BeingProcessed />
            <ReadyForPickup />
          </div> 
          <Footer />    
        </div>
      );
    }

    if(this.state.display === "add") {
      return (
        <div className = "wholePage">
          <Header />  
          <NewOrder setDisplay = {this.state.setDisplay}/>
          <button onClick={e => this.setDisplay("home")}>Back</button>
          <Footer />    
        </div>
      );
    }

    if(this.state.display === "all") {
      return (
        <div className = "wholePage">
          <Header />  
          <AllOrders />
          <button onClick={e => this.setDisplay("home")}>Back</button>
          <Footer />    
        </div>
      );
    }

    if(this.state.display === "edit") {
      return (
        <div className = "wholePage">
          <Header />  
          <Footer />    
        </div>
      );
    }
  }





  






}