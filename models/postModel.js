var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
  	postId: {type: Number, default: 0},
	name: {type: String},
	contents: { type: String},
})

module.exports = mongoose.model("Post", Post);
