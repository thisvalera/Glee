$(function () {

  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).toggleClass('pagination__link--active');
});



  $('.slider-shop__inner').slick({
    dots: true,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
  });

  // var mixerProducts = mixitup('.products-gallery__gallery', {
  //   selectors: {
  //     control: '.products-gallery__btn'
  //   }
  // });

  // var mixerDesign = mixitup('.design-gallery__items', {
  //   selectors: {
  //     control: '.design__btn'
  //   }
  // });
});