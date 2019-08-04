$(document).ready(function(){
    TweenMax.to('body', 0.8, {opacity:1, onComplete:animationsStart});

    $(function() {
        $('.hero__main-nav-btn').click(function () {
            $('.hero__main-nav-wrap').toggleClass('_open');
            $(this).toggleClass('_close');
        })
    });

    function animationsStart() {
        TweenMax.to('.hero__header', 0.8, {y: 0});
        TweenMax.to('.hero__headings', 2, {opacity: 1, delay: 0.2});
        TweenMax.to('.hero__title', 2, {opacity: 1, delay: 0.2});
        TweenMax.to('.hero__more', 1.5, {opacity: 1, delay: 1});
        if($(window).width() > 1024) {
            TweenMax.staggerTo('.hero__main-nav-link', 0.8, {opacity: 1}, 0.08);
        } else {
            TweenMax.to('.hero__main-nav_general', 0.8, {y: 0});
            TweenMax.to('.hero__main-nav_home', 0.8, {y: 36});
        }
    }

    TweenMax.staggerTo('.animation-fade', 1.4, {opacity: 1, delay: 1.4}, 0.08);


    $(window).resize(function() {
        if($(window).width() > 1024) {
            $('.hero__main-nav-link').css("opacity", "1");
            $('.hero__main-nav_home').css("transform", "translate(0,0)");
        } else {
            $('.hero__main-nav_general').css("transform", "translate(0,0)");
            $('.hero__main-nav_home').css("transform", "translate(0,36px)");
            $('.hero__main-nav-link._gen').css("opacity", "0");
        }
    });

    $(window).resize(function() {
        if($(window).width() > 740) {
            $('.hero__main-nav-link._contact').removeClass('_gen').css("opacity", "1");
        } else {
            $('.hero__main-nav-link._contact').addClass('_gen').css("opacity", "0");
        }
    });


    if($(window).width() < 740) {
        $('.hero__main-nav-link._contact').addClass('_gen');
    }

    var controller = new ScrollMagic.Controller();

    var revealImages = document.getElementsByClassName("img-animation");
    for (var i=0; i<revealImages.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: revealImages[i],
            offset: 0,
            triggerHook: 0.85,
        })
            .setClassToggle(revealImages[i], "_visible")
            .addTo(controller);
    }

    var revealLinks = document.getElementsByClassName("home-content__title-underlined");
    for (var i=0; i<revealLinks.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: revealLinks[i],
            offset: 0,
            triggerHook: 0.6,
        })
            .setClassToggle(revealLinks[i], "_visible")
            .addTo(controller);
    }

    var showMap = new ScrollMagic.Scene({
        triggerElement: ".home-map",
        offset: 0,
        triggerHook: 0.85,
    })
        .setClassToggle(".home-map", "_visible")
        .addTo(controller);

    var revealLinks = document.getElementsByClassName("fade-in");
    for (var i=0; i<revealLinks.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: revealLinks[i],
            offset: 0,
            triggerHook: 0.8,
        })
            .setClassToggle(revealLinks[i], "_visible")
            .addTo(controller);
    }

    if($(window).width() > 1024) {
        $(".slide").each( function () {

            var bg = $(this).find(".bg");

            var parallax = TweenMax.from( bg, 1, {
                y: '25%',
                ease: Power0.easeNone
            } );

            var parallaxScene = new ScrollMagic.Scene({
                triggerElement: this, // <-- Use this to select current element
                triggerHook: 1,
                duration: '200%',
            })
                .setTween( parallax )
                .addTo(controller);
        });
    }

    $('.avail-table__toggles-item').click(function() {
        $(this).removeClass('_bordered');
        $('.avail-table__toggles-item').not(this).addClass('_bordered');
    });

    $('.avail-table__toggles-item._1br').click(function() {
        $('.avail-table__grid-row._2br').hide();
        $('.avail-table__grid-row._1br').show();
    });

    $('.avail-table__toggles-item._2br').click(function() {
        $('.avail-table__grid-row._2br').show();
        $('.avail-table__grid-row._1br').hide();
    });

    $('.avail-table__toggles-item._all').click(function() {
        $('.avail-table__grid-row').show();
    });

    $('.avail-table__grid-btn').click(function() {
        $(this).next('.plan-modal').show('fade');
    });

    $('.plan-modal__close').click(function() {
        $(this).closest('.plan-modal').hide('fade');
    });

    $('[data-fancybox="gallery"]').fancybox({
        // Options will go here
    });
});



