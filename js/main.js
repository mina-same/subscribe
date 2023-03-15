$(document).ready(function() {
  $('.subscribe-btn , .sub-btn').on("click" , function (){
    $(".popup").toggleClass("active");
  });
  $('.close').on("click" , function (){
    $(".popup").removeClass("active");
  });
});