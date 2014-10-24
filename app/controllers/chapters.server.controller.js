'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Chapter = mongoose.model('Chapter'),
	_ = require('lodash');

/**
 * Create a Chapter
 */
exports.create = function(req, res) {
	var chapter = new Chapter(req.body);
	chapter.user = req.user;

	chapter.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(chapter);
		}
	});
};

/**
 * Show the current Chapter
 */
exports.read = function(req, res) {
	res.jsonp(req.chapter);
};

/**
 * Update a Chapter
 */
exports.update = function(req, res) {
	var chapter = req.chapter ;

	chapter = _.extend(chapter , req.body);

	chapter.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(chapter);
		}
	});
};

/**
 * Delete an Chapter
 */
exports.delete = function(req, res) {
	var chapter = req.chapter ;

	chapter.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(chapter);
		}
	});
};

/**
 * List of Chapters
 */
exports.list = function(req, res) { Chapter.find().sort('-created').populate('user', 'displayName').exec(function(err, chapters) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(chapters);
		}
	});
};

/**
 * Chapter middleware
 */
exports.chapterByID = function(req, res, next, id) { Chapter.findById(id).populate('user', 'displayName').exec(function(err, chapter) {
		if (err) return next(err);
		if (! chapter) return next(new Error('Failed to load Chapter ' + id));
		req.chapter = chapter ;
		next();
	});
};

/**
 * Chapter authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.chapter.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};