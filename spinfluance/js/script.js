$(window).scroll(function(){
    var slide = $(window).scrollTop();
    if(slide >=80){
        $('#header-main').addClass('header-slide')
    } 
    else{
        $('#header-main').removeClass('header-slide')
        
    }
}) 

$(document).ready(function(){
    $('.login-btn').click(function(){ 
        $('#header-main').toggleClass('open');
        $('#header-main > nav-block > li').removeClass('open-icon') 
    });
    $('.drop-icon').click(function(){ 
      $(this).parent('li').toggleClass('open-icon');
      
  }); 
        // new WOW().init(); 
}) 

  $('.it-solution-block-slider-main').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    arrows:false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, 
      
    ]

  });
  $('.latest-block-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ] 
  });

 
          