
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
//nav tabs
$(".tab-handler").on('click', function () {
    window.scrollBy(0, 1);
})


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
    waitForAnimate: false,

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
//college 
jQuery(document).ready(function ($) {
    var timelines = $('.cd-horizontal-timeline'),
        eventsMinDistance = 110;

    (timelines.length > 0) && initTimeline(timelines);

    function initTimeline(timelines) {
        timelines.each(function () {
            var timeline = $(this),
                timelineComponents = {};
            //cache timeline components 
            timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
            timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
            timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
            timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
            timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
            timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
            timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
            timelineComponents['eventsContent'] = timeline.children('.events-content');

            //assign a left postion to the single events along the timeline
            setDatePosition(timelineComponents, eventsMinDistance);
            //assign a width to the timeline
            var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
            //the timeline has been initialize - show it
            timeline.addClass('loaded');

            //detect click on the next arrow
            timelineComponents['timelineNavigation'].on('click', '.next', function (event) {
                event.preventDefault();
                updateSlide(timelineComponents, timelineTotWidth, 'next');
            });
            //detect click on the prev arrow
            timelineComponents['timelineNavigation'].on('click', '.prev', function (event) {
                event.preventDefault();
                updateSlide(timelineComponents, timelineTotWidth, 'prev');
            });
            //detect click on the a single event - show new event content
            timelineComponents['eventsWrapper'].on('click', 'a', function (event) {
                event.preventDefault();
                timelineComponents['timelineEvents'].removeClass('selected');
                $(this).addClass('selected');
                updateOlderEvents($(this));
                updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
                updateVisibleContent($(this), timelineComponents['eventsContent']);
            });

            //on swipe, show next/prev event content
            timelineComponents['eventsContent'].on('swipeleft', function () {
                var mq = checkMQ();
                (mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'next');
            });
            timelineComponents['eventsContent'].on('swiperight', function () {
                var mq = checkMQ();
                (mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'prev');
            });

            //keyboard navigation
            $(document).keyup(function (event) {
                if (event.which == '37' && elementInViewport(timeline.get(0))) {
                    showNewContent(timelineComponents, timelineTotWidth, 'prev');
                } else if (event.which == '39' && elementInViewport(timeline.get(0))) {
                    showNewContent(timelineComponents, timelineTotWidth, 'next');
                }
            });
        });
    }

    function updateSlide(timelineComponents, timelineTotWidth, string) {
        //retrieve translateX value of timelineComponents['eventsWrapper']
        var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
            wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
        //translate the timeline to the left('next')/right('prev') 
        (string == 'next')
            ? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
            : translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
    }

    function showNewContent(timelineComponents, timelineTotWidth, string) {
        //go from one event to the next/previous one
        var visibleContent = timelineComponents['eventsContent'].find('.selected'),
            newContent = (string == 'next') ? visibleContent.next() : visibleContent.prev();

        if (newContent.length > 0) { //if there's a next/prev event - show it
            var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
                newEvent = (string == 'next') ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');

            updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
            updateVisibleContent(newEvent, timelineComponents['eventsContent']);
            newEvent.addClass('selected');
            selectedDate.removeClass('selected');
            updateOlderEvents(newEvent);
            updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
        }
    }

    function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
        //translate timeline to the left/right according to the position of the selected event
        var eventStyle = window.getComputedStyle(event.get(0), null),
            eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
            timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
            timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
        var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

        if ((string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate)) {
            translateTimeline(timelineComponents, - eventLeft + timelineWidth / 2, timelineWidth - timelineTotWidth);
        }
    }

    function translateTimeline(timelineComponents, value, totWidth) {
        var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
        value = (value > 0) ? 0 : value; //only negative translate value
        value = (!(typeof totWidth === 'undefined') && value < totWidth) ? totWidth : value; //do not translate more than timeline width
        setTransformValue(eventsWrapper, 'translateX', value + 'px');
        //update navigation arrows visibility
        (value == 0) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
        (value == totWidth) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
    }

    function updateFilling(selectedEvent, filling, totWidth) {
        //change .filling-line length according to the selected event
        var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
            eventLeft = eventStyle.getPropertyValue("left"),
            eventWidth = eventStyle.getPropertyValue("width");
        eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
        var scaleValue = eventLeft / totWidth;
        setTransformValue(filling.get(0), 'scaleX', scaleValue);
    }

    function setDatePosition(timelineComponents, min) {
        for (i = 0; i < timelineComponents['timelineDates'].length; i++) {
            var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
                distanceNorm = Math.round(distance / timelineComponents['eventsMinLapse']) + 2;
            timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm * min + 'px');
        }
    }

    function setTimelineWidth(timelineComponents, width) {
        var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]),
            timeSpanNorm = timeSpan / timelineComponents['eventsMinLapse'],
            timeSpanNorm = Math.round(timeSpanNorm) + 4,
            totalWidth = timeSpanNorm * width;
        timelineComponents['eventsWrapper'].css('width', totalWidth + 'px');
        updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);

        return totalWidth;
    }

    function updateVisibleContent(event, eventsContent) {
        var eventDate = event.data('date'),
            visibleContent = eventsContent.find('.selected'),
            selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'),
            selectedContentHeight = selectedContent.height();

        if (selectedContent.index() > visibleContent.index()) {
            var classEnetering = 'selected enter-right',
                classLeaving = 'leave-left';
        } else {
            var classEnetering = 'selected enter-left',
                classLeaving = 'leave-right';
        }

        selectedContent.attr('class', classEnetering);
        visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
            visibleContent.removeClass('leave-right leave-left');
            selectedContent.removeClass('enter-left enter-right');
        });
        eventsContent.css('height', selectedContentHeight + 'px');
    }

    function updateOlderEvents(event) {
        event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
    }

    function getTranslateValue(timeline) {
        var timelineStyle = window.getComputedStyle(timeline.get(0), null),
            timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
                timelineStyle.getPropertyValue("-moz-transform") ||
                timelineStyle.getPropertyValue("-ms-transform") ||
                timelineStyle.getPropertyValue("-o-transform") ||
                timelineStyle.getPropertyValue("transform");

        if (timelineTranslate.indexOf('(') >= 0) {
            var timelineTranslate = timelineTranslate.split('(')[1];
            timelineTranslate = timelineTranslate.split(')')[0];
            timelineTranslate = timelineTranslate.split(',');
            var translateValue = timelineTranslate[4];
        } else {
            var translateValue = 0;
        }

        return Number(translateValue);
    }

    function setTransformValue(element, property, value) {
        element.style["-webkit-transform"] = property + "(" + value + ")";
        element.style["-moz-transform"] = property + "(" + value + ")";
        element.style["-ms-transform"] = property + "(" + value + ")";
        element.style["-o-transform"] = property + "(" + value + ")";
        element.style["transform"] = property + "(" + value + ")";
    }

    //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
    function parseDate(events) {
        var dateArrays = [];
        events.each(function () {
            var dateComp = $(this).data('date').split('/'),
                newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
            dateArrays.push(newDate);
        });
        return dateArrays;
    }

    function parseDate2(events) {
        var dateArrays = [];
        events.each(function () {
            var singleDate = $(this),
                dateComp = singleDate.data('date').split('T');
            if (dateComp.length > 1) { //both DD/MM/YEAR and time are provided
                var dayComp = dateComp[0].split('/'),
                    timeComp = dateComp[1].split(':');
            } else if (dateComp[0].indexOf(':') >= 0) { //only time is provide
                var dayComp = ["2000", "0", "0"],
                    timeComp = dateComp[0].split(':');
            } else { //only DD/MM/YEAR
                var dayComp = dateComp[0].split('/'),
                    timeComp = ["0", "0"];
            }
            var newDate = new Date(dayComp[2], dayComp[1] - 1, dayComp[0], timeComp[0], timeComp[1]);
            dateArrays.push(newDate);
        });
        return dateArrays;
    }

    function daydiff(first, second) {
        return Math.round((second - first));
    }

    function minLapse(dates) {
        //determine the minimum distance among events
        var dateDistances = [];
        for (i = 1; i < dates.length; i++) {
            var distance = daydiff(dates[i - 1], dates[i]);
            dateDistances.push(distance);
        }
        return Math.min.apply(null, dateDistances);
    }

    /*
        How to tell if a DOM element is visible in the current viewport?
        http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    */
    function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }

    function checkMQ() {
        //check if mobile or desktop device
        return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
    }
});

//accordion-boxes
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu-box').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion-boxes'), false);
});

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

document.addEventListener("DOMContentLoaded", function () {
    let bgDark = document.querySelector('header').classList.contains('bg-dark-color');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 90) {
            if (bgDark) {
                document.querySelector('.fixed-nav').classList.add('fixed-top-dark', 'fixed-top');
            } else {
                document.querySelector('.fixed-nav').classList.add('fixed-top');
            }
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;

            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.querySelector('.fixed-nav').classList.remove('fixed-top');
            // if (bgDark) {
            //     document.querySelector('header').classList.add('bg-dark-color');
            // }
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
}); 