$('#hamburger i').click(function(evt) {
	evt.preventDefault();
	console.log('drop');
	$('nav ul').toggle(800);
});

$( window ).resize(function(){
	var w= $(window).width();
	console.log(w);
	if(w<=768){
		$('nav ul').hide();
	}
	else{
		$('nav ul').show();
	}
});

