const express = require('express');
// const path = require('path');
const mainRouter = require('./Routes/mainRoute');

//import custom middleware
const logger = require('./Middleware/logger');


const app = express(); 
const port = process.env.PORT || 3003; 

//Middleware
app.use(logger);
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use('/', mainRouter);

app.listen(port, (req, res) => {
    console.log(`your app is running on ${port}`)
}
);

