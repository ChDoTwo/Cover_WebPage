/* 반응형 */
$(window).on('resize',function(e){ // 화면이 resize 되면 wheel_e 함수 실행
    resize_e(e);
});

function resize_e(e) {
    var win_w = $(window).width(); // 현재 window의 width값 계산

    if(win_w > 768) { // width값이 768px 이상일때만 작동
        /* 첫 화면 세팅 */
        var welcome = setting($('#welcome'));
        var sandwich_img = setting($('#sandwich_img'));

        function setting(e) {
        
            $(e).find('.slide').each(function(index,obj){
                var $index = index;

                $(e).css('height',($index+1)+'00vh'); // 각 sticky section들 높이 설정 - slide 한개당 100vh
            })
            $(e).find('.slide').eq(0).addClass('enabled'); // 각 slide 첫번째 enabled 설정
        };
    }else {

    }
}

/* wheel event 강제 실행 */
$(window).trigger('resize'); // 첫 실행하면 wheel_event 실행