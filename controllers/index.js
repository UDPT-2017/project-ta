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

	load10Post: function(req,res){
		Post.find({}).exec(function(err,data){
			var i,j,result=[];
			for(i=data.length -1,j=0;i>data.length -10,j<10;i--,j++){
				if(data[i].contents.length>300) data[i].contents = data[i].contents.slice(0,300);
				result[j]=data[i];
				// console.log(data[i]);
			}
			res.json(result);
		});
	},
	loadMorePost: function(req,res){
		Post.find({}).exec(function(err,data){
			var i,j,t,result=[];
			//console.log(req);
			for(i=0;i<data.length;i++){
				//console.log(data[i]._id);
				//console.log(req.body.postId);
				if(data[i]._id==req.body.postId){
					break;
				}
			};
			console.log(i);
			for(j=i-1,t=0;j>(i-10),j>0,t<10;j--,t++){
				 // console.log(j);
				 // console.log(t);
				 if(j<0) break;
				if(data[j].contents.length>300) data[j].contents = data[j].contents.slice(0,300);
				result[t]=data[j];
				// console.log(t);

			};
			res.json(result);
	
		});
	}

}




module.exports = index;
