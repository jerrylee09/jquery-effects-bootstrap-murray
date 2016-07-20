$(document).ready(function() {
	// Event Listeners
  $('#fade-out').on('click', function() {
    $('.murray').fadeOut(500);
  });

  $('#fade-in').on('click', function() {
    $('.murray').fadeIn(200);
  });

  $('#fade-toggle').on('click', function() {
    $('.murray').fadeToggle(500);
  });

  $('#murray-box').on('click', '.murray', function() {
    $(this).animate({
        height: '-=50px',
        width: '-=50px'
      }, 500);
  });

  $('#slide-combo').on('click', function() {
    $('.murray').slideUp('fast').delay(1000).slideDown('slow');
  });

  $('#remove-button').on('click', function() {
    $('.murray').remove();
  });

  $('#add-button').on('click', function() {
    var size = randomNumber(200, 500);
    var img = '<img class="murray" src="http://www.fillmurray.com/' + size + '/' + size + '" />'
    $('#murray-box').append(img);
  });

});

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}
