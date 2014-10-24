'use strict';

var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport


// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
exports.sendMail = function (opts) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'quinnodemailer@gmail.com',
            pass: 'keystokeproject'
        }
    });

    var mailOptions = {
        from: 'Quin Adney ✔ <quinnodemailer@gmail.com>', // sender address
        to: opts.email, // list of receivers
        subject: 'Your Keystoke Story', // Subject line
        text: 'Hello world ✔', // plaintext body
        html: '<b>Hello world ✔</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
        transporter.close();
    });
};



