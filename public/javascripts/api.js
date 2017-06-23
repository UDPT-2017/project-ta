var resut;
var err = true;
var api = function(apiMethod,path,req,callback){
	var wait = new Promise (function(resolve,reject){
		$.ajax({
			url : path, // gửi ajax đến file result.php
			type : apiMethod, // chọn phương thức gửi là post
			dataType: 'json', // dữ liệu trả về dạng text
			//data : req,
			success : function (result){
				err = false;
				resut= result;
				resolve(err);
			},
			error: function (request, error) {
       			reject(error);
       		},
			});

	} );

	wait.then(function(err){
		callback(err,resut);
	},function(err){
		console.log(err);
	})
		 


	// switch(apiMethod) {
 //    case "GET":
 //        $.get(url,function());

 //        break;
 //    case "POST":
 //        code block
 //        break;
 //    case "POST":
 //        code block
 //        break;
 //    case "POST":
 //        code block
 //        break;
 //    default:
	// }	

// },
// 	post: function(route, data, callback) {
// 		api.callDirectly("POST", route, data, callback);
// 	},

// 	get: function(route, callback) {
// 		api.callDirectly("GET", route, null, function(result){
// 			callback(result);
// 		});
// 	},

// 	put: function(route, data, callback) {
// 		api.callDirectly("PUT", route, data, callback);
// 	},

// 	delete: function(route, data, callback) {
// 		api.callDirectly("DELETE", route, data, callback);
// 	},




}