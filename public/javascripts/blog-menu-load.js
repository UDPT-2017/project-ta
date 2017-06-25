$(document).ready(function(){
	blogMenuLoad();
});

blogMenuLoad = function() {
	api.get("/title",null,function(err,result){
		if(err) {}
		else{
			var result = JSON.parse(result);
			// console.log(re);
			$('.blog-title').html(result.title);
			$(".blog-slogan").html(result.slogan);

		}
	});

};

// blogTitleLoad =	function() {
// 	$('.blog-menu').html("Sample Blog Menu");

// };
// blogSloganLoad = function(){
// 	$(".navbar-text").html("Signed in as Mark Otto");
// // }

// blogOnPageLoad = function(){
// 	blogTitleLoad();
// 	blogSloganLoad();
// 	blogMenuLoad();
// };