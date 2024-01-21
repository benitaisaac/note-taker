const express = require('express');

const app = express(); 
const port = process.env.PORT || 3003; 

app.listen(port, (req, res) => {
    console.log(`your app is running on ${port}`)
}
)