$(document).ready(function(){

    $(window).on('scroll', function(){
      let num = $(this).scrollTop();
  
      if(num>=150){
          $('nav>.main_gnb').addClass('on');
          // $('h1').addClass('on');
          // $('.gnb>li>a').addClass('on');
          // $('.gnb>li>.line').addClass('on');
      }else{
          $('nav>.main_gnb').removeClass('on');
          // $('h1').removeClass('on');
          // $('.gnb>li>a').removeClass('on');
          // $('.gnb>li>.line').removeClass('on');
      }
  });

  $('.img_S a').on('click', function(e){
    e.preventDefault();
    let main = $(this).find('img').attr('title'); 
    $('.img_B > img').attr({src:main}); 
    $('.img_B > img').css('opacity', '0').animate({opacity:1},1000);
});

    $('#Product_Info .AL_BAG .AL_bags').slick({
        slide: '.AL',
        infinite : true,  //무한 반복 옵션 
        speed : 1000, 
        arrows : true, 
        dots : false,  
        autoplay : true, 
        autoplaySpeed: 2000,
        slidesToShow : 4,
        slidesToScroll : 1,        
        pauseOnHover : true, 
        vertical:false,
        fade:false,
        draggable : true,
    });

    $('.section4 #Product_View .ViewImg').slick({
        slide: 'img',
        infinite : true,  //무한 반복 옵션 
        speed : 1000, 
        arrows : true, 
        dots : false,  
        autoplay : true, 
        autoplaySpeed: 2000,
        slidesToShow : 1,
        slidesToScroll : 1,        
        pauseOnHover : true, 
        vertical:false,
        fade:false,
        draggable : true,
    });

    $('.section5 #Product_Video .Video div:first a').on('click', function(e){
        e.preventDefault();
    
        // let video2 = $(".section3 #Product_Video .Video div:nt-child(2) a");

    let videolink1 ='https://www.youtube.com/embed/AdG0h8l7D4U?feature=player_embedded&autoplay=1' ;
    let videolink2 ='https://www.youtube.com/embed/UCmntHc1zAI?feature=player_embedded&autoplay=1';

    $('.popup').css({
        'display': 'block',
        'opacity': 0
    }).stop().animate({
        'opacity': 1
    }, 400);
    $('.popup .popup-inner .modal').find('iframe').attr('src', '');
    $('.popup .popup-inner .modal').find('iframe').attr('src', videolink1);
    $('body').css({
        'overflow': 'hidden'
    });
});


    $('#Product_Video .Video div:nth-child(2) a').on('click', function(e){
    e.preventDefault();

    let videolink2 ='https://www.youtube.com/embed/UCmntHc1zAI?feature=player_embedded&autoplay=1';

    $('.popup').css({
        'display': 'block',
        'opacity': 0
    }).stop().animate({
        'opacity': 1
    }, 400);

// var num=$(this).attr('data-slick-index');
// $('.popup .popup-inner .modal').hide();
// $('.popup .popup-inner .modal').eq(num).show();
    $('.popup .popup-inner .modal').find('iframe').attr('src', '');
    $('.popup .popup-inner .modal').find('iframe').attr('src', videolink2);
    $('body').css({
        'overflow': 'hidden'
    });
});

    $('.popup .popup-inner .modal a').on('click', function (e){
        e.preventDefault();

        $('.popup').stop().animate({
            'opacity': 0
        }, 400, function () {
            $('.popup').css({
                'display': 'none'
            });
        });

        $('.popup .popup-inner .modal').find('iframe').attr('src', '');
        $('body').css({
            'overflow': 'auto'
        });
    });


    });