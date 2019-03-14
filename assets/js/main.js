(function($) {
    "use strict"
    //  import '/jquery.min.js';
    //  import '/bootstrap.min.js';

    // Fixed Nav
    var lastScrollTop = 0;
    $(window).on('scroll', function() {
        var wScroll = $(this).scrollTop();
        if (wScroll > $('#nav').height()) {
            if (wScroll < lastScrollTop) {
                $('#nav-fixed').removeClass('slide-up').addClass('slide-down');
            } else {
                $('#nav-fixed').removeClass('slide-down').addClass('slide-up');
            }
        }
        lastScrollTop = wScroll
    });
    //repeat animate
    $('.znak').mouseenter(function() {
        void(0);
        var classes = $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function() {
            $(indicator).parent().addClass(classes);
        }, 20);
    });


    $('.repeat').click(function() {
        var classes = $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function() {
            $(indicator).parent().addClass(classes);
        }, 20);
    });

    // Search Nav
    $('.search-btn').on('click', function() {
        $('.search-form').addClass('active');
    });

    $('.search-close').on('click', function() {
        $('.search-form').removeClass('active');
    });

    // Aside Nav
    $(document).click(function(event) {
        if (!$(event.target).closest($('#nav-aside')).length) {
            if ($('#nav-aside').hasClass('active')) {
                $('#nav-aside').removeClass('active');
                $('#nav').removeClass('shadow-active');
            } else {
                if ($(event.target).closest('.aside-btn').length) {
                    $('#nav-aside').addClass('active');
                    $('#nav').addClass('shadow-active');
                }
            }
        }
    });
    $('.nav-aside-close').on('click', function() {
        $('#nav-aside').removeClass('active');
        $('#nav').removeClass('shadow-active');
    });
    // Aside Nav-Vegetables
    $(document).click(function(event) {
        if (!$(event.target).closest($('#nav-aside-vegetables')).length) {
            if ($('#nav-aside-vegetables').hasClass('active')) {
                $('#nav-aside-vegetables').removeClass('active');
                $('#nav').removeClass('shadow-active');
            } else {
                if ($(event.target).closest('.aside-btn-vegetables').length) {
                    $('#nav-aside-vegetables').addClass('active');
                    $('#nav').addClass('shadow-active');
                }
            }
        }
    });
    // Aside Nav-Vegetables close
    $('#nav-close-vegetables').on('click', function() {
        $('#nav-aside-vegetables').removeClass('active');
        $('#nav').removeClass('shadow-active');
    });
    $('#nav-close').on('click', function() {
        $('#nav-aside').removeClass('active');
        $('#nav').removeClass('shadow-active');
    });

    // Sticky Shares
    var $shares = $('.sticky-container .sticky-shares'),
        $sharesHeight = $shares.height(),
        $sharesTop,
        $sharesCon = $('.sticky-container'),
        $sharesConTop,
        $sharesConleft,
        $sharesConHeight,
        $sharesConBottom,
        $offsetTop = 80;

    function setStickyPos() {
        if ($shares.length > 0) {
            $sharesTop = $shares.offset().top
            $sharesConTop = $sharesCon.offset().top;
            $sharesConleft = $sharesCon.offset().left;
            $sharesConHeight = $sharesCon.height();
            $sharesConBottom = $sharesConHeight + $sharesConTop;
        }
    }

    function stickyShares(wScroll) {
        if ($shares.length > 0) {
            if ($sharesConBottom - $sharesHeight - $offsetTop < wScroll) {
                $shares.css({ position: 'absolute', top: $sharesConHeight - $sharesHeight, left: 0 });
            } else if ($sharesTop < wScroll + $offsetTop) {
                $shares.css({ position: 'fixed', top: $offsetTop, left: $sharesConleft });
            } else {
                $shares.css({ position: 'absolute', top: 0, left: 0 });
            }
        }
    }

    $(window).on('scroll', function() {
        stickyShares($(this).scrollTop());
    });

    $(window).resize(function() {
        setStickyPos();
        stickyShares($(this).scrollTop());
    });

    setStickyPos();

    $('#txtGreeting').ready(function() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        var greeting = null;
        if (h < 12) {
            greeting = 'Good Morning!';
        } else {
            greeting = 'Good Afternoon!';
        }
        document.getElementById('txtGreeting').innerHTML = greeting;
        document.getElementById('txt').innerHTML =
            h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
    });

    function checkTime(i) {
        if (i < 10) { i = "0" + i; }
        return i;
    }

})(jQuery);