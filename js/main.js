$(function() {

    //slider (4 block)
    $('.auto__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 3,
        autopflay: true,
        autofplaySpeed: 7000,
    });
});