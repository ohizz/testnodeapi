const express = require('express');
const mongoose = require('mongoose');
const Model = require('./models/models');
mongoose.set('strictQuery', false);
const routes = require('./routes/routes');
const path = require('path');
require('dotenv').config({ path: './.env'});
const URL = process.env.URL;
const port = process.env.PORT || 3000;

mongoose.connect(URL);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes)


app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})