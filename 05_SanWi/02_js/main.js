$(window).on('resize',function(e){ // 화면이 resize 되면 resize_e 함수 실행
    resize_e(e);
});
$(window).trigger('resize'); // resize event 강제 실행


$(window).on('scroll',function(e){ // 
    scroll_e(e);
});


// 반응형
function resize_e(e) {
    var win_w = $(window).width(); // 현재 window의 width값 계산

    if(win_w > 768) {
        /* 첫 화면 세팅 */
        var welcome = find_index('#welcome', '.slide'); // index값 추출
        var sandwich_img = find_index('#sandwich_img', '.slide'); // index값 추출
        reset('pc','#welcome', welcome);
        reset('pc','#sandwich_img', sandwich_img);
    } else {       
        /* 첫 화면 세팅 */
        var welcome = find_index('#welcome', '.slide'); // index값 추출
        var sandwich_img = find_index('#sandwich_img', '.slide'); // index값 추출
        reset('mobile', '#welcome', welcome);
        reset('mobile', '#sandwich_img', sandwich_img);
    }
}

// scroll event
function scroll_e(e){
    // window 위치 및 크기
    var win_w = $(window).innerWidth();
    var win_h = $(window).innerHeight(); // window height
    var win_t = $(window).scrollTop(); // window scroll 위치

    // 요소들 위치
    var welcome_h = $('#welcome').height(); // welcome height
    var sandwich_h = $('#sandwich_img').height(); // sandwich_img height
    var sandwich_t = $('#sandwich_img').offset().top; // sandwich_img 요소 가장 위치 (위)

    // 그 외
    var sandwich_i = find_index('#sandwich_img', '.slide'); // index값 추출

    if(win_w > 768){ // pc버젼만 적용

        if(win_t <= (win_h / 2)){ // welcome 첫번째 요소 on
            $('#welcome .slide').eq(0).addClass('on');
            $('#welcome .slide').eq(1).removeClass('on');
        }else if (win_t >= (win_h / 2)){ // welcome 두번째 요소 on
            $('#welcome .slide').eq(0).removeClass('on');
            $('#welcome .slide').eq(1).addClass('on');
        }


    }else {

    }

}

// 스크롤 제한 on 
function scroll_on(name) {
    $(name).on('scroll touchmove mousewheel',function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
}

// 스크롤 제한 off
function scroll_off(name) {
    $(name).off('scroll touchmove mousewheel');
}

// index 총 개수 찾기
function find_index(parent_id, find_class) {
    var $index;
    $(parent_id).find(find_class).each(function(index,obj){
        $index = index; 
    });   
    return $index; 
};

// play btn click event
$('.play-btn').on('click',function(){ 
    var i = 0;
    scroll_on('#sandwich_img'); // scroll 제한
    $(this).hide(100);
    $(this).siblings('.slide-container').css('opacity','1');
    
    var interval = setInterval(function(){
        $('#sandwich_img .slide').eq(i).fadeOut();
        i++;
        if(i == $('#sandwich_img .slide').length){ // 마지막 slide
            $('.play-btn').show(100);
            $('.play-btn').siblings('.slide-container').css('opacity','0.5');
            $('#sandwich_img .slide').hide().eq(0).show(); // 첫 slide 썸네일
            scroll_off('#sandwich_img'); // scroll 제한 해제
            clearInterval(interval); // setinterval 종료
        }
        $('#sandwich_img .slide').eq(i).fadeIn();
        
    },1500);
});

/* reset */
function reset(device, parent_id ,slide_index){
    if(device == 'pc'){
        $(parent_id).css('height',(slide_index+1)+'00vh'); // 각 sticky section들 높이 설정 - slide 한개당 100vh
        $('.play-btn').siblings('.slide-container').css('opacity','1');

        $(parent_id).find('.slide').removeClass('on')
        $(parent_id).find('.slide').eq(0).addClass('on'); // slide 첫번째만 opacity On 
    } else if(device == 'mobile') {
        $('.sticky-container').css('height','auto'); // height auto 설정
        $('.play-btn').siblings('.slide-container').css('opacity','0.5');

        $('.slide').addClass('on'); // 모든 slide opacity On
        $('#sandwich_img .slide').hide().eq(0).show(); // 첫 slide 썸네일
    }
}

