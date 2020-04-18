var child = $("ul").children();
var noneContainer = $("#none");
var noneButton = $("#noneButton");
var img = $("<img src='img/eye-hover.png'></img>")
function current(currentId) {
  	for(var i=0;i<child.length;i++){
	  	if(child.eq(i).attr("id")===currentId){
	    	child.eq(i).addClass("active");
		} 
		else {
	    	child.eq(i).removeClass("active");
	  	}
	}
}

child.click(function() {
  current($(this).attr("id"));
});

$(".piroll-work .row div").mouseenter(function(){
	$(this).append(img);
});
$(".piroll-work .row div").mouseleave(function(){
	if($(this).find("img")){
		img.remove();
	};
});

$(".piroll-load-more-work-button-1").click(function(){
	noneContainer.removeClass("d-none");
	noneButton.removeClass("d-none");
	$(this).addClass("d-none");
});

noneButton.click(function(){
	$(this).addClass("d-none");
	noneContainer.addClass("d-none");
	$(".piroll-load-more-work-button-1").removeClass("d-none");
});

function bgImage(){
	var img = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpg","img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg"];
	var allBlock = $(".piroll-work .row div");
	for(var i=0;i<allBlock.length;i++){
	 	allBlock.eq(i).css({"backgroundImage":"url" + "('" + img[i] + "')"});
	 }
}

$(document).ready(function(){
	bgImage();
});
