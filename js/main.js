(function($) {
    "use strict"; // Start of use strict
    $(document).ready(function() {
        $('.page-loader').fadeOut(500)
    })

    $('.testimonial-area').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoHeight: true,
        pagination: true,
        navText: ["<span>&#8826;</span>", "<span>&#8827;</span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.variety-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        pagination: true,
        autoHeight: false,
        //        autoHeightClass: 'owl-height',
        navText: ["<img src='./img/slider/rightarrow.png' />", "<img src='./img/slider/leftarrow.png' />"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    })

    $('.main-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        pagination: true,
        autoHeight: false,
        //        autoHeightClass: 'owl-height',
        navText: ["<span>&#8826;</span>", "<span>&#8827;</span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.aboutUs-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        pagination: true,
        autoHeight: false,
        //        autoHeightClass: 'owl-height',
        navText: [],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });




    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '.navbar',
        offset: 100,

    });


    // go to top start
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        let windowHeight = window.innerHeight;
        if (scroll >= (windowHeight / 2)) $(".goto-top").addClass("active");
        else $(".goto-top").removeClass("active");
    });
    $(document).on('click', '.goto-top', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 100)
    });
    // go to top end

    // End of use strict

})(jQuery);

function initMap() {
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}