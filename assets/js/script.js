/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // Dropdown Menu Slide Toggle
    $(function () {
        if ($('.navbar .dropdown').length) {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $('.navbar .dropdown').hover(function () {
                    $(this).children(".dropdown-menu").stop(true, false, true).slideToggle(350);
                });
            }
        }
        $('.navbar-toggler').on('click', function () {
            $('.navbar-toggler').find('span').toggleClass('ni-menu ni-cross');
        });
    });



    // owlCarousel init
    // for all 
    $(function () {
        if ($('.post-gallery-carousel').length) {
            $(".post-gallery-carousel").owlCarousel({
                items: 1,
                margin: 30,
                nav: $(window).width() > 1400 ? true : false,
                loop: true,
                autoplay: true,
                dots: false,
                autoplayHoverPause: true,
                navText: ['<img src="assets/img/arrow-left.svg" class="img-fluid" />', '<img src="assets/img/arrow-right.svg" class="img-fluid" />'],
            });
        }
        if ($('.surveys-carousel').length) {
            $(".surveys-carousel").owlCarousel({
                items: 3,
                margin: 30,
                nav: $(window).width() > 1200 ? true : false,
                loop: true,
                autoplay: true,
                dots: false,
                autoplayHoverPause: true,
                navText: ['<span class="ni ni-chevron-left"></span>', '<span class="ni ni-chevron-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
        if ($('.trending-news-carousel').length) {
            $(".trending-news-carousel").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                dots: false,
                autoplayHoverPause: true,
                navText: ['<span class="ni ni-chevron-left"></span>', '<span class="ni ni-chevron-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    1024: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });



});
