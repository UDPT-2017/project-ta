$(document).ready(function(){
	blogOnPageLoad();
});

blogMenuLoad = function() {
	api("GET","/getTitle",null,function(err,result){
		if(err) {}
		else{
			console.log("result");
			$('.blog-title').html(result);
		}
	});

};

blogTitleLoad =	function() {
	$('.blog-menu').html("Sample Blog Menu");

};
blogSloganLoad = function(){
	$(".navbar-text").html("Signed in as Mark Otto");
}

blogOnPageLoad = function(){
	blogTitleLoad();
	blogSloganLoad();
	blogMenuLoad();
};