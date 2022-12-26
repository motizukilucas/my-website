$(document).ready(function(){
    $('button').on('click', function(){
       $('button').removeClass('active');
       $(this).addClass('active');
    });

    $('#exp-ab').on('click', function() {
        $('.exp').addClass('d-none');
        $('.exp-ab').removeClass('d-none');
    });
    $('#exp-ez').on('click', function() {
        $('.exp').addClass('d-none');
        $('.exp-ez').removeClass('d-none');
    });
    $('#exp-bi').on('click', function() {
        $('.exp').addClass('d-none');
        $('.exp-bi').removeClass('d-none');
    });
    $('#exp-il').on('click', function() {
        $('.exp').addClass('d-none');
        $('.exp-il').removeClass('d-none');
    });

    var $animationElements = $('.animation-element');
    var $window = $(window);

    var isMobile = window.matchMedia("only screen and (max-width: 768px)");
    if (isMobile.matches) {
        $animationElements.removeClass('animation-element');
    }

    function checkIfInView() {
        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElements, function () {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) { $element.addClass('in-view'); } 
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});
  