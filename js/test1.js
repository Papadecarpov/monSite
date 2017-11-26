    $(function() {
          $('.topOption').each(function(){
            if ($(this).attr("name") === $("#ecran").attr("name")) 
                $(this).addClass("current");
            });
        $('#myCarousel').carousel({ interval: 8000 });
      });
