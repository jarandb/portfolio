$( document ).ready(function() {

  // $(".logo").on("click"),function{
  //   $(".landing").removeClass("hidden");
  // };

  $("#about").on("click",function(){
    $(".landing").addClass("hidden");
    $(".about").removeClass("hidden");
  });
});
