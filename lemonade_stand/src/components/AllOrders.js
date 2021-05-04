import React, { Component } from 'react';
import AllOrdersCard from './AllOrderCard.js'
import axios from 'axios';


export default class AllOrders extends Component {

    constructor() {
        super();
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:4003/api/orders").then(res => this.setState({orders: res.data})).catch(err => console.log(err));
    }

    render() {
        
        return (
            this.state.orders.map(order => <AllOrdersCard key={order.id} id={order.id} name={order.name} ccc={order.ccc} orderZ={order.orderZ} amount={order.amount} date={order.date} time={order.time} status={order.status} setDisplay={this.props.setDisplay}/>)
        );
    }

}

