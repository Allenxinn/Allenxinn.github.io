window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  // Check for click events on the navbar burger icon

  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Initialize single-slide carousels
  var carousels = bulmaCarousel.attach(
    ".carousel:not(.carousel-multi)",
    options,
  );

  // Initialize multi-slide carousels
  var options_multi = {
    slidesToScroll: 1,
    slidesToShow: 2,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    breakpoints: [
      { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
      { changePoint: 640, slidesToShow: 2, slidesToScroll: 1 },
      { changePoint: 768, slidesToShow: 2, slidesToScroll: 1 },
      { changePoint: 3000, slidesToShow: 2, slidesToScroll: 1 }
    ]
  };
  var carousels_multi = bulmaCarousel.attach(".carousel-multi", options_multi);

  bulmaSlider.attach();
});
