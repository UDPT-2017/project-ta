$(document).ready(function(){
	load5Post();

});

load5Post = function(){
	$(".nav-bar").html('<div class="newsfeed">Bài viết mới nhất</div>');
	$(".index-post-group.col-md-12.col-sm-12.col-ld-12").html("<h1>loading post...<h/1>");
	api.get('/getpost',null,function(err,data){
		if(err) throw "err";
		$(".index-post-group.col-md-12.col-sm-12.col-ld-12").html("");
		data.map(k => {
			$(".index-post-group.col-md-12.col-sm-12.col-ld-12").append("<div class='post-item' id='"+k._id+"'>"+
																		"<div class='post-title'>"+k.name+"</div>"+
																		"<div class='post-contents'>"+k.contents+"</div>"+
																	"</div>");
		
			}
		);
		getDetailPost();

	});
}

getDetailPost = function(){
			//alert("clicked");

	$(".post-title").on("click",function(event){
		//alert("clicked");
		var id = $(event.currentTarget).parent().attr("id");
		var data={
			postId:id,
		}
		api.post("/post/loadpost",data,function(err,data){
			if (err) throw "err";
			$(".newsfeed").html("Quay lại");
			$(".newsfeed").css({
				"border-radius": "0px 5px 5px 0px", 
			});
			$(".nav-bar").prepend('<div class="back-button"></div>');
			$(".index-post-group.col-md-12.col-sm-12.col-ld-12").html("<div class='post-title'>"+data.name+"</div>"+
																	"<div class='post-contents'>"+data.contents+"</div>");
			$('html, body').animate({
                    scrollTop: $(".newsfeed").offset().top
                }, 000);



		})
	})
	$(".newsfeed").on("click",function(e){
		load5Post();
	});

}