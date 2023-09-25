$("#alummich").click(function () {
    if ($(window).width() > 600) {
        $("#m-alummich").removeClass("hidden");
        console.log("hi")
        $(".container").removeClass("hidden");
        $("#cancel-alummich").click(function () {
            $("#m-alummich").addClass("hidden");
            $(".container").addClass("hidden");
        });
    } else {
        if (!$("#m-alummich").hasClass("hidden")) {
            $("#m-alummich").addClass("hidden");
        }
    }

});
$(window).resize(function () {
    if ($(window).width() < 600) {
        $("#m-alummich").addClass("hidden");
        $(".container").addClass("hidden");
    }
});

$("#alumlogan").click(function () {
    if ($(window).width() > 600) {
        $("#m-alumlogan").removeClass("hidden");
        $(".container").removeClass("hidden");
        $("#cancel-alumlogan").click(function () {
            $("#m-alumlogan").addClass("hidden");
            $(".container").addClass("hidden");
        });
    } else {
        if (!$("#m-alumlogan").hasClass("hidden")) {
            $("#m-alumlogan").addClass("hidden");
        }
    }
});

$(window).resize(function () {
    if ($(window).width() < 600) {
        $("#m-alumlogan").addClass("hidden");
        $(".container").addClass("hidden");
    }
});

$("#alumbeth").click(function () {
    if ($(window).width() > 600) {
        $("#m-alumbeth").removeClass("hidden");
        $(".container").removeClass("hidden");
        $("#cancel-alumbeth").click(function () {
            $("#m-alumbeth").addClass("hidden");
            $(".container").addClass("hidden");
        });
    } else {
        if (!$("#m-alumbeth").hasClass("hidden")) {
            $("#m-alumbeth").addClass("hidden");
        }
    }
});
$(window).resize(function () {
    if ($(window).width() < 600) {
        $("#m-alumbeth").addClass("hidden");
        $(".container").addClass("hidden");
    }
});

$("#alumamrit").click(function () {
    if ($(window).width() > 600) {
        $("#m-alumamrit").removeClass("hidden");
        $(".container").removeClass("hidden");
        $("#cancel-alumamrit").click(function () {
            $("#m-alumamrit").addClass("hidden");
            $(".container").addClass("hidden");
        });
    } else {
        if (!$("#m-alumamrit").hasClass("hidden")) {
            $("#m-alumamrit").addClass("hidden");
        }
    }
});
$(window).resize(function () {
    if ($(window).width() < 600) {
        $("#m-alumamrit").addClass("hidden");
        $(".container").addClass("hidden");
    }
});

$("#alumedi").click(function () {
    if ($(window).width() > 600) {
        $("#m-alumedi").removeClass("hidden");
        $(".container").removeClass("hidden");
        $("#cancel-alumedi").click(function () {
            $("#m-alumedi").addClass("hidden");
            $(".container").addClass("hidden");
        });
    } else {
        if (!$("#m-alumedi").hasClass("hidden")) {
            $("#m-alumedi").addClass("hidden");
        }
    }
});
$(window).resize(function () {
    if ($(window).width() < 600) {
        $("#m-alumedi").addClass("hidden");
        $(".container").addClass("hidden");
    }
});


$("#alumtracy").click(function () {
    if ($(window).width() > 600) {
        $("#m-alumtracy").removeClass("hidden");
        $(".container").removeClass("hidden");
        $("#cancel-alumtracy").click(function () {
            $("#m-alumtracy").addClass("hidden");
            $(".container").addClass("hidden");
        });
    } else {
        if (!$("#m-alumtracy").hasClass("hidden")) {
            $("#m-alumtracy").addClass("hidden");
        }
    }
});
$(window).resize(function () {
    if ($(window).width() < 600) {
        $("#m-alumtracy").addClass("hidden");
        $(".container").addClass("hidden");
    }
});
