// Tim Williams 2/23/2015
// This code was created using the tutorials at gotealeaf.com
 
 $(document).ready(function(){  //anonymous function (no name)
  //note: ready means do this once (when the document loads)
//   $('#player_color').click(function(){
//      alert('hi!');
//      // $('player_area').css('background-color', 'green')
//      return false;
//   });
  player_hits();
  player_stay();
  dealer_hit();
});

function player_hits() {
  //$('#hit_form input').click(function(){  //<-- binds only once to header
  $(document).on('click', 'form#hit_form input', function() { //<--rebinds
      //ajax request
      $.ajax({
        type: 'POST',
        url: '/game/player/hit'
        //data: {} //you don't need additonal paramenters in this case
      }).done(function(msg){
        //alert(msg); //done takes a message as a parameter

        //below: only return the 'game' div. not everything
        $('div#game').replaceWith(msg);//substitute whole element, not just the contents
      });
      return false; //supress the execution of the form so that we can hi-jack it
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


//note: you could do above with CSS, but you would be hiiting the server 
//each time you click

//you can use consol.log() if you are debugging with firefox

/*
webpage loads
browser then fires an event
jquery then picks up that event
jquery runs code to binds element continously (expensive, you should probably use angular)
*/