import React, { Component } from 'react';
import axios from 'axios';


export default class Received extends Component {

    constructor() {
        super();
        this.state = {
            orders: []
        }

        this.changeToComplete = this.changeToComplete.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:4003/api/orders").then(res => this.setState({orders: res.data.filter(element => element.status === "Ready For Pickup")})).catch(err => console.log(err));
    }

    render() {
        return (
            <div className = "readyForPickup">
                <h1>Orders Ready For Pickup:</h1>
                {this.state.orders.map(order => <p key = {order.id} onClick = {e => this.changeToComplete(order.id)}>- {order.name}</p>)}
            </div>
        );
    }


    changeToComplete(id) {
        axios.put(`http://localhost:4003/api/orders/complete/${id}`).then(console.log("status changed")).catch(err => console.log(err));
    }

}