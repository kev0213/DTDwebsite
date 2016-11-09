
//anchor slide
$(function(){//go to the top
  $("#Home").click(function(){
    $("html,body").animate({scrollTop:0},800);
      return false;
  });
  //主視覺連結
  $('#jump_DTD1').click(function(){
    $('html,body').animate({
      scrollTop: $('#DTD1').offset().top
    }, 800);
    return false;
  });
  $('#jump_PRG1').click(function(){
    $('html,body').animate({
      scrollTop: $('#PRG1').offset().top
    }, 800);
    return false;
  });
  $('#jump_ELC1').click(function(){
    $('html,body').animate({
      scrollTop: $('#ELC1').offset().top
    }, 800);
    return false;
  });
  $('#jump_ART1').click(function(){
    $('html,body').animate({
      scrollTop: $('#ART1').offset().top
    }, 800);
    return false;
  });
  //分項
  $('#jump_PRG2').click(function(){
    $('html,body').animate({
      scrollTop: $('#PRG2').offset().top
    }, 800);
    return false;
  });
  $('#jump_ELC2').click(function(){
    $('html,body').animate({
      scrollTop: $('#ELC2').offset().top
    }, 800);
    return false;
  });
  $('#jump_ART2').click(function(){
    $('html,body').animate({
      scrollTop: $('#ART2').offset().top
    }, 800);
    return false;
  });
});
