
$("#button-hamburger").click(function() {
    if ($("#sidebar").hasClass("hidden")) {
        $("#sidebar").removeClass("hidden");
        $("#button-close").removeClass("hidden");
        $("#about-button").removeClass("hidden");
        $("#alum-button").removeClass("hidden");
    } else {
        $("#sidebar").addClass("hidden");
    }
    $("#button-hamburger").addClass("hidden");
    $("#button-close").removeClass("hidden");
})
$("#about-button").click(function() { // accordion expand
    if ($("#about-sub").hasClass("hidden")) {
      $("#about-sub").removeClass("hidden");
    } else {
      $("#about-sub").addClass("hidden");
      console.log("close accordion about")
    }
 });

 $("#alum-button").click(function() { // accordion expand
    if ($("#alum-sub").hasClass("hidden")) {
      $("#alum-sub").removeClass("hidden");
      console.log("open accordion")
    } else {
      $("#alum-sub").addClass("hidden");
      console.log("close accordion alum")
    }
 });

$("#button-close").click(function() {
    $("#button-close").addClass("hidden");
    $("#sidebar").addClass("hidden");
    $("#button-hamburger").removeClass("hidden");
})
