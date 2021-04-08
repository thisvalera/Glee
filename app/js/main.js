$(function () {


  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__btn').on('click', function () {
    $(this).toggleClass('menu__btn--active');
  });

  $('.related-products__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left-slider.svg" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right-slider.svg" alt="arrow"></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,

  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });

  $('.product-cart__content-num').styler();


  $('.product-cart__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-cart__sub-slider',
    draggable: false,
  });
  $('.product-cart__sub-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-cart__slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    draggable: false,
  });

  $(".recent-product__star").rateYo({
    starWidth: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "5px",
    readOnly: true,
    starSvg: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill-rule:nonzero" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>',
  });

  $(".second-product__star, .product-cart__star").rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "5px",
    readOnly: true,
    starSvg: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill-rule:nonzero" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>',
  });


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
    $('.pagination__link, .product-tabs__top-item').removeClass('pagination__link--active');
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