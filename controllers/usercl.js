var User = require('../models/userModel');
let toMD5 = require('./hashPassword');
let jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Cookies = require('cookies')

var nguoidung = {
	login:function(req,res){
		res.render('user-login', {
	     	message: "Xin chao",
	   });
	},
	checklogin:function (req,res) {
		var username = req.body.username;
		var password = req.body.password;
		console.log(username);
			console.log(password);
		User.findOne({user:req.body.username}).exec(function(err,data){
			if (err||data==null) {res.render('user-login', {
					message: "Incorrect password or username",

		   		});
			}else{
				// console.log("data");
				// console.log(data);
				// console.log(username);
				// console.log(password);

				// console.log(toMD5(password));
				if (toMD5(password)==data.pass){
					var token= jwt.sign({ fullName: data.user,}, 'RESTFULAPIs');
					new Cookies(req,res).set('access_token',token,{
					  httpOnly: true,
					  secure: true      // for your production environment
					});
					return res.render("user",{

					});
				}
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
	},
	userpage:function(req,res) {
		var token = new Cookies(req,res).get('access_token');
		jwt.verify(token,'RESTFULAPIs',function(err,token){
		  if(err){
			res.render('user-login',{

			})  }else{
			res.render('user',{

			})
		  }
		});

	},

}

module.exports = nguoidung;