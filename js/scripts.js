$(document).ready(function(){

	/*- menu-btn -*/
  var siteToggle = $('.menu-btn'),
      siteMenu= $('.main-navi');


  siteToggle.on('click', function(){
      $(this).toggleClass("collapsed");
        siteMenu.toggleClass("show");
      $('body').toggleClass('overflow-hd');
  });

	/*- promo-slider -*/
  var swiper = new Swiper(".promo-slider", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    autoHeight: false,
    navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
    },
    pagination: {
			el: ".swiper-pagination",
			clickable: true,
    },
	  breakpoints: {
	  	320: {
        autoHeight: true,
      },
      1199: {
        autoHeight: false,
      },
    },
	});

	/*- info-slider -*/
  var swiper = new Swiper(".info-slider", {
    spaceBetween: 0,
    loop: true,
    autoHeight: true,
    navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
	});

	/*- products-list__slider -*/
  var swiper = new Swiper(".products-list__slider", {
    spaceBetween: 0,
    loop: true,
    navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
	    },
	  pagination: {
			el: ".swiper-pagination",
			clickable: true,
	    },
	});

	/*- tabs -*/
  $(".equipment__navi ul").on("click", "li:not(.active)", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest(".equipment")
      .find(".equipment__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });

  /*- to-top -*/
	$('.to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 900);
		return false;
	});

  /*- products-list__dropdown -*/
    $('.products-list__btn').click(function(e) {
      if($(this).parent().hasClass('show')) {
          $(this).parent().removeClass('show');
      } else {
          $(this).parent().addClass('show');
      }
      return false;
    });

});