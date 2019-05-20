$(function() {
	$(".carousel").slick({
		// dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		fade: true,
		cssEase: 'linear',
		// arrows: false
	});

  $('#mobile-menu-button').click(function () {
  if ($('.nav-container').hasClass('showing')) {
    $('.nav-container').removeClass('showing').addClass('hiding')
  } else {
    $('.nav-container').removeClass('hiding').addClass('showing')
  }
})

});
