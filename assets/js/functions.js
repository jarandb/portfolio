var frontpage = ".landing, .portfolio, .about, .contact, footer";

$(".modal").hide();

$(".open-modal").click(function(){
  $(frontpage).hide();
  $(".modal").show(500);

});

$(".exit-modal, #home-modal").click(function (){
  $(".modal").hide();
  $(frontpage).show(500);
});

$("#about-modal, #port-modal, #contact-modal").click(function (){
  $(".modal").hide("fast");
  $(frontpage).show(500);
});
