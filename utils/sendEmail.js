const nodemailer = require('nodemailer');

// const {emailAccount} = require('../config/keys')

const {emailKey,emailSecret} = require('../config/keys')


const sendEmail = (contents)=>{
    
    // console.log(emailAccount)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailKey,
          pass: emailSecret
        }
      });

    var mailOptions = {
        from: contents.email,
        to: emailKey,
        subject: contents.subject+" By "+contents.author,
        text: contents.comment + "\n [from "+contents.email+" ]"
      };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        return console.log(error);
    } else {
        return console.log('Email sent: ' + info.response);
    }
    });

}

module.exports = {sendEmail}