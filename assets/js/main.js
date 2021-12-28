$(function () {

  "use strict";

  //===== Prealoder
  $(window).on('load', function (event) {
    $('.preloader').delay(500).fadeOut(500);
  });

  //===== Mobile Menu 
  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass('active');
  });
  $(".navbar-nav a").on('click', function () {
    $(".navbar-toggler").removeClass('active');
  });

  //===== close navbar-collapse when a  clicked 
  $(".navbar-nav a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
  });

  //=====  Rating selection
  var $star_rating = $('.star-rating .fa');
  var SetRatingStar = function () {
    return $star_rating.each(function () {
      if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
        return $(this).removeClass('fa-star-o').addClass('fa-star');
      } else {
        return $(this).removeClass('fa-star').addClass('fa-star-o');
      }
    });
  };
  $star_rating.on('click', function () {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
  });
  SetRatingStar();

});