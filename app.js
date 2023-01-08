const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const routes = require('./routes/routes');
require('dotenv').config();
const URL = process.env.URL;

app.use(express.json());
app.use('/api', routes);

mongoose.connect(URL);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})