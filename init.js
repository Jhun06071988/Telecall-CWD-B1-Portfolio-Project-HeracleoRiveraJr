//Sidenav Initialization
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
//Modal Init
  $(document).ready(function(){
    $('.modal').modal();
  });
//Carousel Init
  $(document).ready(function(){
    $('.carousel').carousel({
      padding: 200
    });
    autoplay();
    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
    }
  });
//slider Init
$(document).ready(function(){
  $('.slider').slider();
});