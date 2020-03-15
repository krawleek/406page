var $ = jQuery;
$(document).ready();

$(function() {

  var max_height = $('main').height();
  var max_width = $('main').width();
  var coffin_count = 8;


  for (var coffin_number = 1; coffin_number <= 5; coffin_number++) 
    for (var i = 0; i < coffin_count; i++) {

      var coffin_top = 80 + Math.random() * (max_height - 80);
      var coffin_left = Math.random() * (max_width - 80);
      var coffin_rotate = Math.random() * 360;
      $('main').append('<div class="coffin coffin-' + coffin_number + '" style="top:' + coffin_top + 'px; left: ' + coffin_left + 'px; transform: rotate(' + coffin_rotate + 'deg);"></div>');

    }

});

$(function() {
  $('.coffin').hover(function(){
    $(this).animate(
    {'opacity':0}, 
    30,
      function(){
        $(this).remove();
      }
    );
  });
});
