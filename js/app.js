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
});
  