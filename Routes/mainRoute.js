const router = require('express').Router();
const notesRoute = require('./notesRoute');
const path = require('path'); 

//send to notesRoute
router.use('/notes', notesRoute); 

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;
