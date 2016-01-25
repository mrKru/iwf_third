$(document).ready(function(){
      $('a[href^="#"]').on('click',function (e) {
          e.preventDefault();

          var target = this.hash,
          $target = $(target);

          $('html, body').stop().animate({
              'scrollTop': $target.offset().top
          }, 1200, 'swing', function () {
              window.location.hash = target;
          });
      });
    });
$(window).scroll(function() {
        $('#arrow-two').each(function(){
        var imagePos = $(this).offset().top;
 
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("show_me");
            }
        });
    });

