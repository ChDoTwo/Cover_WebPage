/* 반응형 */
$(window).on('resize',function(e){ // 화면이 resize 되면 wheel_e 함수 실행
    resize_e(e);
}).resize();

$(window).on('scroll',function(e){ // 화면이 resize 되면 wheel_e 함수 실행
    resize_e(e);
});

function resize_e(e) {
    var win_w = $(window).innerWidth(); // 현재 window의 width값 계산

    if(win_w > 768) { // pc
        /* 첫 화면 세팅 */
        var welcome = find_index('#welcome', '.slide', 1); // index값 추출 및 height 설정
        var sandwich_img = find_index('#sandwich_img', '.slide', 1); // index값 추출 및 height 설정

    }else { // 모바일
        /* 첫 화면 세팅 height 설정 해지 */
        var welcome = find_index('#welcome', '.slide', 0); // index값 추출 및 height 설정
        var sandwich_img = find_index('#sandwich_img', '.slide', 0); // index값 추출 및 height 설정

        $('#sandwich_img .slide').hide().eq(0).show(); // 첫 slide 썸네일
        $('.play-btn').on('click',function(){ // play 버튼 클릭시
            var i = 0;
            $(this).hide(100);
            $(this).siblings('.slide-container').css('opacity','1');
            
            var interval = setInterval(function(){
                $('#sandwich_img .slide').eq(i).fadeOut();
                i++;
                if(i == $('#sandwich_img .slide').length){
                    $('.play-btn').show(100);
                    $('.play-btn').siblings('.slide-container').css('opacity','0.5');
                    $('#sandwich_img .slide').hide().eq(0).show(); // 첫 slide 썸네일
                    clearInterval(interval);
                }
                $('#sandwich_img .slide').eq(i).fadeIn();
                
            },1500);
        });

        

    }
}

// // 스크롤 제한 on 
// function scroll_on(name) {
//     $(name).on('scroll touchmove mousewheel',function(e){
//         e.preventDefault();
//         e.stopPropagation();
//         return false;
//     });
// }

// // 스크롤 제한 off
// function scroll_off(name) {
//     $(name).off('scroll touchmove mousewheel');
// }

// index 총 개수 찾기
function find_index(parent_id, find_class, height_opt) {
        
    var $index;
    $(parent_id).find(find_class).each(function(index,obj){
        $index = index;

        if(height_opt == 1){ // pc
            $(parent_id).css('height',($index+1)+'00vh'); // 각 sticky section들 높이 설정 - slide 한개당 100vh
            $(parent_id).find(find_class).eq(0).addClass('enabled'); // 각 slide 첫번째 enabled 설정
        }else { // mobile
            $(parent_id).css('height','auto'); // height auto 설정
            $(parent_id).find(find_class).removeClass('enabled'); // 각 slide enabled 설정 해지 
        }   
    });   

    return $index;
};

/* wheel event 강제 실행 */
$(window).trigger('resize'); // 첫 실행하면 이벤트 실행
