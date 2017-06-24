let Post = require('../models/postModel')
var mongoose = require('mongoose');

var baiviet={
	addPost:function(req,res){
		Post.find({}).exec(function(err,result){
			if(err){
				throw err;
			}else{

				// console.log(result);
				// console.log(req.body.title);
				// console.log(req.body.slogan);
				let newPost = new Post({
						postId: result[result.length-1].postId + 1,
						name: req.body.name,
						contents:req.body.contents,
				  	});
				newPost.save(function(err,data){
					if(err){
						res.json("err");
					}else{
						res.json(data);
					}
				})

			}
		})
	},

	loadPost:function(req,res){
		console.log(req.body.id);
		Post.findOne({postId:req.body.id}).exec(function(err,result){
			if(err) throw "err";
			res.json(result);
		});
	}
}


module.exports = baiviet;