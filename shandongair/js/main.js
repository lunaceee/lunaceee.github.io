$(document).ready(function() {

//fancybox video
		$(".fancybox").fancybox();
		
		$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

//fancybox gallery
$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

// home page video fancybox
	$('.viewport').mouseenter(function(e) {
				// $(this).children('a').children('img').animate({ left: '0', top: '0', width: '100%'}, 100);
				$(this).children('a').children('span').fadeIn(200).css("display","block");
					}).mouseleave(function(e) {
				// $(this).children('a').children('img').animate({ left: '-10%', top: '-10%', width: '110%'}, 100);
				$(this).children('a').children('span').fadeOut(200);
			});

//fancybox lucky student
	$("#single_1,#single_2,#single_3").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });


//load more



});



