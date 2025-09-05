require('dotenv').config();
const db = require('./config/db.js');
const express = require('express');

const app = express();
const PORT = process.env.PORT
//app.use(express.json());

app.listen(PORT, () => {
    console.log('Servidor OK.');
});