(function ($) {
  "use strict";
  jQuery(document).ready(function () {
    // mobile menu
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "991.99",
      onePage: false,
    });

    // vdo popup activation
    $(".popup-link").magnificPopup({
      type: "iframe",
      // other options
      iframe: {
        markup:
          '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          "</div>",

        patterns: {
          youtube: {
            index: "youtube.com/",

            id: "v=",

            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: {
            index: "//maps.google.",
            src: "%id%&output=embed",
          },
        },

        srcAction: "iframe_src",
      },
    });

    // counterUp
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    // Countdown
    $(".countdown").downCount(
      {
        date: "06/28/2030 12:00:00",
        offset: +6,
      },
      function () {
        alert("Countdown done!");
      }
    );

    // ToTop
    $(".scrollup").on("click", function () {
      $("html").animate(
        {
          scrollTop: "0",
        },
        500
      );
    });
    $(window).on("scroll", function () {
      var toTopVisible = $("html").scrollTop();
      if (toTopVisible > 500) {
        $(".scrollup").fadeIn();
      } else {
        $(".scrollup").fadeOut();
      }
    });

    // home 1 hero slider
    var $slider = $(".hero-slider-active");

    if ($slider.length) {
      var currentSlide;
      var slidesCount;
      var sliderCounter = document.createElement("div");
      sliderCounter.classList.add("slider_counter");

      var updateSliderCounter = function (slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).html(
          '<div class="slideActive">' +
            "0" +
            currentSlide +
            "</div>" +
            '<div class="totalSlide">' +
            "0" +
            slidesCount +
            "</div>"
        );
      };

      $slider.on("init", function (event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
      });

      $slider.on("afterChange", function (event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });

      $slider.slick({
        arrows: false,
        dots: true,
        fade: true,
        infinity: true,
        slidesToShow: 1,
      });
    }

    // MouseHover Animation home 1
    var hoverLayer = $(".hero-area2");
    var heroImgOne = $(".hero-area2 .hero_shapes .vec_1");
    hoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 100;
      var valueY = (e.pageY * -1) / 120;
      heroImgOne.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });

    // blog-area
    $(".testi-slider-active").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<i class="fas fa-arrow-left slickArrow arrow-prev"></i>',
      nextArrow: '<i class="fas fa-arrow-right slickArrow  arrow-next"></i>',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // testi2-area
    $(".testi2-slider-active").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // blog-area
    $(".blog-slider-active").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // sc_nav line active
    $(".sc_nav_wrapper a.nav-link").on("click", function () {
      let dot = $(".line span");
    });

    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: 2,
      },
    });
    // filter items on button click
    $(".filter-button-group").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    // window auto refresh
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    $(window).resize(function () {
      if (
        windowWidth != $(window).width() ||
        windowHeight != $(window).height()
      ) {
        location.reload();
        return;
      }
    });
  });

  jQuery(window).on("load", function () {
    // WOW JS
    new WOW().init();

    // Preloader
    var preLoder = $("#preloader");
    preLoder.fadeOut(0);
  });
})(jQuery);
