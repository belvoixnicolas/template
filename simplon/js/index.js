$(document).ready(function() {
    $('#contact form').hide();

    $('#contact img').click(function() {
        $('#contact form').animate({height: 'toggle'}, 'slow');
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        dots: false,
        items:1,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
});