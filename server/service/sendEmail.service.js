const nodemailer = require('nodemailer');
require('dotenv').config()

const createTransport = async () => {
    return nodemailer.createTransport({
        service: process.env.SMTP_HOST,
        auth: {
            user: process.env.JARVIS_MAIL,
            pass: process.env.JARVIS_MAIL_PASSWORD
        }
    });
}

const sendEmail = async (transporter, recipientEmail, htmlString, subject) => {
    try {
        let info = await transporter.sendMail({
            from: `Jarvis<${process.env.JARVIS_MAIL}>`,
            to: recipientEmail,
            subject: subject,
            html: htmlString,
        });
        return info;
    } catch (error) {
        return error
    }
}

const resetPasswordMail = async (password, userName) => {
    const transporter = await createTransport();
    const htmlString = `<h1>Hi ${userName}</h1>` +
    '<p>Your new password can be seen below</p>' + 
    `<div><p>${password}</p></div>` +
    '<br/>' +
    '<p>// Jarvis</p>';
    const res = await sendEmail(transporter, 'joel.rosko97@gmail.com', htmlString, 'Test');
    
    return res;
}

module.exports = { resetPasswordMail };