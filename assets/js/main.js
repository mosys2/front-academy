
$('.hamber').click(function () {
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});
$('.close-menu').click(function () {
    $(this).toggleClass("click");
    $('.sidebar').removeClass("show");
});
$('.feat-btn').click(function () {
    $('nav ul .feat-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});
$('.serv-btn').click(function () {
    $('nav ul .serv-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
});
$('nav ul li').click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});

//category menu
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}

$(document).ready(function () {
    $('.root > span').click(function () {
        var $this = $(this);
        $this.siblings('.nested').slideToggle();
        $this.addClass('caret-down');
        $this.parent().siblings('.root').children('.nested').slideUp();
        $this.parent().siblings('.root').children('span').removeClass('caret-down');
    });
});





document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
                    // hide every submenu as well
                    everysubmenu.style.display = 'none';
                });
            })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
            element.addEventListener('click', function (e) {

                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('submenu')) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();
                    console.log(nextEl);
                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }

                }
            });
        })
    }
    // end if innerWidth
});
// DOMContentLoaded  end

//categury
$(document).ready(function () {
    $(".main-cat").hover(function () {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(this).children(".sub-cat").stop().slideDown(300);
        } else {
            $(this).children(".sub-cat").stop().slideUp(300);
        }
    });
});


$('.slider-blog').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    autoplay: true,

    // dots: true,
    // infinite: true,
    rtl: true,
    // dot: true,

    // slidesToShow: 4,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 0,
    // speed: 4000,
    // easing: 'linear',
    // initialSlide: 1,
    // waitForAnimate: false,

    // pauseOnFocus: false,
    // pauseOnHover: false,
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


// index banner
if ($('.index-banner').length) {
    const indexBannerTime = 3000
    const textWrapperLength = $('.index-banner .text-wrapper').length
    let activeLength = 1
    activeLength = activeWrapper(activeLength, textWrapperLength)
    setInterval(() => {
        activeLength = activeWrapper(activeLength, textWrapperLength)
    }, indexBannerTime)
    // const indexBannerTime = 3000
    // setActiveIndexBanner();
    // setInterval(() => {
    //     $('.index-banner .text.active').removeClass('active')
    //
    //     setActiveIndexBanner();
    // }, indexBannerTime)
}

if ($('.index-timeline').length) {
    $('.indexTimelineSlider').owlCarousel({
        rtl: true,
        items: 1,
        loop: true,
        margin: 5,
        nav: true,
        dots: true,
        dotsData: true,
        navText: [
            "<span class='icon icon-angle-right'></span>",
            "<span class='icon icon-angle-left'></span>"
        ],
    })
    $('.indexTimelineSlider .owl-dot').on('click', function () {
        $('.indexTimelineSlider').trigger('to.owl.carousel', [$(this).index(), 300]);
        $('.owl-dot').removeClass('active');
        $(this).addClass('active');
    })
    // $('.indexTimelineSlider').on('changed.owl.carousel', function () {
    //     const scrollLeft =$('.indexTimelineSlider .owl-dots').scrollLeft()
    //     const activeLeft = $('.indexTimelineSlider .owl-dot.active').position().left
    //     $('.indexTimelineSlider .owl-dots').scrollLeft( activeLeft )
    // })
}

if ($(window).innerWidth() < 992) {
    $('.sidebar-accordion').detach().appendTo('.content-wrapper')
}

if ($('.subAboutUsSlider').length) {
    const mySlider = new Swiper('.subAboutUsSlider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        paddingBottom: 50,
        autoplay: {
            delay: 4000,
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1400: {
                slidesPerView: 4
            },
        }
    });

    if ($(window).innerWidth() < 768) {
        setFirstSwiperAnimationMobile()
    } else if ($(window).innerWidth() < 1400) {
        setFirstSwiperAnimationTablet()
    } else {
        setFirstSwiperAnimationDesktop()
    }

    mySlider.forEach(slider => {
        if ($(window).innerWidth() < 768) {
            slider.on('slideChange', function () {
                setSwiperAnimationMobile()
            })
        } else if ($(window).innerWidth() < 1400) {
            slider.on('slideChange', function () {
                setSwiperAnimationTablet()
            })
        } else {
            slider.on('slideChange', function () {
                setSwiperAnimationDesktop()
            })
        }
    })
    // mySlider[0]
    /*$('.subAboutUsSlider').slick({
        rtl: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: true,
        arrows: false,
        fade: false,
        // centerMode: true,
        infinite: true,
    })*/
    /*$('.subAboutUsSlider').owlCarousel({
        rtl: true,
        items: 1,
        loop: true,
        margin: 15,
        nav: true,
        dots: true,
        navText: [
            "<span class='icon icon-arrow-right'></span>",
            "<span class='icon icon-arrow-left'></span>"
        ],
        responsive: {
            600: {
                items: 2
            },
            1200: {
              items: 3
            },
            1400: {
                items: 4
            }
        }
    })*/
}

// index wow initialize
if ($('.wow').length) {
    const wow = new WOW({
        mobile: false
    })
    wow.init()
}

function activeWrapper(length, max) {
    for (let i = 0; i < 3; i++) {
        if (length > max) {
            length = 1
        }
        const wrapper = $(`.index-banner .text-wrapper:nth-of-type(${length})`)
        let activeLength = wrapper.children('.text.active').index() + 1
        if (activeLength === 4) {
            activeLength = 1
        }
        wrapper.children('.text.active').removeClass('active')
        wrapper.children(`.text:nth-of-type(${activeLength + 1})`).addClass('active')
        length++;
    }
    return length;
}

// index banner helper function
function setActiveIndexBanner() {
    const activeLength = 3
    const itemLength = $('.index-banner .text').length - 2
    let arr = []

    for (let i = 0; i < activeLength; i++) {
        const random = Math.floor(Math.random() * itemLength) + 1;
        if (arr.includes(random) == true) {
            i = i - 1;
        } else {
            if (random > itemLength == false) {
                arr.push(random);
            }
        }
    }
    for (const index in arr) {
        $(`.index-banner .text#text-${arr[index]}`).addClass('active')
    }
}

function setSwiperAnimationDesktop() {
    $('.slide-after').removeClass('slide-after')
    $('.slide-edge').removeClass('slide-edge')
    $('.sub-about-us .tab-pane.active .swiper-slide-active')
        .next().next().next().next()
        .addClass('slide-edge')
        .next().addClass('slide-after')
}

function setSwiperAnimationTablet() {
    $('.slide-after').removeClass('slide-after')
    $('.slide-edge').removeClass('slide-edge')
    $('.sub-about-us .tab-pane.active .swiper-slide-active')
        .next().next()
        .addClass('slide-edge')
        .next().addClass('slide-after')
}

function setSwiperAnimationMobile() {
    $('.slide-after').removeClass('slide-after')
    $('.slide-edge').removeClass('slide-edge')
    $('.sub-about-us .tab-pane.active .swiper-slide-active')
        .next()
        .addClass('slide-edge')
        .next().addClass('slide-after')
}

function setFirstSwiperAnimationDesktop() {
    $('.swiper-slide-active')
        .next().next().next()
        .addClass('slide-edge')
        .next().addClass('slide-after')
}

function setFirstSwiperAnimationTablet() {
    $('.swiper-slide-active')
        .next().next()
        .addClass('slide-edge')
        .next().addClass('slide-after')
}

function setFirstSwiperAnimationMobile() {
    $('.swiper-slide-active')
        .next()
        .addClass('slide-edge')
        .next().addClass('slide-after')
}