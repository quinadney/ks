'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users'),
	 chapters = require('../../app/controllers/chapters'),
	 nodemailer = require('nodemailer'),
	 bodyParser = require('body-parser');


	// Chapters Routes
	app.route('/chapters')
		.get(chapters.list)
		.post(users.requiresLogin, chapters.create)
		.put(chapters.update);

	app.route('/chapters/:chapterId')
		.get(chapters.read)
		.put(users.requiresLogin, chapters.hasAuthorization, chapters.update)
		.delete(users.requiresLogin, chapters.hasAuthorization, chapters.delete);

	app.post('/sendEmail', function(req,res) {
		console.log(chapters.chapterByID());
		// create reusable transporter object using SMTP transport
		    var transporter = nodemailer.createTransport({
		        service: 'Gmail',
		        auth: {
		            user: 'quinnodemailer@gmail.com',
		            pass: 'keystokeproject'
		        }
		    });

		// setup e-mail data with unicode symbols
		    var mailOptions = {
		        from: 'Quin Adney ✔ <quinnodemailer@gmail.com>', // sender address
		        to: 'quinlan.adney@gmail.com', // list of receivers
		        subject: 'Your Keystoke Story', // Subject line
		        text: 'Hello world ✔', // plaintext body
		        html: chapters + '<b>Hello world ✔</b>' // html body
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
	});

	// Finish by binding the Chapter middleware
	app.param('chapterId', chapters.chapterByID);
};