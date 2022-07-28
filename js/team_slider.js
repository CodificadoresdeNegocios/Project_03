$(function(){
    // alert('loaded');
    var delay = 3000;
    var curIndex = 0;
    var amt;
    var teamScroll = $('.team-slider');
    var aboutAuthor = $('.sobre-autor');
    var scrollWrapper = $('.scroll-wrapper');
    
    

    initSlider();
    autoPlay();

   
    function initSlider(){
        var aboutAuthor = $('.sobre-autor');
        var amt = aboutAuthor.length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
       

        aboutAuthor.css('width',sizeBoxSingle+'%');
        scrollWrapper.css('width',sizeContainer+'%');

        for(var i = 0; i < amt; i++){
            if( i == 0){
                var bullets = $('.slider-bullets');
                bullets.append('<span style="background-color:rgb(170,170,170)"></span>');
            }else{
                bullets.append('<span></span>');
            }
        }
        
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == 4){
                curIndex = 0;
            }
            goToSlider(curIndex);
            // console.log('calling');
        },delay);
    }


    function goToSlider(curIndex){
        var offSetX = aboutAuthor.eq(curIndex).offset().left - scrollWrapper.offset().left;
        var bulletsSpan = $('.slider-bullets span')
        bulletsSpan.css('background-color','rgb(200,200,200)');
        bulletsSpan.eq(curIndex).css('background-color','rgb(170,170,170)')
        teamScroll.stop().animate({
            'scrollLeft':offSetX+'px'
        });
        
    }

    
    $(window).resize(function(){
        teamScroll.stop().stop().animate({
            'scrollLeft':0
        })
    })
})