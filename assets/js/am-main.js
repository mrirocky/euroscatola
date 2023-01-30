jQuery(document).ready(function ($) {
    var liItem = $('.lesixp-list-item-section .sesixp-list-wrap ul li');

    document.querySelectorAll('.lesixp-list-item-section .sesixp-list-wrap ul li').forEach(function (ele, idx) {
        ele.addEventListener('click', function (e) {
            var clickedEle = document.querySelector('ul li.show');
            if (clickedEle != null)
                clickedEle.classList.remove('show');
            // this.previousElementSibling.style.borderBottom = '1px solid';
            this.classList.add('show');
            this.previousElementSibling.style.border = 'none';

        })
    });

    // chi siam bottom slider 
    $('.valori-sliders').slick({
        infinite: true,
        slidesToShow: 4,
        // autoplay: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></button>",
        nav: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    });

    // valori slider 
    $('.chi-siamo-number-slider').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></button>",
        nav: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],

    });

    var $valTimelineslideContainter = $('.valori-timeline-single-item'),
        $valTimeLineslider = $valTimelineslideContainter.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            navigation: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></button>",
            // nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><img src='assets/images/arrow-white.png'></button>",
        });

    // var $valTimelineslideContainter = $('.val-timeline-slider-container'),
    //     $valTimeLineslider = $valTimelineslideContainter.slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         arrows: true,
    //         infinite: true,
    //         speed: 1000,
    //         autoplay: true,
    //         autoplaySpeed: 4000,
    //         fade: true,
    //     });

    //     colorSettings = {
    //         section: ['blue', 'yellow', 'red']
    //     };

    //     changeColors = function (slide) {
    //         $valTimelineslideContainter.parentsUntil('.valori-timeline-single-item').css({ backgroundColor: 'colorSettings.section[slide]' });
    //     };

    // // Initial call to set color
    // changeColors(0);

    // $valTimeLineslider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     changeColors(nextSlide);
    // });

    // Team member slider 
    $('.team-member').slick({
        rows: 2,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        nav: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],

    });

    // Come operiamo 

    var divisioniLi = $(".divisioni-gallery .divisioni-text-wrap ul li");

    divisioniLi.hover(function (e) {
        var Liclass = $(this).attr('class');

        $(".divisioni-gallery .divisioni-text-wrap").addClass(Liclass);
    },
    function (e) {
        var Liclass = $(this).attr('class');

        $(".divisioni-gallery .divisioni-text-wrap").removeClass(Liclass);
    }
    );


});


