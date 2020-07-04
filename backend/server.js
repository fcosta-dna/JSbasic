const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const app = express();

app.use(express.json());
app.use(cors());

//conect db
mongoose.connect('mongodb://localhost:27017/nodeapi'); 

//attaching the model of DB
requireDir('./src/Models');

//attaching the Routes
app.use('/api', require('./src/routes'));

//listening the conection
app.listen(3001, () => console.log('listening...'));