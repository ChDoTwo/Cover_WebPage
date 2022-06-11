/* header sub_menu */
$('.main_menu > li').hover(function(){
    $(this).children('.sub_menu').stop().slideDown();
},function(){
    $(this).children('.sub_menu').stop().slideUp();
});