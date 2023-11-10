(function ($) {
    $.fn.customPhotoViewer = function () {
      var request;
      var $current;
      var cache = {};
      var $frame = $('.photo-box');
      var $thumbs = $('.thumbnail-anchor');
      
  
      $(document).on('click', '.thumbnail-anchor', function (e) {
        var $img;
        var src = this.href;
        request = src;
        
  
        e.preventDefault();
        
        $thumbs.removeClass('active');
        $thumbs.children('img').removeClass('active')
        $(this).addClass('active');
        $(this).children('img').addClass('active');
       
  
        if (cache.hasOwnProperty(src)) {
          if (cache[src].isLoading === false) {
            crossfade(cache[src].$img);
          }
        } else {
          $img = $('<img />');
  
          cache[src] = {
            $img: $img,
            isLoading: true
          };
  
          $img.on('load', function () {
            $img.hide();
            $frame.removeClass('is-loading').append($img);
            cache[src].isLoading = false;
  
            if (request === src) {
              crossfade($(this));
              console.log('Crossfade completed');
            }
          });
  
          $frame.addClass('is-loading');
          $img.attr({
            'src': src,
            'alt': this.title
          });
        }
        console.log('Clicked on thumbnail with src:', src);
      });
  
      function crossfade($img) {
        if ($current) {
          $current.stop().fadeOut('slow');
        }
  
        $img.css({
          marginLeft: -$img.width() / 2,
          marginTop: -$img.height() / 2
        });
        $img.stop().fadeTo('slow', 1);
        $current = $img;
        console.log('Crossfade started');
      }
  
      return this.each(function () {
        $('.thumbnail-anchor').eq(0).click();
        console.log('Initial photo clicked');
      });
    };
  })(jQuery);
  