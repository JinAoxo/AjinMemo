$(document).ready(function(){

        $('#menu').slick({
            slide: 'div',	
            infinite : false, 
            slidesToShow : 4,	
            slidesToScroll : 1,	
            speed : 100,	
            arrows : true, 	
            dots : false, 	
            autoplay : true,	
            autoplaySpeed : 10000, 	
            pauseOnHover : true,
            vertical : false,	
            draggable : true, 
        });

});