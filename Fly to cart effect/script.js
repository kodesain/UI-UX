function flyToElement(flyer, flyingTo) {
    var divider = 8;
    var flyerClone = $(flyer).clone();

    $(flyerClone).css({position: 'absolute', top: $(flyer).offset().top + 'px', left: $(flyer).offset().left + 'px', opacity: 1, 'z-index': 1000000});
    $('body').append($(flyerClone));

    var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width() / divider) / 2;
    var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height() / divider) / 2;

    $(flyerClone).animate({
        opacity: 0.4,
        left: gotoX,
        top: gotoY,
        width: $(flyer).width() / divider,
        height: $(flyer).height() / divider
    }, 700, function () {
        $(flyingTo).fadeOut('fast', function () {
            $(flyingTo).fadeIn('fast', function () {
                $(flyerClone).fadeOut('fast', function () {
                    $(flyerClone).remove();
                });
            });
        });
    });
}

$(document).ready(function () {
    $('.add-to-cart').on('click', function () {
        flyToElement($($(this).parent().parent().find('img.products').eq(0)), $('.cart-anchor'));
    });

    $('.add-to-cart-detail').on('click', function () {
        flyToElement($($(this).parents().find('img.products').eq(0)), $('.cart-anchor'));
    });

    $('.try-on-clothes').on('click', function () {
        flyToElement($($(this).parent().find('img').eq(0)), $('.cart-anchor'));
    });
});