$(function () {

    $('#humberger_menu').click(function () {
        $(this).children().toggleClass("on");
        $('#sm_header_nav').slideToggle(200);
    });
});