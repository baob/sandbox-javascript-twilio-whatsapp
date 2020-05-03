const twilio = {
    accountSid: () => process.env.TWILIO_ACCOUNT_SID,
    authToken: () => process.env.TWILIO_AUTH_TOKEN,
    sandboxFrom: () => process.env.TWILIO_SANDBOX_FROM
};

const myPhone = () => process.env.MY_PHONE

const config = { twilio, myPhone };

module.exports = config;
