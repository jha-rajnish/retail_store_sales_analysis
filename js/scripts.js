$(document).ready(function() {
    $('#myCarousel').on('slid.bs.carousel', function () {
      var activeSlide = $('.carousel-inner .item.active');
      var backgroundUrl = activeSlide.find('img').attr('src');
      
      $('#backgroundBlur').fadeOut(500, function() {
        $(this).css('background-image', 'url(' + backgroundUrl + ')').fadeIn(500);
      });
    });
  
    // Set initial background image
    var initialBackgroundUrl = $('.carousel-inner .item.active').find('img').attr('src');
    $('#backgroundBlur').css('background-image', 'url(' + initialBackgroundUrl + ')');
  });
  