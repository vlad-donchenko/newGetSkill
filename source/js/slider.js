'use strict';

(function () {
  var cabinetMenu = $('.menu-cabinet');
  var tarrifSlider = $('.tariff__plan');
  var aboutCurseTabs = $('.about-curse__tabs .tabs__list');
  var curseGallerySlider = $('.curse-gallery__slider');

  cabinetMenu.slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '54px',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1209,
        settings: "unslick"
      }
    ]
  });

  aboutCurseTabs.slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: "unslick"
      }
    ]
  });

  tarrifSlider.slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '54px',
    prevArrow: $('.tariff__plan-arrow--prev'),
    nextArrow: $('.tariff__plan-arrow--next'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      }
    ]
  });

  curseGallerySlider.slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.curse-gallery__arrow--prev'),
    nextArrow: $('.curse-gallery__arrow--next'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1209,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ]
  });

})();
