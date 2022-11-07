$(document).ready(function(){

$('.header').height($(window).height());
$(window).resize(function(){
    $('.header').height($(window).height());
    $('.bxslider').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2)
    });

});

$('.links ul li a').on('click',function(){
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    $('html,body').animate({
        scrollTop: $( '.' + $(this).data('value')).offset().top
    },300)
});
//adjust bxslider list item center
$('.bxslider').each(function () {
    $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2)
});
//trigger bxslider
$('.bxslider').bxSlider({
    pager:false,
    speed:600
});
// building slider

(function autoSlider () {
    $('.slider .active').each(function () {
if (!$(this).is(':last-child')){
    $(this).delay(3000).fadeOut(1000, function() {
        $(this).removeClass('active').next().addClass('active').fadeIn(1000);
        autoSlider();
    });
}else {
    $(this).delay(3000).fadeOut(1000, function() {
$(this).removeClass('active');
$('.slider div').eq(0).addClass('active').fadeIn();
autoSlider();
    })
}
    })

}());

$('#Container').mixItUp();

$('.Portfolio ul li').click(function() {
    $(this).addClass('selected').siblings().removeClass('selected');
});

$("body").niceScroll({
    cursorcolor: "#1abc9c",
    cursorwidth: "8px",
    cursorborder: "none",
    zindex: "100"

});


});