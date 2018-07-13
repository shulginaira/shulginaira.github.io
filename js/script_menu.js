var num = 0;
var header = $('.header');
$(window).scroll(function(event) {
	var winTop = $(this).scrollTop();
	if(winTop > num) {
		 	$('.header').addClass('no_top');
	}else if(winTop>header.height()){
			$('.no_top').addClass('header_heading').removeClass('no_top');
		}else{
			$('.header_heading').addClass('header').removeClass('header_heading');
		}
	num=winTop
});