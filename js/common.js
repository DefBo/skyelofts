$(function() {
    $('.hero__main-nav-btn').click(function () {
        $('.hero__main-nav-wrap').toggleClass('_open');
        $(this).toggleClass('_close');
    })
});

TweenMax.to('body', 0.8, {opacity:1, onComplete:animationsStart});

function animationsStart() {
    TweenMax.to('.hero__header', 0.8, {y: 0});
    TweenMax.staggerTo('.hero__main-nav-link', 1.8, {opacity: 1, delay: 0.5}, 0.08);
    TweenMax.to('.hero__headings', 2, {opacity: 1, delay: 0.2});
    TweenMax.to('.hero__more', 1.5, {opacity: 1, delay: 1});
}
