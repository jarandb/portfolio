var frontpage = ".landing, .portfolio, .about, .contact, footer";
var sonic = "fast"

$(".modal").hide();

$(".open-modal").click(function(){
  $(frontpage).fadeOut(sonic);
  $(".modal").fadeIn(sonic);

});

$(".exit-modal, #home-modal").click(function (){
  $(".modal").fadeOut(sonic);
  $(frontpage).fadeIn(sonic);
});

$("#about-modal, #port-modal, #contact-modal").click(function (){
  $(".modal").fadeOut(sonic);
  $(frontpage).fadeIn(sonic);
});
