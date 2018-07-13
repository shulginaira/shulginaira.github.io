var benefit = document.querySelector('.benefits');
var heightBenefit = benefit.getBoundingClientRect();
var heightBenefitTop= heightBenefit.top;
var topFreez = 100;
var m = 100;
$(document).scroll(function() {
	var bodyRect = document.body.getBoundingClientRect();
	winTop = $(window).scrollTop();
	var top = winTop + $(window).height();
	$('.freezing').each(function(){
		var topIn_3 = $(this).offset().top + $(this).height()*0.3;
		if(winTop>=topFreez){
			$('.start_freezing').css('opacity','0');
	 		$('.freezing').addClass('freezing_active');
	 		$('.boxproduct_content').css('transform', 'translateX(0)').css('opacity', '1');
	 		$('.boxbefore').css('width', '220px');
	 		$('.boxafter').css('width', '220px');
	 		setTimeout(down,200);
		}if(winTop>topIn_3){
			$('.fnctn_left1').addClass('fnctn_left11').removeClass('fnctn_left1');
		 	$('.fnctn_left2').addClass('fnctn_left21').removeClass('fnctn_left2');
		 	$('.fnctn_left3').addClass('fnctn_left31').removeClass('fnctn_left3');
			$('.fnctn_right1').addClass('fnctn_right11').removeClass('fnctn_right1');
		 	$('.fnctn_right2').addClass('fnctn_right21').removeClass('fnctn_right2');
		 	$('.fnctn_right3').addClass('fnctn_right31').removeClass('fnctn_right3');
		}
	})
	$('.benefits').each(function(){
		var topIn_1 = $(this).offset().top + $(this).height()*0.2;
		var topIn_2 = $(this).offset().top + $(this).height()*0.3;
		var topIn_3 = $(this).offset().top + $(this).height()*0.95;
		if(top>topIn_1){
			$('.benefits .wrapper>.benefits_title').css('transform','translateY(-50px)').css('opacity','1');
			$('.benefits_logo').css('transform','translateY(-50px)');
			$('.benefits_left .benefitsItem:nth-child(1)').css('transform','translateY(-50px)').css('opacity','1');
			$('.benefits_left .benefitsItem:nth-child(1) .itemtext').css('transform','translateX(0px)').css('opacity','1');
			$('.benefits_right .benefitsItem:nth-child(1)').css('transform','translateY(-50px)').css('opacity','1');
			$('.benefits_right .benefitsItem:nth-child(1) .itemtext').css('transform','translateX(0px)').css('opacity','1');
			$('.benefits_left .benefitsItem:nth-child(2)').css('transform','translateY(-50px)').css('opacity','1');
			$('.benefits_left .benefitsItem:nth-child(2) .itemtext').css('transform','translateX(0px)').css('opacity','1');
			$('.benefits_right .benefitsItem:nth-child(2)').css('transform','translateY(-50px)').css('opacity','1');
			$('.benefits_right .benefitsItem:nth-child(2) .itemtext').css('transform','translateX(0px)').css('opacity','1');
			$('.benefits_left .benefitsItem:nth-child(3)').css('transform','translateY(-50px)').css('opacity','1');
			$('.benefits_left .benefitsItem:nth-child(3) .itemtext').css('transform','translateX(0px)').css('opacity','1');
			$('.benefits_right .benefitsItem:nth-child(3)').css('transform','translateY(-50px)').css('opacity','1');
			$('.benefits_right .benefitsItem:nth-child(3) .itemtext').css('transform','translateX(0px)').css('opacity','1');
		}if(top>topIn_2){
			$('.button').css('transform','translateY(-50px)');
			$('.benefits_box .benefits_logo').css('transform','translateY(-50px)');
		}if(top>topIn_3){
			$('.fnct_left1').addClass('fnct_left11').removeClass('fnct_left1');
			$('.fnct_left2').addClass('fnct_left21').removeClass('fnct_left2');
			$('.fnct_left3').addClass('fnct_left31').removeClass('fnct_left3');
			$('.fnct_right1').addClass('fnct_right11').removeClass('fnct_right1');
			$('.fnct_right2').addClass('fnct_right21').removeClass('fnct_right2');
			$('.fnct_right3').addClass('fnct_right31').removeClass('fnct_right3');
			$('.benefits_box').css('transform','translateY(-50px)');
		}
	});
	$('#choose').each(function(){
		var topIn_1 = $(this).offset().top + $(this).height()*0.2;
		var topIn_2 = $(this).offset().top + $(this).height()*0.3;
		var topIn_3 = $(this).offset().top + $(this).height()*0.5;
		if(top>topIn_1){
			$('#choose>.benefits_title').css('transform','translateY(-50px)').css('opacity','1');
		}
		if(top>topIn_2){
			$('.chooseimgleft').css('transform','translateX(0px)');
			$('.chooseimgright').css('transform','translateX(0px)');
			$('.chooseOrr').css('transform','scale(3.5)');
			setTimeout(buttonup,300);
		}
		if(top>topIn_3){
			$('.choose_left>.choose_content').css('transform','translateX(0)').css('opacity','1');
			$('.choose_right>.choose_content').css('transform','translateX(0)').css('opacity','1');
			$('.choose_blocktext').css('transform','translateY(0)').css('opacity','1');
		}
	});
	$('.tandem').each(function(){
	var topIn_1 = $(this).offset().top + $(this).height()*0.2;
		var topIn_2 = $(this).offset().top + $(this).height()*0.5;
		var topIn_3 = $(this).offset().top + $(this).height()*0.9;
		if(top>topIn_1){
			$('.tandem .wrapper>.benefits_title').css('transform','translateY(-50px)').css('opacity','1');
			$('.tandem .wrapper>.tandemContent').css('transform','translateY(-50px)').css('opacity','1');
			setTimeout(buttonup,300);
		}if(top>topIn_2){
			$('.tandemitem').css('transform','translateX(0)').css('opacity','1');
		}if(top>topIn_3){
			$('.tandem_boxtext').css('transform','translateY(-50px)').css('opacity','1');
			$('.tandem .button').css('transform','translateY(-50px)');
		}
	});
	$('#colors').each(function(){
		var topIn_1 = $(this).offset().top + $(this).height()*0.2;
		var topIn_2 = $(this).offset().top + $(this).height()*0.4;
		var topIn_3 = $(this).offset().top + $(this).height()*0.6;
		if(top>topIn_1){
			$('#colors .wrapper>.benefits_title').css('transform','translateY(-50px)').css('opacity','1');
			$('#colors .wrapper>.tandemContent').css('transform','translateY(-50px)').css('opacity','1');
		}if(top>topIn_2){
			$('.color_left').css('transform','translateX(0)').css('opacity','1');
			$('.color_right').css('transform','translateX(0)').css('opacity','1');
			$('.color_top_text').css('opacity','1');
			$('.color_change').css('opacity','1');
			setTimeout(lineMoveFirst,1000);
			setTimeout(lineMoveSecond,1800);
		}if(top>topIn_3){
			$('#colors .button').css('transform','translateY(0)');
		}
	});
	$('#where').each(function(){
		var topIn_1 = $(this).offset().top + $(this).height()*0.8;
		if(top>topIn_1){
			$('.where_title').css('transform','translateX(0)').css('opacity','1');
			setTimeout(moveWhereText,500);
			setTimeout(moveWhereBuy,1000);
		}
	});
	$('#more').each(function(){
		var topIn_1 = $(this).offset().top + $(this).height()*0.8;
		if(top>topIn_1){
			$('.more_left').css('transform','translateX(0)').css('opacity','1');
			setTimeout(moveMore,500);
		}
	});
		if(winTop <= topFreez) {
	 		$('.start_freezing').css('opacity','1');
	 		$('.freezing_active').addClass('freezing').removeClass('freezing_active');
		}
		if(winTop < topFreez) {
		 	setTimeout(up,200);
		}
});
function down() {
	$('.freezing_img_up').addClass('freezingimgdown').removeClass('freezing_img_up');
	setTimeout(products,1000);
};
function up() {
	$('.freezingimgdown').addClass('freezing_img_up').removeClass('freezingimgdown');
	setTimeout(productsNone,100);
};
function buttonup() {
	$('.choose_left .buttons').css('transform','translateY(0px)');
	$('.choose_right .buttons').css('transform','translateY(0px)');
};
function products() {
	$('.freez_meet').css('opacity','1');
	$('.freez_fungus').css('opacity','1');
	$('.freez_fish').css('opacity','1');
	$('.freez_dough').css('opacity','1');
};
function productsNone() {
	$('.freez_meet').css('opacity','0');
	$('.freez_fungus').css('opacity','0');
	$('.freez_fish').css('opacity','0');
	$('.freez_dough').css('opacity','0');
};
function lineMoveFirst() {
	$('.line_rote1').css('width','237px');
	$('.line_rote2').css('width','237px');
};
function lineMoveSecond() {
	$('.line_rote3').css('width','237px');
	$('.line_rote4').css('width','235px');
};
function moveWhereText() {
	$('.where_text').css('transform','translateX(0)').css('opacity','1');
};
function moveWhereBuy() {
	$('.colorsbuy').css('transform','translateX(0)').css('opacity','1');
};
function moveMore() {
	$('.moreright').css('transform','translateX(0)').css('opacity','1');
};

function emergence() {
	$('.startimgup').addClass('startimgdown').removeClass('startimgup');
};
setTimeout(emergence, 300);
function bridge() {
	$('.start_freezingleft').addClass('start_freezingleft_active').removeClass('start_freezingleft');
	$('.start_freezingright').addClass('start_freezingright_active').removeClass('start_freezingright');
};
setTimeout(bridge, 200);

$('.wrapperbox').on('mouseenter', 'video',(function(event) {
	this.play();
	
	$(this).css('transform', 'scale(1.7)')
}));
$('.wrapperbox').on('mouseleave', 'video',(function(event) {
	this.pause();

	$(this).css('transform', 'scale(1)')
}));
		
var img_arrleft = ["img/1942-FW872nfzb-var-4-2.png", "img/26-FW872nfzb-var-3.png", "img/2021-1.1.png", "img/2019-1.2.png"];
var img_arrright = ["img/1943-SX873nfzb-var-4.png","img/1946-30-SX873nfzb-var-3.png",  "img/2022-2.1.png", "img/2020-2.2.png"];
var colorBoxLeft = document.querySelector('.colorBoxLeft');
var colorBoxRight = document.querySelector('.colorBoxRight');
var color_change = document.querySelector('.color_change');
var block_change = document.querySelectorAll('.block_change');
function change() {			
	var number = Math.floor(Math.random()*img_arrleft.length);
	var num = Math.floor(Math.random()*img_arrright.length) ;
	colorBoxLeft.src = img_arrleft[number];
	colorBoxRight.src = img_arrright[num];
};
	
var timer = setInterval(change, 1500);
function changeimg(event) {
	clearInterval(timer);
	var e = event;
	var target = event.target;
	for (var i = 0; i < block_change.length; i++) {
        if(block_change[i] == event.target) {
        	colorBoxLeft.src = img_arrleft[i];
            colorBoxRight.src = img_arrright[i];
        }
	}
};
color_change.addEventListener("click", changeimg, false);

var n = 0;
$('.startbutton').on('click', function() {
	n++;
	if (n%2 == 1) {
		$('.start_freezingleft_active').css('opacity','0');
		$('.start_freezingright_active').css('opacity','0');
		$('.freezmodal').css('opacity','1');
		$('.start_btn').css('font-size','0');
		$('.freezerleft').css('left','0');
		$('.freezerright').css('right','0');
	}
	console.log(n);
	if (n%2 == 0) {
		$('.start_freezingleft_active').css('opacity','1');
		$('.start_freezingright_active').css('opacity','1');
		$('.freezmodal').css('opacity','0');
		$('.start_btn').css('font-size','12px');
		$('.freezerleft').css('left','-110%');
		$('.freezerright').css('right','-110%');
	}
});
