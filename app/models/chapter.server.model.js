'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Chapter Schema
 */
var ChapterSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Chapter name',
		trim: true
	},
	company: {
		type: String,
		default: '',
		trim: true
	},
	competitor: {
		type: String,
		default: '',
		trim: true
	},
	compCompany: {
		type: String,
		default: '',
		trim: true
	},
	friend: {
		type: String,
		default: '',
		trim: true
	},
	staff: {
		type: String,
		default: '',
		trim: true
	},
	companySolution: {
		type: String,
		default: ''
	},
	friendSolution: {
		type: Boolean,
		default: false,
	},
	professionalSolution: {
		type: Boolean,
		default: false
	},
	generatorSolution: {
		type: Boolean,
		default: false
	},
	firstOption: {
		type: String,
		default: '',
		trim: true
	},
	secondOption: {
		type: String,
		default: '',
		trim: true
	},
	thirdOption: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Chapter', ChapterSchema);