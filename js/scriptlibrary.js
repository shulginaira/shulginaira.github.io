$('.menu_item:nth-child(4)').on('click', function() {
		$('.menu_more').addClass('menu_moreactive').removeClass('menu_more');
});
$('.menu_close').on('click', function() {
	$('.menu_moreactive').addClass('menu_more').removeClass('menu_moreactive');
});