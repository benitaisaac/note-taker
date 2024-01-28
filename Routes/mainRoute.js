const router = require('express').Router();
const notesRoute = require('./notesRoute');
const apiRoute = require('./apiRoute');
const path = require('path'); 


//send to notesRoute
router.use('/notes', notesRoute); 
router.use('/api', apiRoute);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;
