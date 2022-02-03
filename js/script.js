$(".banner-slider").slick({
    fade: true,
    autoplay: false,
    prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-circle-right next"></i>',
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    cssEase: 'linear'
})
$('.venobox').venobox({
    border:'10px',

});

$(".service-slider").slick({
    vertical: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            dots:false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            arrows:true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$(".testi-slider").slick({
    vertical: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".text-slider",
    prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
})

$(".text-slider").slick({
    slidesToShow: 1,
    asNavFor:".testi-slider",
    arrows: false
})

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(".market-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
})