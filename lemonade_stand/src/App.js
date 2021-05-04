import './reset.css';
import './App.css';

import axios from 'axios';
import Header from './components/Header.js';
import NewOrder from './components/NewOrder.js';
import AllOrders from './components/AllOrders.js';
//import Received from './components/Received.js';
//import BeingProcessed from './components/BeingProcessed.js';
//import ReadyForPickup from './components/ReadyForPickup.js';
import Footer from './components/Footer.js';
import { Component } from 'react';

  


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      display: "home",
      orders: [],
      receivedOrders: [],
      beingProcessedOrders: [],
      readyForPickupOrders: [],
    }
    this.setDisplay = this.setDisplay.bind(this);
    this.changeToBeingProcessed = this.changeToBeingProcessed.bind(this);
    this.changeToReady = this.changeToReady.bind(this);
    this.changeToComplete = this.changeToComplete.bind(this);

  }


  setDisplay(value) {
    this.setState({display: value});
    axios.get("http://localhost:4003/api/orders").then(res => this.setState({
      orders:               res.data,
      receivedOrders:       res.data.filter(element => element.status === "Received"),
      beingProcessedOrders: res.data.filter(element => element.status === "Being Processed"),
      readyForPickupOrders: res.data.filter(element => element.status === "Ready For Pickup")
    })).catch(err => console.log(err));
    
  }

  changeToBeingProcessed(id) {
    axios.put(`http://localhost:4003/api/orders/beingProcessed/${id}`).then(res => this.setState({
      orders:               res.data,
      receivedOrders:       res.data.filter(element => element.status === "Received"),
      beingProcessedOrders: res.data.filter(element => element.status === "Being Processed"),
      readyForPickupOrders: res.data.filter(element => element.status === "Ready For Pickup")
    })).catch(err => console.log(err));
  }

  changeToReady(id) {
    axios.put(`http://localhost:4003/api/orders/readyForPickup/${id}`).then(res => this.setState({
      orders:               res.data,
      receivedOrders:       res.data.filter(element => element.status === "Received"),
      beingProcessedOrders: res.data.filter(element => element.status === "Being Processed"),
      readyForPickupOrders: res.data.filter(element => element.status === "Ready For Pickup")
    })).catch(err => console.log(err));
  }

  changeToComplete(id) {
    axios.put(`http://localhost:4003/api/orders/complete/${id}`).then(res => this.setState({
      orders:               res.data,
      receivedOrders:       res.data.filter(element => element.status === "Received"),
      beingProcessedOrders: res.data.filter(element => element.status === "Being Processed"),
      readyForPickupOrders: res.data.filter(element => element.status === "Ready For Pickup")
    })).catch(err => console.log(err));
  }

  componentDidMount() {
    axios.get("http://localhost:4003/api/orders").then(res => this.setState({
      orders:               res.data,
      receivedOrders:       res.data.filter(element => element.status === "Received"),
      beingProcessedOrders: res.data.filter(element => element.status === "Being Processed"),
      readyForPickupOrders: res.data.filter(element => element.status === "Ready For Pickup")
    })).catch(err => console.log(err));
  }


  render() {
    if (this.state.display === "home") {
      return (
        <div className = "wholePage">
          <Header /> 
          <div className = "mainButtons">
            <button className="addButton" onClick={e => this.setDisplay("add")}>Create New Order</button>
            <button className="allButton" onClick={e => this.setDisplay("all")}>See All Past Orders</button>
          </div>
          <div className = "RBRSection">
            <div className = "received">
              <h1>Received Orders:</h1>
              {this.state.receivedOrders.map(order => <p key = {order.id} onClick = {e => this.changeToBeingProcessed(order.id)}>- {order.name}</p>)}
            </div>
            <div className = "beingProcessed">
              <h1>Orders Being Processed:</h1>
              {this.state.beingProcessedOrders.map(order => <p key = {order.id} onClick = {e => this.changeToReady(order.id)}>- {order.name}</p>)}
            </div>
            <div className = "readyForPickup">
              <h1>Orders Ready For Pickup:</h1>
              {this.state.readyForPickupOrders.map(order => <p key = {order.id} onClick = {e => this.changeToComplete(order.id)}>- {order.name}</p>)}
            </div>
          </div> 
          <Footer />    
        </div>
      );
    }

    if(this.state.display === "add") {
      return (
        <div className = "wholePage">
          <Header />  
          <NewOrder setDisplay = {this.setDisplay}/>
          <button className="backButton" onClick={e => this.setDisplay("home")}>Back</button>
          <Footer />    
        </div>
      );
    }

    if(this.state.display === "all") {
      return (
        <div className = "wholePage">
          <Header />  
          <AllOrders setDisplay = {this.setDisplay}/>
          <button className="backButton" onClick={e => this.setDisplay("home")}>Back</button>
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