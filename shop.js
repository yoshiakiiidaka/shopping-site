$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

$(document).ready(function(){
  $(".navi_menu").click(function(){
    $(".navi_menu_li").slideToggle();
  });
});

$(window).load(function(){
  $(".pro_img_list img").click(function(){
    var img_src = $(this).attr("src");
    $(".main_img img").attr("src", img_src);
  });
});