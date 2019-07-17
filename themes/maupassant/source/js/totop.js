$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $(".to-top").addClass("show") : $(".to-top").removeClass("show");
});
$(".to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 500);
    return false;
});
