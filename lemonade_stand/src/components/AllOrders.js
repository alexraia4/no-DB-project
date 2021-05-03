import React, { Component } from 'react';
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
            <div>

            </div>
        );
    }

}

