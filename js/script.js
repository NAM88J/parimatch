var blk = false;
$('.linkaktion').on('click', function(){
    if(blk) return false;
    if($('.linkaktion').hasClass('firsttap')) {
        $(this).removeClass('firsttap').addClass('secondtap');
        $('.wheel_circle').css('transform', 'rotate(-1012.5deg)');
        $('.content_des-attempt span').html('1');
        setTimeout(function(){
            $('.modal_bg').fadeIn();
        },4500);

    } else {
        $('.modal_bg').fadeOut();
        setTimeout(function(){
            $(this).removeClass('secondtap');
            $('.wheel_circle').css('transform', 'rotate(-2137.5deg)');
            $('.content_des-attempt span, .modal_windows-des span').html('0');
            $('.modal_windows-sum').html('500$ + 20FS');
        },200);
        setTimeout(function(){
            $('.modal_bg').fadeIn();
        },4700);
    }
    blk = true;
    setTimeout(function(){
        blk = false;
    },5000);
});

$('.close').on('click', function(){
    $('.modal_bg').fadeOut();
});
