// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

const dotenv = require('dotenv');
const config = require('./config');

dotenv.config();

// const { myphone, twilio: { accountSid, authToken, sandboxFrom } } = config

const client = require('twilio')(config.twilio.accountSid(), config.twilio.authToken());

client.messages
    .create({
        from: config.twilio.sandboxFrom(),
        body: 'Hello there!',
        to: config.myPhone()
    })
    .then(message => console.log(message.sid));
