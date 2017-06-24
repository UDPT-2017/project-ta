var User = require('../models/userModel');
let toMD5 = require('./hashPassword');
let jwt = require('jsonwebtoken');
var mongoose = require('mongoose');


var nguoidung = {
	login:function (req,res) {
		var username = req.body.username;
		var password = req.body.password;
		User.findOne({user:username}).exec(function(err,data){
			if (err) throw "username or password incorrect";
			if (toMD5(password)==data.pass){
				return res.json({token: jwt.sign({ fullName: data.user,}, 'RESTFULAPIs')});
			}
		})
	},

	loginRequired: function(req, res, next) {
	  if (req.user) {
	    next();
	  } else {
	    return res.status(401).json({ message: 'Unauthorized user!' });
	  }
	  next();
	},

	addUser: function(req,res){
		var username = req.body.username;
		var password = toMD5(req.body.password);
		newAd = new User({
			user:username,
			pass:password
		});
		newAd.save(function(err,data){
			res.json(data);
		});
	}

}

module.exports = nguoidung;