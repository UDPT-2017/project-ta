var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  	userId: {type: Number, default: 0},
	user: {type: String},
	pass: {type: String},
	//typeId: {type: umber, default:2}
})

module.exports = mongoose.model("User", User);
