const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("hello, you are on the correct webpage"); 
});


module.exports = router;