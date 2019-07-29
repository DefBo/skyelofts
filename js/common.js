$(function() {
    $('.hero__main-nav-btn').click(function () {
        $('.hero__main-nav-wrap').toggleClass('_open');
        $(this).toggleClass('_close');
        if ($('.hero__main-nav-wrap').hasClass('_open')) {
            TweenMax.staggerFrom('.hero__main-nav-link._gen', 0.6, {x: "-200%"}, 0.08);
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
    if($(window).width() < 740) {
        $('.hero__main-nav-link._contact').addClass('_gen');
    } else {
        $('.hero__main-nav-link._contact').removeClass('_gen');
    }
    if($(window).width() < 441) {
        $('.hero__main-nav-link._apply').addClass('_gen');
    } else {
        $('.hero__main-nav-link._apply').removeClass('_gen');
    }
});


