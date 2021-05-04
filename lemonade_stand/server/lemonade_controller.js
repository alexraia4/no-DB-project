const e = require("express");


let idCounter = 1;
class Order {
    constructor(name, ccc, orderZ, amount) {
        this.id = idCounter;
        this.name = name;
        this.ccc = ccc;
        this.orderZ = orderZ;
        this.amount = amount;

        let dateZ = new Date();
        
        this.date = dateZ.toDateString();
        this.time = dateZ.toTimeString();
        this.status = "Received";

        idCounter++;
    }
}


orders = [
    new Order("Alex",           "cash",   "small lemonade",  1.37),
    new Order("Herbert",        "card",   "large lemonade",  3.42),
    new Order("Lord Voldemort", "crypto", "medium lemonade", 2.15),
    new Order("Smervert",       "cash",   "small lemonade",  1.37)
]

module.exports = {
    getOrders: (req, res) => {
        res.status(200).send(orders);
    },

    addOrder: (req, res) => {
        const {name, ccc, orderZ, amount} = req.body;
        const newOrder = new Order(name, ccc, orderZ, amount);
        orders.push(newOrder);
        res.status(200).send(orders);
    },

    deleteOrder: (req, res) => {
        const {id} = req.params;
        orders = orders.filter(element => element.id !== +id)
        res.status(200).send(orders);
    },

    editOrder: (req, res) => {
        const {id} = req.params;
        const idZ = req.body.id;
        const {name, ccc, orderZ, amount, date, time, status} = req.body;
        const newOrder = new Order(name, ccc, orderZ, amount);
        newOrder.id = idZ;
        newOrder.date = date;
        newOrder.time = time;
        newOrder.status = status;

        
        orders.forEach((element, index) => {
            if (element.id === +id) {
                orders.splice(index, 1, newOrder);
            }
        });        
        res.status(200).send(orders);

    },

    received: (req, res) => {
        const {id} = req.params;
        orders.forEach(element => {
            if (element.id === +id) {
                element.status = "Received"
            }
        });
        res.status(200).send(orders);
    },

    beingProcessed: (req, res) => {
        const {id} = req.params;
        orders.forEach(element => {
            if (element.id === +id) {
                element.status = "Being Processed"
            }
        });
        res.status(200).send(orders);
    },

    readyForPickup: (req, res) => {
        const {id} = req.params;
        orders.forEach(element => {
            if (element.id === +id) {
                element.status = "Ready For Pickup"
            }
        });
        res.status(200).send(orders);
    },

    complete: (req, res) => {
        const {id} = req.params;
        orders.forEach(element => {
            if (element.id === +id) {
                element.status = "Complete"
            }
        });
        res.status(200).send(orders);
    }
}