var index = {
	home:function(req, res, next) {
	  var message = "Sample Blog";
	  res.render('index', {
	     title: 'Sample Blog',
	     message: message,
	   });
	},

	loadTitle:function(req,res){
		var title = "Truong An Blog";
		//console.log(json(title));
		res.json(title);
	}






}





module.exports = index;
