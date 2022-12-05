const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// database
const db = require('./config/mongooseConnection');
// all routes
const routes = require('./routes/products');




// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// base route
app.use('/api', routes);

// listenning on port
app.listen(3000, () => {
    console.log(`Server Started at 3000`)
})