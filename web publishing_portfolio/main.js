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

    //slick-slide
    $('header>.banner').slick({
        slide: 'div',
        infinite : true,  //무한 반복 옵션 
        speed : 1000, 
        arrows : true, 
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
    
    $('.section2>.sec2_art').slick({
        slide: 'div',
        infinite : true,  
        speed : 500, 
        arrows : true,  
        // dots : true,   
        autoplay : true, 
        autoplaySpeed : 3000, 
        slidesToShow : 8,
        slidesToScroll : 1,        
        pauseOnHover : false, 
        vertical:false,
        draggable : true,

        className: "center",
        centerMode:true,
        focusOnSelect:true,

        // accessibility:true,
        variableWidth: true,
        // adaptivewidth: true,
    });


    
    min={0}
    max={4}

    let state = {
      slideIndex: 0,
      updateCount: 0
    };
    let value = this.state().slideIndex();

    $(onChange).on('input', function(e){
      this.slider.slickGoTo(e.target.value)

      if ("arrows =< 0") {
        
      } else {
        
      }
    });

    // let a = $('.section2>.sec2_art').goToSlide(num);
    // // let value = slideIndex(0);
    // let handle = $( "#custom-handle" );
    // $( ".section2>.sec2_art>div" ).slider({
    //   create: function() {
    //     handle.text( $( this ).slider( "value" ) );
    //   },
    //   slide: function( event, ui ) {
    //     handle.text( ui.value );
    //   }
    // });

    $('.section4 .bag_menu').slick({
      slide: 'li',
      infinite : true,  
      speed : 500, 
      arrows : true, 
      // dots : true,   
      autoplay : false, 
      slidesToShow : 3,
      slidesToScroll : 1,        
      pauseOnHover : false, 
      vertical:false,
      draggable : false,

      className: "center",
      centerMode:true,
      focusOnSelect:true,

      // accessibility:true,
      variableWidth: true,
      // adaptivewidth: true,
      // asNavFor: '.section4 .bags_info', //한 화면에 보여줄 아이템수
    });

    $('.section4 .bag_menu li').on('click', function(e){
      e.preventDefault();

    });
    // $(".section4 .bags_info").slick({
    //   autoplay: false,
    //   speed: 1000,
    //   arrows: false,
    //   asNavFor: ".section4 .bag_menu"
    // });

    $('.section4 .bags_info .bag_banner').slick({
      slide: 'div',
      infinite : true,  
      speed : 500, 
      arrows : false,  
      dots : true,   
      autoplay : true, 
      autoplaySpeed : 3000,
      slidesToShow : 1,
      slidesToScroll : 1,
      pauseOnHover : false, 
      vertical:false,
      draggable : false,
    });
});

