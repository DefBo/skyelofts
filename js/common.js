$(function() {
    $('.hero__main-nav-btn').click(function () {
        $('.hero__main-nav-wrap').toggleClass('_open');
        if($(window).width() < 740) {
            $('.hero__main-nav-link._contact').addClass('_gen');
        }
        if($(window).width() < 441) {
            $('.hero__main-nav-link._apply').addClass('_gen');
        }
        $(this).toggleClass('_close');
        if ($('.hero__main-nav-wrap').hasClass('_open')) {
            TweenMax.staggerFrom('.hero__main-nav-link._gen', 0.4, {x: "-200%"}, 0.08);
        }
    })
});

TweenMax.to('body', 0.8, {opacity:1, onComplete:animationsStart});

function animationsStart() {
    TweenMax.to('.hero__header', 0.8, {y: 0});
    TweenMax.staggerTo('.hero__main-nav-link', 1.8, {opacity: 1, delay: 0.5}, 0.08);
    TweenMax.to('.hero__headings', 2, {opacity: 1, delay: 0.2});
    TweenMax.to('.hero__more', 1.5, {opacity: 1, delay: 1});
}

$(window).resize(function() {
    if($(window).width() > 740) {
        $('.hero__main-nav-link._contact').removeClass('_gen');
    }
    if($(window).width() > 441) {
        $('.hero__main-nav-link._apply').removeClass('_gen');
    }
});

var controller = new ScrollMagic.Controller();

var revealImages = document.getElementsByClassName("home-content__img-wrap");
    for (var i=0; i<revealImages.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: revealImages[i],
            offset: 0,
            triggerHook: 0.5,
        })
    .setClassToggle(revealImages[i], "_visible")
    .addTo(controller);
}

var revealLinks = document.getElementsByClassName("home-content__title-underlined");
for (var i=0; i<revealLinks.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealLinks[i],
        offset: 0,
        triggerHook: 0.5,
    })
        .setClassToggle(revealLinks[i], "_visible")
        .addTo(controller);
}

var showMap = new ScrollMagic.Scene({
    triggerElement: ".home-map",
    offset: 0,
    triggerHook: 0.7,
})
    .setClassToggle(".home-map", "_visible")
    .addTo(controller);

var revealLinks = document.getElementsByClassName("fade-in");
for (var i=0; i<revealLinks.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealLinks[i],
        offset: 0,
        triggerHook: 0.6,
    })
        .setClassToggle(revealLinks[i], "_visible")
        .addTo(controller);
}