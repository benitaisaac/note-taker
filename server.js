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
app.use('/', mainRouter);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'))
// });

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/notes.html'))
// });

// app.post('/api/notes', (req, res) => {
    
// })


app.listen(port, (req, res) => {
    console.log(`your app is running on ${port}`)
}
);

