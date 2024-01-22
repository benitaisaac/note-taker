const { v4: uuidv4 } = require('uuid');
const express = require('express');

const app = express();
app.use(express.json());


const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('/helpers/fsUtils');
const fs = require('fs');

app.post('/submit', (req, res) => {
    // Retrieve form data from request body
    const formData = req.body;
  
    // Read existing JSON file
    fs.readFile('/db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading JSON file');
      }
  
      // Parse existing JSON data into a JavaScript object
      const existingData = JSON.parse(data);
  
      // Merge form data with existing data
      const mergedData = { ...existingData, ...formData };
  
      // Convert merged data back to JSON string
      const updatedData = JSON.stringify(mergedData);
  
      // Write updated JSON to the file
      fs.writeFile('/db/db.json', updatedData, 'utf8', (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error writing JSON file');
        }
  
        return res.status(200).send('Form data added to JSON file');
      });
    });
  });


// notes.get('/', (req, res) => {
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
//   });

// notes.post('/', (req, res) => {
//   console.log(req.body);

//   const { title, text } = req.body;

//   if (req.body) {
//     const newNote = {
//       title,
//       text,
//       note_id: uuidv4(),
//     };

//     readAndAppend(newNote, './db/db.json');
//     res.json(`Note added successfully`);
//   } else {
//     res.error('Error in adding note');
//   }
// });

module.exports = notes;