$(document).ready(function(){

    $('header .BG').on('mousemove', function(e){
        let posX = e.pageX;
        let posY = e.pageY;

        $('.bg1').css({'left': -18-(posX/30), 'bottom':113-(posY/30)});
        $('.bg2').css({'left': 1370-(posX/30), 'bottom':600-(posY/30)});
        $('.bg3').css({'left': 663-(posX/30), 'bottom':801-(posY/30)});
        $('.bg4').css({'left': 1640-(posX/50), 'bottom':249-(posY/30)});
        $('.bg5').css({'left': 490-(posX/30), 'bottom':830-(posY/30)});
        $('.bg6').css({'left': 680-(posX/30), 'bottom':757-(posY/30)});
        $('.bg7').css({'left': 1485-(posX/30), 'bottom':709-(posY/30)});
        $('.bg8').css({'left': 1750-(posX/30), 'bottom':457-(posY/30)});
        $('.bg9').css({'left': 1300-(posX/30), 'bottom':850-(posY/30)});
        $('.bg10').css({'left': 1125-(posX/30), 'bottom':-126-(posY/30)});
        $('.bg11').css({'left': 1604-(posX/30), 'bottom':751-(posY/30)});
        $('.bg12').css({'left': 1480-(posX/50), 'bottom':-22-(posY/50)});
        $('.bg13').css({'left': 200-(posX/30), 'bottom':-100-(posY/30)});
        $('.bg14').css({'left': 643+(posX/30), 'bottom':-162+(posY/50)});
        $('.bg15').css({'left': 792+(posX/50), 'bottom':-189+(posY/50)});
        $('.bg16').css({'left': 941+(posX/50), 'bottom':793+(posY/50)});
        $('.bg17').css({'left': 1093+(posX/50), 'bottom':827+(posY/50)});
        $('.bg18').css({'left': 1737+(posX/50), 'bottom':454+(posY/50)});
        $('.bg19').css({'left': 1802+(posX/50), 'bottom':391+(posY/50)});
        $('.bg20').css({'left': 222+(posX/50), 'bottom':130+(posY/50)});
        $('.bg21').css({'left': 1420-(posX/30), 'bottom':793-(posY/30)});
        $('.bg22').css({'left': 885-(posX/30), 'bottom':830-(posY/30)});
        $('.bg23').css({'left': 1070-(posX/30), 'bottom':-120-(posY/30)});
        $('.bg24').css({'left': 474-(posX/30), 'bottom':0-(posY/30)});
        $('.bg25').css({'left': 1574-(posX/30), 'bottom':600-(posY/50)});
        $('.bg26').css({'left': 1220-(posX/30), 'bottom':0-(posY/30)});
        $('.bg27').css({'left': 160-(posX/50), 'bottom':445-(posY/50)});
        $('.bg28').css({'left': 1368-(posX/30), 'bottom':692-(posY/50)});
    });




    $(window).on('scroll', function(){
        let ht = $(window).height();
        let scroll = $(window).scrollTop();

        $('section').on('mousewheel', function(event,delta){
            if(delta>0){
                let prev = $(this).prev().offset().top;
                $('html,body').stop().animate({scrollTop:prev},800,"easeOutBounce");
            }else if(delta<0){
                let next = $(this).next().offset().top;
                $('html,body').stop().animate({scrollTop:next},800,"easeOutBounce");
            }
        });
    });
        
});