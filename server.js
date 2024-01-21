const express = require('express');
const path = require('path');

const app = express(); 
const port = process.env.PORT || 3003; 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});


app.listen(port, (req, res) => {
    console.log(`your app is running on ${port}`)
}
);

