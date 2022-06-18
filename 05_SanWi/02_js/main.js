// /* 반응형 */
// var mHtml = $("html"); 
// page = 1;

// $(window).on('resize',function(e){ // 화면이 resize 되면 wheel_e 함수 실행
//     wheel_e(e);
// });

// $(window).on("wheel", function(e) { // wheel 작동 시 wheel_e 함수 실행
//     wheel_e(e);
// });

// /* wheel event */
// function wheel_e(e){
//     var win_w = $(window).width(); // 현재 window의 width값 계산
//     if(win_w > 768) { // width값이 768px 이상일때만 작동
//         if($(window).scrollTop() == 0){ // 최상단 일때
//             if(mHtml.is(":animated")) return; // 움직이고 있을땐 작동 x
//             if(e.originalEvent.deltaY > 0) { // 아래로 이동
//                 $('#HEADER').addClass('down');
//                 $('#store').addClass('first_scroll');
//                 $('#introduce').addClass('first_scroll');
//                 page++;
//             }
//         } 
//         var posTop = (page-1) * $(window).height();
//         mHtml.animate({scrollTop : posTop},2000);

//     }else {

//     };
// }



