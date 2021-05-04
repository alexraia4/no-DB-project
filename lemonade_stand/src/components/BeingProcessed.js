import React, { Component } from 'react';
import axios from 'axios';


export default class BeingPro extends Component {

    constructor() {
        super();
        this.state = {
            orders: []
        }

        this.changeToReady = this.changeToReady.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:4003/api/orders").then(res => this.setState({orders: res.data.filter(element => element.status === "Being Processed")})).catch(err => console.log(err));
    }

    render() {
        return (
            <div className = "beingProcessed">
                <h1>Orders Being Processed:</h1>
                {this.state.orders.map(order => <p key = {order.id} onClick = {e => this.changeToReady(order.id)}>- {order.name}</p>)}
            </div>
        );
    }


    changeToReady(id) {
        axios.put(`http://localhost:4003/api/orders/readyForPickup/${id}`).then(console.log("status changed")).catch(err => console.log(err));
    }

}