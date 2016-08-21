$(function () {
    var index = 0;
    // initialize slide number tags
    var size = $(".sl_img li").length;
    for(var i = 1; i <= size; i++){
        var li = "<li>"+i+"</li>";
        $(".sl_num").append(li);
    }
    $(".sl_num li").eq(0).addClass("active");
    // manually toggle slides
    $(".sl_num li").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active");
        index = $(this).index();
        $(".sl_img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    })

    $(".left").click(moveLeft);
    $(".right").click(moveRight);

    // auto toggle slides
    var t = setInterval(moveRight,1500);

    // toggle to next slide
    function moveRight() {
        index++;
        index = index%5;
        $(".sl_num li").eq(index).addClass("active").siblings().removeClass("active");
        $(".sl_img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    }

    // toggle to previous slide
    function moveLeft() {
        index--;
        index = index%5;
        $(".sl_num li").eq(index).addClass("active").siblings().removeClass("active");
        $(".sl_img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    }

    // pause or resume timer
    $(".slider").hover(function () {
        clearInterval(t);
    },function () {
        t = setInterval(moveRight,1000);
    })


})
