$(function(){
    mobileMenu = $('.mobile-menu');
    // alert('file loaded');
    mobileMenu.click(function(){
        $(this).find('ul').slideToggle();
        // alert('file loaded');
    });
})