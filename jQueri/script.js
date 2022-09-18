$('.carusel').slick({
    dots: true,
});
$('#menuToggle #toggleCheckbox').change(function() {
    if(this.checked) {
        $('body').css({'overflow': "hidden" })
    }
    else {
        $('body').css({'overflow': "visible" })
    }
});
$(window).scroll(function(){
    if($(this).scrollTop() > 400){
        $('#up').fadeIn();
    }else{
        $('#up').fadeOut();
    }
})
$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 600)
})