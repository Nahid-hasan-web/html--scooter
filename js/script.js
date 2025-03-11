// -------------- counter 
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

// ---------------- slick  slider one 
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
// -------------- slick slider two

$('.testimonialSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fa-solid fa-arrow-left prevArrow sliderArrow"></i>',
  nextArrow:'<i class="fa-solid fa-arrow-right nextArrow sliderArrow"></i>'
});

// --------------- aos animation

  AOS.init();
