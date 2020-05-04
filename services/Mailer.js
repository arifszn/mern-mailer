const nodemailer = require('nodemailer');

class Mailer {
    
    constructor({ subject, recipients }, content) {
        this.subject = subject;
        this.recipients = recipients;
        this.content = content;
    }

    async send() {
        try {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                secure: process.env.MAIL_SECURE, // true for 465, false for other ports
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD
                }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: process.env.MAIL_FROM, // sender address
                to: this.recipients, // list of receivers
                subject: this.subject, // Subject line
                text: this.content, // plain text body
                html: this.content // html body
            });

            console.log("Message sent: %s", info.messageId);
        } catch (error) {
            console.log(error);
            
        }

        
    }
}

module.exports = Mailer;