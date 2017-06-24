var resut;
var err = true;
var api = { 
	post: function(route, req, callback) {
		var wait = new Promise (function(resolve,reject){
		$.ajax({
			url : route, // gửi ajax đến file result.php
			type : "POST", // chọn phương thức gửi là post
			dataType: 'json', // dữ liệu trả về dạng text
			data : req,
			success : function (result){
				err = false;
				resut= result;
				resolve(err);
			},
			error: function (request, error) {
       			reject(error);
       		},
			});

		});

		wait.then(function(err){
			callback(err,resut);
		},function(err){
			console.log(err);
		})
	},

	get: function(route,req, callback) {
		var wait = new Promise (function(resolve,reject){
		$.ajax({
			url : route, // gửi ajax đến file result.php
			type : "GET", // chọn phương thức gửi là post
			dataType: 'json', // dữ liệu trả về dạng text
			data : req,
			success : function (result){
				err = false;
				resut= result;
				resolve(err);
			},
			error: function (request, error) {
       			reject(error);
       		},
			});

		});

		wait.then(function(err){
			callback(err,resut);
		},function(err){
			console.log(err);
		})
	},

	put: function(route, req, callback) {
		var wait = new Promise (function(resolve,reject){
			$.ajax({
				url : route, // gửi ajax đến file result.php
				type : "PUT", // chọn phương thức gửi là post
				dataType: 'json', // dữ liệu trả về dạng text
				data : req,
				success : function (result){
					err = false;
					resut= result;
					resolve(err);
				},
				error: function (request, error) {
	       			reject(error);
	       		},
				});

			});

			wait.then(function(err){
				callback(err,resut);
			},function(err){
				console.log(err);
			})	
		},

	delete: function(route, req, callback) {
		var wait = new Promise (function(resolve,reject){
			$.ajax({
				url : route, // gửi ajax đến file result.php
				type : "DELETE", // chọn phương thức gửi là post
				dataType: 'json', // dữ liệu trả về dạng text
				data : req,
				success : function (result){
					err = false;
					resut= result;
					resolve(err);
				},
				error: function (request, error) {
	       			reject(error);
	       		},
				});

			});

			wait.then(function(err){
				callback(err,resut);
			},function(err){
				console.log(err);
			})		
		},
}