/* main */
var main_bg = 1;
var isStop = false;
function bg_change() { 
    $('#main_season > span').removeClass('on');
    $('#main').animate({opacity: '0.5'},500,function(){
        $('#main').css('backgroundImage','url("/00_image/00_main/bg_0'+main_bg+'.jpg")');
        $('#main').animate({opacity:'1'},1500);
        $('#main_season > span').eq((main_bg-1)).addClass('on');
    });
};
var interval = setInterval(function(){
    if (!isStop){
        main_bg++;
        if(main_bg <= 4){
            bg_change();
            
        }else {
            main_bg = 1;
            bg_change();
        }
    }
},5000);


/* Spring */
var spring_swiper = new Swiper('#spring .swiper-container',{
    grabCursor: true,
    slidePerView: 1,
    spaceBetween: 50,
    pagination: {
        el: '#spring .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
            return '<span class="'+className+'"><img src="/00_image/01_spring/slide_0'+(index+1)+'.jpg" alt="" /></span>';
        },
    },
    on:{
        slideChange: function(){
            $('#spring .slide_txt').removeClass('visible');
            $('#spring .slide_txt').eq(this.realIndex).addClass('visible');
        },
        // slidePrevTransitionStart: function(){
        //     // $('#spring .swiper-thumbnail li').css('width','6rem');

        //     $('#spring .swiper-thumbnail li:last-child').prependTo('#spring .swiper-thumbnail ul');
        //     // $('#spring .swiper-thumbnail').animate({marginLeft: '100px'},500,function(){
        //     //     $('#spring .swiper-thumbnail').css('marginLeft','0');               
        //     // });
        // },
        // slideNextTransitionStart: function(){
        //     $('#spring .swiper-thumbnail li:first-child').appendTo('#spring .swiper-thumbnail ul');
        // },
    },
});

/* Summer */
var summer_swiper = new Swiper('#summer .swiper-container',{
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
        1200: {
            spaceBetween: 100,
        },
        768: {
            spaceBetween: 50,
        },
        640: {
            spaceBetween: 100
        }
    },
    on:{
        slideChange: function(){
            $('#summer .slide_txt').removeClass('visible');
            $('#summer .slide_txt').eq(this.realIndex).addClass('visible');
        },
    },
});

/* Fall */
var fall_swiper = new Swiper('#fall .swiper-container',{
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
        nextEl: "#fall .swiper-button-next",
        prevEl: "#fall .swiper-button-prev",
    },
    on:{
        slideChange: function(){
            $('#fall .slide_txt').removeClass('visible');
            $('#fall .slide_txt').eq(this.realIndex).addClass('visible');
        },
    },
});

/* Winter */
var winter_swiper = new Swiper('#winter .swiper-container',{
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    on:{
        slideChange: function(){
            $('#winter .slide_txt').removeClass('visible');
            $('#winter .slide_txt').eq(this.realIndex).addClass('visible');
        },
    },
});


/* season 트리거 애니메이션 효과 */
// $(window).on('scroll',function(){
//     var win_h = $(window).height();
//     var win_t = $(this).scrollTop();

//     var spring_t = $('#spring').offset().top;
//     var spring_h = $('#spring').outerHeight();

//     var summer_t = $('#summer').offset().top;
//     var summer_h = $('#summer').outerHeight();

//     var fall_t = $('#fall').offset().top;
//     var fall_h = $('#fall').outerHeight();

//     var winter_t = $('#winter').offset().top;
//     var winter_h = $('#winter').outerHeight();

//     if(win_t > (spring_t + spring_h - win_h)){
//         $('#spring .box').eq(1).animate({marginRight:'100px'},1000,function(){
//             $('#spring .box').eq(1).css('marginRight','0');
//             $(window).off('scroll');
//         });
//     }


// });
