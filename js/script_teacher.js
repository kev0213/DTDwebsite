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
  $(".hoverFB img").hover(
   function() {
      $(this).attr("src","images/teacher/FB_hover.png");
   },
   function() {
      $(this).attr("src","images/teacher/FB.png");
   }
      );
  $(".hoverWeb img").hover(
   function() {
      $(this).attr("src","images/teacher/External_Link_hover.png");
   },
   function() {
      $(this).attr("src","images/teacher/External_Link.png");
     }
      );
});
//anchor slide
$(function(){
  //scroll window
  $(window).scroll(function(){
     var scrollTop = $(document).scrollTop();
     var width = $(window).width();
         if (scrollTop == 0) {
           $("#pro_fan").fadeOut();
           $("#pro_73").fadeOut();
           $("#pro_albert").fadeOut();
               }
     return false;
  });
  //go to the top
    $("#Home").click(function(){
      $("html,body").animate({scrollTop:0},800);
      $("#pro_fan").fadeOut();
      $("#pro_73").fadeOut();
      $("#pro_albert").fadeOut();
        return false;
    });
  //主視覺連結
  $('#downbutton').click(function(){
    $('html,body').animate({
      scrollTop: $('#fan').offset().top
    }, 800);
    $("#pro_fan").fadeIn(2000);
    return false;
  });

  //分項
  $('#jump_73').click(function(){
    $('html,body').animate({
      scrollTop: $('#73').offset().top
    }, 800);
    $("#pro_73").fadeIn(2000);
    return false;
  });
  $('#jump_albert').click(function(){
    $('html,body').animate({
      scrollTop: $('#albert').offset().top
    }, 800);
    $("#pro_albert").fadeIn(2000);
    return false;
  });
});
