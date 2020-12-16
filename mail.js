const mailer = require('nodemailer');
const { Hello } = require('./hello_template');
const { Thanks } = require('./thanks_template');
require('dotenv').config();
const getEmailData = (to, name, template) => {
    let data = null;
    switch (template) {
        case 'Hello':
            data = {
                from: process.env.EMAIL_USER,
                to,
                subject: `Hello ${name}`,
                html: Hello(name),
            };
            break;
        case 'Thanks':
            data = {
                from: process.env.EMAIL_USER,
                to,
                subject: `Thanks ${name}!`,
                html: Thanks(name),
            };
            break;
        default:
            //Welcome
            data = {
                from: process.env.EMAIL_USER,
                to,
                subject: `Welcome ${name}!`,
                html: Welcome(name),
            };
    }
    return data;
};

const sendEmail = (to, name, type) => {
    const smtpTransport = mailer.createTransport({
        host: process.env.EMAIL_HOST,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    const mail = getEmailData(to, name, type);
    console.log(mail);
    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent successfully');
        }
        smtpTransport.close();
    });
};

module.exports = { sendEmail };
