
//メニュー
$(function() {
	var headerHeight = 60;
	$('[href^="#"]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHeight;
		$("html, body").animate({scrollTop:position}, 400, "swing");
		return false;
	});
});

// スマホメニューボタン
$(window).on('load', function(){
	$('#menubtn').on('click', function(){
		$(this).toggleClass('open');
		$('.sp_toggle').slideToggle();
	});
});

// スクロールイベント発火
$(window).scroll(function (){
	$('.scrlact').each( function(){
		var trigPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowH = $(window).height();
		if( scroll >= trigPos - ( windowH*2/3 )){
			$(this).removeClass('scrlact');
		}
	});
});

//自己紹介
window.onload=function(){
	var scroll = document.querySelectorAll('.up');
	var Animation = function() {
		for(var i = 0; i < scroll.length; i++) {
			var triggerMargin = 80;
			if (window.innerHeight > scroll[i].getBoundingClientRect().top + triggerMargin) {
				scroll[i].classList.add('show');
			}
		}
	}
	window.addEventListener('scroll', Animation);
}

//スキル
$(document).ready(function() {
	function skillSet() {
		$('.inner_bar').each(function() {
			total = $(this).data("total");
			$(this).css("width", total + "%");
		});

		$('.percent').each(function() {
			var $this = $(this);
			$({
				Counter: 10
			}).animate({
				Counter: $this.text()
			}, {
				duration: 3000,
				easing: 'swing',
				step: function() {
					$this.text(Math.ceil(this.Counter) + "%");
				}
			});
		});
	};
	setTimeout(skillSet, 1000);
});

//スライド
$('.slider').slick({
	autoplay: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
	dots: true,
	responsive: [
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});
