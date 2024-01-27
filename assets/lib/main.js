$(function () {

    // mobile device check
    window.mobileAndTabletCheck = function () {
        let check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };
    let isMobile = window.mobileAndTabletCheck();

    // tooltip initialize
    $('[data-bs-toggle="tooltip"]').tooltip()

    // header on mobile add fixed class
    if ($(window).innerWidth() < 992) {
        const headerHeight = $('#main-header').innerHeight()

        $('main').css('marginTop', headerHeight)

        $(window).on('scroll', function () {
            const scrollTop = $(this).scrollTop()
            if (scrollTop > 15) {
                $('#main-header').addClass('fixed')
            } else {
                $('#main-header').removeClass('fixed')
            }
        })
    }

    $('.nav-trigger').click(function () {
        if (!$('.sidebar-accordion').hasClass('active')) {
            $('.sidebar-accordion').addClass('active')
        }
    })

    $('.sidebar-accordion__close').click(function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active')
        }
    })

    // header setup
    $('.svg-trigger').click(function () {
        if (!$('.primary-menu .menu-container').is(':visible')) {
            $('.primary-menu').addClass('active')
        } else {
            $('.primary-menu').removeClass('active')
        }
    })

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

    // index testimonials sliders
    if ($('.index-testimonials').length) {
        const slider1 = new Swiper('.index-testimonials__text-slider', {
            loop: true,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
            autoplay: {
                delay: 4000,
            },
        });

        const slider2 = new Swiper('.index-testimonials__slider', {
            loop: true,
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 20,
            controller: {
                control: slider1,
            },
            breakpoints: {
                576: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 4.8
                },
                992: {
                    slidesPerView: 3
                },
            }
        });

        // slider1.on('slideChange', function (event) {
        //     slider2.slideTo(event.activeIndex);
        // })
        /*$('.index-testimonials__slider').slick({
            rtl: true,
            slidesToShow: 5.2,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            autoplay: true,
            arrows: false,
            fade: false,
            centerMode: true,
            infinite: true,
            asNavFor: '.index-testimonials__text-slider',
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 4.8
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4.8
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3.5,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                    }
                },
            ]
        });
        $('.index-testimonials__text-slider').slick({
            rtl: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.index-testimonials__slider',
            dots: false,
            arrows: false,
            infinite: true,
            centerMode: false,
            focusOnSelect: true
        });*/
    }

    // index accordion setup
    if ($('.index-accordion').length) {
        const itemLength = $('.index-accordion__item').length
        const activeHeight = $('.index-accordion__content.active').innerHeight()
        $('.index-accordion__content-wrapper').css('height', activeHeight)
        $('.index-accordion__content').each(function () {
            $(this).css('position', 'absolute')
        })
        const activeBodyHeight = $('.index-accordion__item.show .body').innerHeight() + 25
        $('.index-accordion__item.show .body').css({
            'opacity': '1',
            'visibility': 'visible'
        })
        $('.index-accordion__item.show .content').css('height', activeBodyHeight)

        $('.index-accordion__item').click(function () {
            setTimeout(() => {
                $(window).scrollTop($(this).offset().top - 150)
            }, 500)
            if (!$(this).hasClass('show')) {
                $('.index-accordion__item.show')
                    .children('.content').css('height', 0)
                $('.index-accordion__item.show')
                    .removeClass('show')
                $(this).addClass('show')
                const bodyHeight = $(this).find('.body').innerHeight() + 25
                $(this).children('.content').css('height', bodyHeight)
                $(this).find('.body').css({
                    'opacity': '1',
                    'visibility': 'visible'
                })
                const count = $(this).data('count')
                const height = $(`.index-accordion__content[data-count=${count}]`).innerHeight()
                $('.index-accordion__content.active').removeClass('active')
                $(`.index-accordion__content[data-count=${count}]`).addClass('active')
                $('.index-accordion__content-wrapper').css('height', height)

                if ($(this).index() === itemLength) {
                    if ($('.index-accordion__wrapper .line').hasClass('active')) {
                        $('.index-accordion__wrapper .line').removeClass('active')
                    }
                    let time = 0
                    const interval = setInterval(() => {
                        $('.index-accordion__wrapper .line').css('height', $(this).position().top)
                        time += 1
                        if (time >= 100) {
                            clearInterval(interval)
                            $('.index-accordion__wrapper .line').addClass('active')
                        }
                    }, 1)
                } else {
                    $('.index-accordion__wrapper .line').css({
                        'height': 'calc(100% - 40px)',
                    })
                }
            }
            if ($(window).innerWidth() < 992) {
                setTimeout(() => {
                    $(window).scrollTop($(this).offset().top - 100)
                }, 350)
            }
        })
    }

    // index trend setup
    if ($('.index-trend').length) {
        setTimeout(() => {
            const activeHeight = $('.index-trend__content.active').innerHeight()
            const siblingsHeight = $('.index-trend__badge-wrapper').innerHeight()
            if ($(window).innerWidth() < 992) {
                $('.index-trend__wrapper').css('height', activeHeight + siblingsHeight + 20)
            } else {
                $('.index-trend__content-wrapper').css('height', activeHeight)
            }
            $('.index-trend__content').each(function () {
                $(this).css('position', 'absolute')
            })
        }, 10)

        $('.index-trend__badge').click(function () {
            if (!$(this).hasClass('show')) {
                const count = $(this).data('count')
                $('.index-trend__badge.show').removeClass('show')
                $(this).addClass('show')

                const target = $(`.index-trend__content[data-count=${count}]`)
                const height = target.innerHeight()
                if ($(window).innerWidth() < 992) {
                    $('.index-trend__wrapper').css('height', height + siblingsHeight + 20)
                } else {
                    $('.index-trend__content-wrapper').css('height', height)
                }
                $('.index-trend__content.active').removeClass('active')
                target.addClass('active')
            }
        })
        $('.index-trend__content .nav-link').click(function () {
            if ($(window).innerWidth() < 992) {
                setTimeout(() => {
                    $(window).scrollTop($(this).offset().top - 80)
                }, 350)
            }
        })
    }

    // index wow initialize
    if ($('.wow').length) {
        const wow = new WOW({
            mobile: false
        })
        wow.init()
    }

    // footer icon click
    $('.footer__icon').click(function () {
        $(window).scrollTop(0)
    })

    // header nav setup
    /*if ( $('.header-nav').length ) {
        const relatedSites = $('.header-nav')
        $('.header-items .nav-trigger').click(function () {
            if ( !relatedSites.hasClass('active') ) {
                relatedSites.addClass('active')
                $('html').css({
                    "height": "100vh",
                    "overflow": "hidden"
                })
            }
        })
        $('.header-nav-overlay').click(function () {
            relatedSites.removeClass('active')
            $('html').css({
                "height": "auto",
                "overflow": "auto"
            })
        })
        $('.header-nav-close').click(function () {
            relatedSites.removeClass('active')
            $('html').css({
                "height": "auto",
                "overflow": "auto"
            })
        })
    }*/

    // page books slider setup
    if ($('.page-books').length) {
        $('.page-books-slider').owlCarousel({
            rtl: true,
            items: 1,
            dots: true,
            nav: true,
            loop: true,
            navText: [
                '<i class="icon-arrow-right"></i>',
                '<i class="icon-arrow-left"></i>'
            ],
            responsive: {
                768: {
                    items: 1.15
                }
            }
        })

        $(`.page-books-slider .owl-item:nth-child(${$('.page-books-slider .owl-item.active').index() + 2})`).addClass('next-slider')

        $('.page-books-slider').on('changed.owl.carousel', function (event) {
            $('.next-slider').removeClass('next-slider')
            $(`.page-books-slider .owl-item:nth-child(${event.item.index + 2})`).addClass('next-slider')
        })
    }

})

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