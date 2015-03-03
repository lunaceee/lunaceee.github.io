// $(subnav) = $(".subnav");
// navHeight = 60;
// $(window).on('scroll.home',_.throttle(function(){
// 	var offset, stickAt, top;
// 	top = $(window).scrollTop();
// 	offset = $(window).height() - $subnav.height();
// 	stickAt = top + navHeight;
// 	if (offset <= stickAt){
// 		return $subnav.addClass('is-sticky');
// 	}
// 	else{
// 		return $subnav.removeClass('is-sticky');
// 	}
// },10));
$(document).ready(function(){

	$('#subnavparent').on('activate.bs.scrollspy',function(){
		var currentItem = $(".nav li.active > a").text();
		$('#scrolltargetb').addClass("fixontop");




		if(currentItem == 'y'){
			$('#scrolltargetb').addClass("fixontop");
		}
		else if(currentItem =="x"){
			$('#scrolltargetb').removeClass("fixontop");
		}
	})

});
