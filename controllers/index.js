let Title = require('../models/titleModel');
let Post = require('../models/postModel')
var mongoose = require('mongoose');

var index = {
	home:function(req, res, next) {
	  var message = "Sample Blog";
	  res.render('index', {
	     title: 'Sample Blog',
	     message: message,
	   });
	},

	loadTitle:function(req,res){
		Title.find({}).exec(function(err,data){
			if(err){
				throw err;
			}else{
				// console.log(data);
				var result=JSON.stringify({
					title : data[0].title,
					slogan: data[0].slogan,
				});

				// result.title = data.title,
				// result.slogan = data.slogan,
				res.json(result);
			}
		});
	},
	updateTitle:function(req,res,callback){
		Title.remove({},function(err){
			if(err){
				throw err;
			}else{
				console.log(req.body.title);
				console.log(req.body.slogan);

				let newTitle = new Title({
						// title: req.body.title,
						// slogan: req.body.slogan,
						title: "Truong An",
						slogan: "req.body.slogan",
				  	});
				newTitle.save(function(err,data){
					if(err){
						callback(true);
					}else{
						callback(false);
					}
				})

			// 	let newPost = new Post({
			// 			postId: req.body.title,
			// 			name: "Ngay hom qua da tung",
			// 			contents:"Noi dung cua bai hat nay la cai cuc cut"
			// 	  	});
			// 	newPost.save(function(err,data){
			// 		if(err){
			// 			res.json("err");
			// 		}else{
			// 			res.json(data);
			// 		}
			// 	})

			// }
		// })
		// Title.findOneAndUpdate(
		// 	{title: ,
		// 	{
		// 		title: req.body.title,
		// 		slogan: req.body.slogan,
		// 	},
		// 	function(err, result) {
		// 		if(err){
		// 			res.json("err");
		// 		}else{
		// 			res.json("suc");
		// 			}
		// 	})
			}
		});
	},

	load5Post: function(req,res){
		Post.find({}).exec(function(err,data){
			var i,j,result=[];
			for(i=data.length -1,j=0;i>data.length -5,j<5;i--,j++){
				result[j]=data[i];
			}
			res.json(result);
		});
	},

}




module.exports = index;
