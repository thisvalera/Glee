$(function () {

  $('.product__filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.product__filter-price__from').text(data.from);
      $('.product__filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.product__filter-price__from').text(data.from);
      $('.product__filter-price__to').text(data.to);
    },

  });

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

  var mixerProducts = mixitup('.products-gallery__gallery', {
    selectors: {
      control: '.products-gallery__btn'
    }
  });

  var mixerDesign = mixitup('.design-gallery__items', {
    selectors: {
      control: '.design__btn'
    }
  });
});