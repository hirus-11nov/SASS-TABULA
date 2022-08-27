$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $(".header").addClass("scrolled-on");
    } else {
        $(".header").removeClass("scrolled-on");
    }
});