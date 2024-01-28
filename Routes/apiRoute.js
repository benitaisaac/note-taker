const router = require('express').Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const writeFile = require('fs/promises');

const dbData = require('../db/db.json');

router.get('/notes', (req, res) => {
    res.status(200).json(dbData); 
});

router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    console.log(title, text); 

    res.status(200).send('got it');

});

//     if(!title && !text){
//         res.status(400).json({ msg: 'missing data'});
//         return;
//     }

//     const newNote = {
//         id: uuidv4(),
//         title,
//         text
//     }
//     dbData.push(newNote);
//     try{
//        await writeFile('../db/db.json', JSON.stringify(dbData))
//     } catch(error) {
//         console.log(error);
//         res.status(500).json({msg: 'try again later'})
//     }
    
// });
//     if(!title && !text){
//         res.status(400).json({msg: missing data});
//         return; 
//     }
// );


module.exports = router;