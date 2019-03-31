const nodemailer = require('nodemailer');

const {emailAccount} = require('../config/keys')



const sendEmail = (contents)=>{
    
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailAccount.myEmail,
          pass: emailAccount.myPassword
        }
      });

    var mailOptions = {
        from: contents.email,
        to: emailAccount.myEmail,
        subject: contents.subject+" By "+contents.author,
        text: contents.comment
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