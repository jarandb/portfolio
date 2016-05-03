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

$(function(){
  $("#slides").slidesjs({
    width: 800,
    height: 200,
    pagination: {
      active: true,
        // [boolean] Create pagination items.
        // You cannot use your own pagination. Sorry.
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    }
  });
});
