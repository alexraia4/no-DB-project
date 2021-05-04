import React, { Component } from 'react';
import axios from 'axios';

export default class AllOrdersCard extends Component {

    constructor() {
        super();
        this.state = {

        }
        this.deleteCard = this.deleteCard.bind(this);
    }


    deleteCard(id) {
        axios.delete(`http://localhost:4003/api/orders/${id}`).then(console.log("Order Deleted")).catch(err => console.log(err));
    }

    render() {
        return (
            <div className>
                <p>ID: {this.props.id}</p>
                <p>Name: {this.props.name}</p>
                <p>Payment Method: {this.props.ccc}</p>
                <p>Order: {this.props.orderZ}</p>
                <p>Amount: ${this.props.amount}</p>
                <p>Date: {this.props.date}</p>
                <p>Time: {this.props.time}</p>
                <p>Status: {this.props.status}</p>
                <div className="EDbuttons">
                    <button>EDIT</button>
                    <button onClick={e => this.deleteCard(this.props.id)}>DELETE</button>
                </div>
                
            </div>
        );
    }

}

