//button hover
$(function(){
  $(".hover img").hover(
   function() {
      $(this).attr("src","images/newbie/downbuttonB_hover.png");
   },
   function() {
      $(this).attr("src","images/newbie/downbuttonB.png");
   }
      );
  $(".hoverW img").hover(
   function() {
      $(this).attr("src","images/teacher/downbutton_hover.png");
       },
   function() {
      $(this).attr("src","images/teacher/downbutton.png");
   }
      );
});
//Icon hover
$(function(){
  $('#front').hover(
    function(){
      $("#back").fadeIn();
   });
   $('#front2').hover(
     function(){
       $("#back2").fadeIn();
    });
    $('#front3').hover(
      function(){
        $("#back3").fadeIn();
     });
});
//anchor slide
$(function(){
  $('#jump_sec_one').click(function(){
    $('html,body').animate({
      scrollTop: $('#sec_one').offset().top
    }, 800);
    return false;
  });
  $('#jump_sec_two').click(function(){
    $('html,body').animate({
      scrollTop: $('#sec_two').offset().top
    }, 800);
    return false;
  });
  $('#jump_sec_three').click(function(){
    $('html,body').animate({
      scrollTop: $('#sec_three').offset().top
    }, 800);
    return false;
  });
});
