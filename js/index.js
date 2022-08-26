$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $(".header").addClass("initial scrolled-on");
    } else {
        $(".header").removeClass("scrolled-on");
    }
});