(function slider(){
  if (document.documentElement.clientWidth < 400){
    $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true
    });
    $('.testimonials-section_slider').slick({
      infinite: true,
      dots: true,
      centerMode: true
    });	
  } else {
    $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $('.testimonials-section_slider').slick({
      infinite: true,
      dots: true
    });	
  }
})();





$('.hamburger').click(function(){
  $(this).toggleClass('active');
  $('.header-menu').toggleClass('show-mobile');
});