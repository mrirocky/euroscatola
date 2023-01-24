jQuery(document).ready(function ($) {
    var liItem = $('.lesixp-list-item-section .sesixp-list-wrap ul li');

    document.querySelectorAll('.lesixp-list-item-section .sesixp-list-wrap ul li').forEach(function (ele, idx) {
        ele.addEventListener('click', function (e) {
            var clickedEle = document.querySelector('ul li.show');
            if (clickedEle != null)
                clickedEle.classList.remove('show');
            this.classList.add('show');

        })
    });

    // chi siam bottom slider 
    $('.valori-sliders').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></button>",
        nav: false,

    });

    $('.valori-sliders').on('afterChange', function (event, slick, currentSlide) {
        var testing = $(".slick-active").children().first();

        // var testing = $(".slick-active").children().first().addClass('active');
        // var testing = currentSlide.children().first().addClass('active');

        console.log(currentSlide);

    });
    //set active class to first slide
    $('.slider-nav .slick-slide').eq(0).addClass('slick-active-awesome');


    // $('.valori-sliders').on('afterChange', function () {
    //     var dataId = $('.slick-current');
    //     // console.log(dataId.children().first().addClass('active'));
    //     console.log(dataId.children().addClass('active'));

    // });
});
