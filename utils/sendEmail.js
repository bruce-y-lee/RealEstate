const nodemailer = require('nodemailer');

const {emailAccount} = require('../config/keys')

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: emailAccount.myEmail,
//     pass: emailAccount.myPassword
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

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