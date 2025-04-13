const nodemailer = require('nodemailer');

/**
 * authentication
 */
const x = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xxxxxxxxxxxx@gmail.com',
        pass: '***********'
    }
});

/***
 * Email properties:
 * Sender, receiver, subject, text
 */
const y = {
    from: 'xxxxxxxxxxx@gmail.com',
    to: 'xxxxxxxxxx@gmial.com',
    subject: 'Testing',
    text: 'Hello, Please provide the feedback.!'
};

/**
 * send email method
 */
x.sendMail(y, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});