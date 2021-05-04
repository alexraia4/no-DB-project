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
        axios.delete(`http://localhost:4003/api/orders/${id}`).then(this.props.setDisplay("home")).catch(err => console.log(err));
        
    }

    render() {
        return (
            <div className="orderCard">
                <div className="orderCardWords">
                    <p>ID: {this.props.id}</p>
                    <p>Name: {this.props.name}</p>
                    <p>Payment Method: {this.props.ccc}</p>
                    <p>Order: {this.props.orderZ}</p>
                    <p>Amount: ${this.props.amount}</p>
                    <p>Date: {this.props.date}</p>
                    <p>Time: {this.props.time}</p>
                    <p>Status: {this.props.status}</p>
                </div>
                <div className="orderCardButtons">
                    <button className="submitButton">EDIT</button>
                    <button className="deleteButton" onClick={e => this.deleteCard(this.props.id)}>DELETE</button>
                </div>
                
            </div>
        );
    }

}

