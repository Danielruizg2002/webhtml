$(document).ready(function(){
	$('.up').hide();
	$('.up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 200 ){
			$('.up').slideDown(300);
		} else {
			$('.up').slideUp(300);
		}
	});
 
});


