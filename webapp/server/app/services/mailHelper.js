'use strict';
const nodemailer = require('nodemailer');

//const emailSender = 'tallentBooking@yandex.com';
//const passwordSender = 'tallent-booking123';
const emailSender = 'programmerbooking@yandex.com';
const passwordSender = 'ijrjkfl777';

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'yandex',
    auth: {
        user: emailSender,
        pass: passwordSender
    }
});

const MailHelper = {

  send: function (email, subject, text, html, callback) {
      let mailOptions = {
          from: '"Programmer-booking" <' + emailSender + '>', // sender address
          to: email, // list of receivers
          subject: subject, // Subject line
          text: text, // plain text body
          html: html // html body
      };
      transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
              return callback(err, info);
          }
          callback(null, info)
      })
  }
};

module.exports = MailHelper;
