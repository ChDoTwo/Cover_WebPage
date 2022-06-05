/* 로딩창 */

setTimeout(function(){
  $('#Roading').hide();
},1500);

/* 배너 */
var swiper_01 = new Swiper(".banner",{
    loop: true,
    navigation: {
      nextEl: ".banner .swiper-button-next",
      prevEl: ".banner .swiper-button-prev",
    },
});

/* testimonials 슬라이드 버튼 클릭시 */
$('.testimonials .slide_btn').on('click','span',function(){

  var btn_i = $(this).index();

  if (btn_i == 0){
    $('.testimonials .container').animate({marginLeft: '0'},1000);
  } else if (btn_i == 1) {
    $('.testimonials .container').animate({marginLeft: '-100%'},1000);
  }

  $('.testimonials .slide_btn > span').removeClass('selected');
  $(this).addClass('selected');
});