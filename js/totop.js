$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#toTop").addClass("show") : $("#toTop").removeClass("show");
});
$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 500);
    return false;
});
