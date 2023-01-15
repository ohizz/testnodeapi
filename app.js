const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const routes = require('./routes/routes');
require('dotenv').config();
const URL = process.env.URL;
const port = process.env.PORT || 3000;

app.use('/api', routes);

mongoose.connect(URL);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})


app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})