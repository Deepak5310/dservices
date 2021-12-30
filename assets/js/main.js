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

  //=====  Slick testimonial active 
  $('.testimonial-active').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
  });

  //====== Magnific Popup 
  $('.Video-popup').magnificPopup({
    type: 'iframe'
    // other options
  });

  //===== Back to top
  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200)
    } else {
      $('.back-to-top').fadeOut(200)
    }
  });

  //Animate the scroll to top
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0,
    }, 1500);
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