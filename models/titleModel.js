var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Title = new Schema({
  	title: {type: String},
	slogan: {type: String},
})

module.exports = mongoose.model("Title", Title);
