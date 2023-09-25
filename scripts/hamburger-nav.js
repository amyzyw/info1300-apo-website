$("#button-hamburger").hover(function() {
    $("#bar1").addClass("active");
    $("#bar2").addClass("active");
    $("#bar3").addClass("active");
    $("#bar1").removeClass("inactive");
    $("#bar2").removeClass("inactive");
    $("#bar3").removeClass("inactive");
}, function() {
    $("#bar1").addClass("inactive");
    $("#bar2").addClass("inactive");
    $("#bar3").addClass("inactive");
    $("#bar1").removeClass("active");
    $("#bar2").removeClass("active");
    $("#bar3").removeClass("active");
});
