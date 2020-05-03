const express = require('express');
const dotenv = require('dotenv');
const config = require('./config');

dotenv.config();

const port = config.port() || 3000;

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});