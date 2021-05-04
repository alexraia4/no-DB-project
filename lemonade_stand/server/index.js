const express = require('express');
const lc = require("./lemonade_controller");
const cors = require('cors');

const app = express();
const PORT = 4003;

app.use(express.json());
app.use(cors());




app.get('/api/orders', lc.getOrders);
app.post('/api/orders', lc.addOrder);
app.delete('/api/orders/:id', lc.deleteOrder);
app.put('/api/orders/:id', lc.editOrder);

app.put('/api/orders/received/:id', lc.received);
app.put('/api/orders/beingProcessed/:id', lc.beingProcessed);
app.put('/api/orders/readyForPickup/:id', lc.readyForPickup);
app.put('/api/orders/complete/:id', lc.complete);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

