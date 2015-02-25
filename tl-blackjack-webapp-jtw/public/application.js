// Tim Williams 2/23/2015
// This code was created using the tutorials at gotealeaf.com
 
 $(document).ready(function(){  
  player_hits();
  player_stay();
  dealer_hit();
});

function player_hits() {
  $(document).on('click', 'form#hit_form input', function() { //<--rebinds
      //ajax request
      $.ajax({
        type: 'POST',
        url: '/game/player/hit'
      }).done(function(msg){
        $('div#game').replaceWith(msg);
      });
      return false;
    });
}

function player_stay() {
    $(document).on('click', 'form#stay_form input', function() {
      $.ajax({
        type: 'POST',
        url: '/game/player/stay'
      }).done(function(msg){
        $('div#game').replaceWith(msg);
    });
    return false;
  });
}

function dealer_hit() {
    $(document).on('click', 'form#dealer_hit input', function() {
      $.ajax({
        type: 'POST',
        url: '/game/dealer/hit'
      }).done(function(msg){
        $('div#game').replaceWith(msg);
    });
    return false;
  });
}
