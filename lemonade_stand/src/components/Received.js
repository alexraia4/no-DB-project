import React, { Component } from 'react';
import axios from 'axios';


export default class Received extends Component {

    constructor() {
        super();
        this.state = {
            orders: []
        }

        this.changeToBeingProcessed = this.changeToBeingProcessed.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:4003/api/orders").then(res => this.setState({orders: res.data.filter(element => element.status === "Received")})).catch(err => console.log(err));
    }

    render() {
        return (
            <div className = "received">
                <h1>Received Orders:</h1>
                {this.state.orders.map(order => <p key = {order.id} onClick = {e => this.changeToBeingProcessed(order.id)}>- {order.name}</p>)}
            </div>
        );
    }


    changeToBeingProcessed(id) {
        axios.put(`http://localhost:4003/api/orders/beingProcessed/${id}`).then(console.log(this.state.orders)).catch(err => console.log(err));
    }

}