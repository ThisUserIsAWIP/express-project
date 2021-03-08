const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({extended: false}));

let todoPath = path.join(__dirname, "../todo.json");

app.post('/todo-list', (req, res) => {
   let todo = {
       
   }

fs.writeFile(todoPath, json.stringify(req, null, 2), (err) => {
    if (err) console.log(`Something happened writing file: ${err}`);

    console.log('Woohoo!');
});
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(4000);

