const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const dotenv = require('dotenv');
const config = require('./config');
var bodyParser = require('body-parser');
var multer = require('multer');

dotenv.config();

const port = config.port() || 3000;

const app = express();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/', (req, res) => {
    console.log('req.body:', req.body)
    const textReceived = req.body.Body;

    const twiml = new MessagingResponse();

    twiml.message(`I can see you said  "${textReceived}" but do not have a programmed response for that.`);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});