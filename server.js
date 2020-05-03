const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const dotenv = require('dotenv');
const config = require('./config');

dotenv.config();

const port = config.port() || 3000;

const app = express();

app.post('/', (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message('The Robots are coming! Head for the hills!');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});