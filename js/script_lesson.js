//button hover
$(function(){
  $(".hover img").hover(
   function() {
      $(this).attr("src","images/teacher/downbutton_hover.png");
   },
   function() {
      $(this).attr("src","images/teacher/downbutton.png");
   }
      );
});
//anchor slide
$(function(){
  $('#jump_col_lesson').click(function(){
    $('html,body').animate({
      scrollTop: $('#col_lesson').offset().top
    }, 800);
    return false;
  });
});
