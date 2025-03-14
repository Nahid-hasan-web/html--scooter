// --------------- aos animation
AOS.init();
// -------------- counter 


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
    focusOnSelect: true,
  });
// -------------- slick slider two

$('.testimonialSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fa-solid fa-arrow-left prevArrow sliderArrow"></i>',
  nextArrow:'<i class="fa-solid fa-arrow-right nextArrow sliderArrow"></i>',
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 768.98,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 575.98,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});


$('.counter').counterUp({
  delay: 10,
  time: 2000
});

// -------------- scroll
 let main_menu = document.querySelector('.main_menu')
 console.log(main_menu)
document.addEventListener('scroll' , ()=>{
   const scrollY =     window.scrollY
   console.log(scrollY)
   if(scrollY >= 200){
    main_menu.classList.add('animateMenu')
   }else{
    main_menu.classList.remove('animateMenu')
   }
})
