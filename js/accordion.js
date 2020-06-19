jQuery(function ($) {
    $(".accordion_content:not(:first-of-type)").css("display", "none");
    // 矢印の向きを変えておく
    $(".accordion_title:first-of-type").addClass("open");

    $('.accordion_title').on('click', function () {
        /*クリックでコンテンツを開閉*/
        $(this).next().slideToggle(200);
        /*矢印の向きを変更*/
        $(this).toggleClass('open');
    });

});
