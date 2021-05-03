import React, { Component } from 'react';
import axios from 'axios';


export default class NewOrder extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            ccc: "",
            order: "",
            amount: 0.00
        }

        this.createOrder = this.createOrder.bind(this);
    }


    createOrder() {

            let newOrder = {
                name: this.state.name,
                ccc: this.state.ccc,
                orderZ: this.state.order,
                amount: this.state.amount
            }

            

            axios.post('/api/orders', newOrder).then(res => console.log(res.data));
    }


    render() {



        return (
            <div className = "newOrder">
                <p>Name:</p>
                <input type="text" onChange={ ( e ) => this.setState({ name: e.target.value }) }/>
                <br/>
                <p>Payment Type:</p>
                <input type="text" onChange={ ( e ) => this.setState({ ccc: e.target.value }) }/>
                <br />
                <p>Order:</p>
                <input type="text" onChange={ ( e ) => this.setState({ order: e.target.value }) }/>
                <br/>
                <p>Amount:</p>
                <input type="text" onChange={ ( e ) => this.setState({ amount: e.target.value }) }/>
                <br/>
                <button onClick = {this.createOrder}>Submit</button>
            </div>
        )
    }
}