$(document).ready(function(){
    $('.section3 .charArea .char_menu').slick({
        slide: 'div',
        asNavFor: '.section3 .charArea .char',
        infinite : false, 
        // speed : 1000, 
        arrows : false, 
        dots : false,  
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        // mobileFirst: true,
        autoplay : false, 
        autoplaySpeed : 5000, 
        slidesToShow : 9,
        slidesToScroll : 1,        
        pauseOnHover : true, 
        vertical:true,
        fade:false,
        draggable : true,
    });

    $('.section3 .charArea .char').slick({
        slide: 'div',
        asNavFor: '.section3 .charArea .char_menu',
        infinite : false, 
        speed : 1000, 
        arrows : false, 
        dots : false,  
        autoplay : true, 
        autoplaySpeed : 5000, 
        slidesToShow : 1,
        slidesToScroll : 1,  
        pauseOnHover : true, 
        vertical:false,
        fade:true,
        draggable : true,
    });

    $('.section4 .att2').slick({
        slide: 'div',
        infinite : true, 
        speed : 1000, 
        arrows : false, 
        dots : false,  
        autoplay : true, 
        autoplaySpeed : 5000, 
        slidesToShow : 1,
        slidesToScroll : 1,  
        pauseOnHover : true, 
        vertical:false,
        fade:true,
        draggable : true,
    });

    $('.section5 .photoArea .photo_inner').slick({
        slide: 'a',
        infinite : true, 
        speed : 1000, 
        arrows : false, 
        dots : false,  
        autoplay : true, 
        autoplaySpeed : 5000, 
        slidesToShow : 4,
        slidesToScroll : 1,  
        pauseOnHover : true, 
        draggable : true,

        responsive: [ 
            {  
                breakpoint: 1519,
                settings: {
                    slidesToShow:3 
                } 
            },
            { 
                breakpoint: 1279, 
                settings: {    
                    slidesToShow:2 
                } 
            },
            { 
                breakpoint: 1023, 
                settings: {    
                    slidesToShow:1 
                } 
            },
            { 
                breakpoint: 639, 
                settings: {    
                    slidesToShow:1 
                } 
            }
        ]
    });

          /*btn_menu */
        $('.btn_menu').on('click',function(){
            $(this).toggleClass('on');
    
            if($('.m_gnb').is(':visible')){
            $('.m_gnb').stop().slideUp();
            }else{
            $('.m_gnb').stop().slideDown();
            }
        });

        /*btn_menu */
    $('.m_gnb > li').on('click',function(e){
        e.preventDefault();
        $('.btn_menu').toggleClass('on');
        $('.m_gnb').stop().slideUp();
    });
    

});