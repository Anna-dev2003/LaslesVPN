$('.modal-background').on('click', function(e){
    if($(e.target).closest('.modal-window').length ==0)
    $(this).fadeOut()
})
$('.close').on('click', function(){
    $(this).parents('.modal-background').fadeOut();
})
$('.button1').on('click', function(){
    $('.modal-background').fadeIn()
})