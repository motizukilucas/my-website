$(document).ready(function(){
    $('body').addClass('in-view');

    $('.menu').on('click', function(){
        $(this).addClass('d-none');
        $('.nav').removeClass('d-none');
        $('.nav').addClass('in-view');
    });
    
    $('#nav-close').on('click', function(){
        $('.nav').addClass('d-none');
        $('.menu').removeClass('d-none');
        $('.menu').addClass('in-view');
    });

    $('.nav-link').on('click', function(){
        $('.nav').addClass('d-none');
        $('.menu').removeClass('d-none');
        $('.menu').addClass('in-view');
    });

    $('button').on('click', function(){
       $('button').removeClass('active');
       $('li').removeClass('active');
       $(this).addClass('active');
       $(this).addClass('active');
       $(this).parent().addClass('active');
    });

    $('#exp-ab').on('click', function() {
        $('.exp').addClass('d-none');
        $('.exp-ab').removeClass('d-none');
        $('.exp-ab').addClass('in-view');
    });
    $('#exp-ez').on('click', function() {
        $('.exp').addClass('d-none');
        $('.exp-ez').removeClass('d-none');
        $('.exp-ez').addClass('in-view');
    });
    $('#exp-fe').on('click', function() {
        $('.exp').addClass('d-none');
        $('.exp-fe').removeClass('d-none');
        $('.exp-fe').addClass('in-view');
    });
    $('#exp-bi').on('click', function() {
        $('.exp').addClass('d-none');
        $('.exp-bi').removeClass('d-none');
        $('.exp-bi').addClass('in-view');
    });
    $('#exp-il').on('click', function() {
        $('.exp').addClass('d-none');
        $('.exp-il').removeClass('d-none');
        $('.exp-il').addClass('in-view');
    });
    $("#exp-uva").on("click", function() {
        $(".exp").addClass("d-none");
        $(".exp-uva").removeClass("d-none");
        $(".exp-uva").addClass("in-view");
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

    var $menu = $('.menu');
    var $about = $('#about');
    
    $window.on('scroll', function() { if (($menu.offset().top >= $about.offset().top)) { $menu.addClass('scrolled'); $('.arrow').removeClass('d-none'); } else { $menu.removeClass('scrolled'); $('.arrow').addClass('d-none'); } }); 
});
  