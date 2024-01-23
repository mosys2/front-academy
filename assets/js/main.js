$('.slider-blog').slick({
    //dots:true,
    infinite: true,
    rtl: true,dot:true,

    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    easing: 'linear',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerPadding: '0px',
                centerMode: true,
                slidesToShow: 1,
                infinite: true,
                variableWidth: true
            }
        }
    ]
});