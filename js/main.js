$(document).ready(function() {
  $(".burger-nav").on("click", function() {
    $(".nav_links ul").toggleClass("open");
  });
});

$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 120){
    	$(".nav-links").css("background","rgba(46,60,64,.5)");
      $(".nav-links a").css("color","#fff");
    }
    else{
    	$(".nav-links").css("background","rgba(255,255,255,0)");
      $(".nav-links a").css("color","#2e3c40");
    }
  });
});
