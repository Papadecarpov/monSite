// Met en gras, italique, souligné

(function($) {
  $.fn.gis = function(paramètres)
  {
    this.each(function() {
      $(this).wrap('<b><i><u></u></i></b>');
    });
    return this;
  };
})(jQuery);