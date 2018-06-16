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
  $("#menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});



$(document).ready(function(){
  $("#categories").click(function(){
    $(".sp_categories_toggle").slideToggle();
  });
});

$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});




 
    $(document).ready(function(){

      $("#sp_navi_btn").click(function () {
        $(this).next().slideToggle();
      });

    });
