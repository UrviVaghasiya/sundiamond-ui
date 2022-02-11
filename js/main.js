(function($) {
    "use strict"; // Start of use strict
    $(document).ready(function() {
        $('.page-loader').fadeOut(500)
    })

    new WOW().init();

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

    // data table
    if ($('#guest-table').length) {
        $('#guest-table').DataTable({
            "scrollX": true,
            'columnDefs': [{
                'targets': 0,
                'checkboxes': {
                    'selectRow': true
                }
            }],
            'select': {
                'style': 'multi'
            },
            'order': [
                [1, 'asc']
            ]
        });
    }


    // range picker sliders
    // https://api.jqueryui.com/slider/#option-animate, https://api.jquerymobile.com/rangeslider/#option-trackTheme
    if ($("#sd-cut-slider").length) {
        // cut range
        $("#sd-cut-slider").slider({
            range: true,
            min: 0,
            max: 100,
            values: [25, 75],
            step: 25,
            slide: function(e, ui) {
                console.log('>>>>>>>>>>>> ', e, ui.value);
            }
        });
    }

    if ($("#sd-color-slider").length) {
        // cut range
        $("#sd-color-slider").slider({
            range: true,
            min: 0,
            max: 100,
            values: [0, 100],
            step: 10,
            slide: function(e, ui) {
                console.log('>>>>>>>>>>>> ', e, ui.value);
            }
        });
    }

    if ($("#sd-carat-slider").length) {
        // carat range
        $("#sd-carat-slider").slider({
            range: true,
            min: 0.05,
            max: 30,
            values: [0.05, 30],
            slide: function(e, ui) {
                console.log('>>>>>>>>>>>> ', e, ui.value);
            }
        });
    }

    if ($("#sd-clarity-slider").length) {
        // clarity range
        $("#sd-clarity-slider").slider({
            range: true,
            min: 0,
            max: 100,
            step: (100 / 9),
            values: [0, 100],
            slide: function(e, ui) {
                console.log('>>>>>>>>>>>> ', e, ui.value);
            }
        });
    }

    if ($("#sd-price-slider").length) {
        // price range
        $("#sd-price-slider").slider({
            range: true,
            min: 200,
            max: 5000,
            values: [200, 5000],
            slide: function(e, ui) {
                console.log('>>>>>>>>>>>> ', e, ui.value);
            }
        });
    }

    if ($("#sd-depth-slider").length) {
        // Depth slider advanced filter range
        $("#sd-depth-slider").slider({
            range: true,
            min: 46,
            max: 78,
            values: [46, 78],
            slide: function(e, ui) {
                console.log('>>>>>>>>>>>> ', e, ui.value);
            }
        });
    }

    if ($("#sd-table-slider").length) {
        // table slider advanced filter range
        $("#sd-table-slider").slider({
            range: true,
            min: 52,
            max: 80,
            values: [52, 80],
            slide: function(e, ui) {
                console.log('>>>>>>>>>>>> ', e, ui.value);
            }
        });
    }

    $('[rel="popover"]').popover({
        container: 'body',
        html: true,
        placement: 'bottom',
        content: function() {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    })

    $('body').on('click', function(e) {
        $('[rel=popover]').each(function() {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    // advanced filters

    $('.sd-plus-icon').click(function() {
        $(this).toggleClass('expanded');
        $(this).parents('.sd-advance-filter-section').find('.sd-advance-filter').toggleClass('sd-active')
    })

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