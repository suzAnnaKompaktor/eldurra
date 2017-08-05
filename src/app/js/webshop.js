(function($) {

  'use strict';

  // Full height
  $(window).on('load resize', function(){
    setListItemHeight();
  });

  function setListItemHeight() {
    var $item = $('.list-categoories li a');
    //$item.height($item.width());
  }

})(jQuery);
