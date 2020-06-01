'use strict'

var mongoose = require('mongoose'); 


var Schema = mongoose.Schema;
var ProjectSchema = Schema({
	name: String,
	category: String,
	description: String,
	year: Number,	
	image: String
});


module.exports = mongoose.model('Project', ProjectSchema);

